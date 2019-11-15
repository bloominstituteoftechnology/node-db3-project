const request = require("supertest");
const express = require("express");
const schemeRouter = require("../../schemes/scheme-router-new");
const schemeService = require("../../schemes/scheme-service");

server = express();
server.use(express.json())
server.use("", schemeRouter);
server.use((err, req, res, next) => {
    const errObj = {
        status: err.status || 500,
        details: err.details || "Internal Server Error"
    }
    res.status(errObj.status).json(errObj);
})

test("We are in testing mode", () => {
    expect(process.env.DB_ENV).toEqual("testing");
})

describe("Schemes router", () => {

    beforeEach(async () => {
        jest.resetAllMocks();
    })

    describe("GET \"/\"", () => {
        test("Returns a 200 with a proper body", async () => {
            schemeService.findAll = jest.fn(() => {
                return new Promise(res => res([1, 2, 3]))
            })
            const expectedBody = [1, 2, 3];

            const response = await request(server).get("/")

            expect(response.status).toEqual(200);
            expect(response.body).toEqual(expectedBody)
            expect(schemeService.findAll).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if an error is thrown", async () => {
            schemeService.findAll = jest.fn(() => {{throw {errno:19}}})
            
            const response = await request(server).get("/")

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.findAll).toHaveBeenCalledTimes(1);
        })
    })

    describe("GET \"/:id\"", () => {
        test("Returns a 200 with a proper body", async () => {
            schemeService.findById = jest.fn((id) => {
                return new Promise(res => res({scheme_name: "Test"}))
            })
            const expectedName = "Test";

            const response = await request(server).get("/1")

            expect(response.status).toEqual(200);
            expect(response.body.scheme_name).toEqual(expectedName)
            expect(schemeService.findById).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if a generic error is thrown", async () => {
            schemeService.findById = jest.fn((id) => {{throw {errno:19}}})
            
            const response = await request(server).get("/1")

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.findById).toHaveBeenCalledTimes(1);
        })
        test("Returns a specfic error status if an error is thrown", async () => {
            const error = {status:404, details:"Not Found"}
            const expectedStatus = 404
            schemeService.findById = jest.fn((id) => {{throw error}})
            
            const response = await request(server).get("/1")

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(schemeService.findById).toHaveBeenCalledTimes(1);
        })
    })

    describe("GET \"/:id/steps\"", () => {
        test("Returns a 200 with a proper body", async () => {
            schemeService.findSteps = jest.fn((id) => {
                return new Promise(res => res([1,2,3]))
            })
            const expectedBody = [1,2,3];

            const response = await request(server).get("/1/steps")

            expect(response.status).toEqual(200);
            expect(response.body).toEqual(expectedBody)
            expect(schemeService.findSteps).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if a generic error is thrown", async () => {
            schemeService.findSteps = jest.fn((id) => {{throw {errno:19}}})
            
            const response = await request(server).get("/1/steps")

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.findSteps).toHaveBeenCalledTimes(1);
        })
        test("Returns a specfic error status if an error is thrown", async () => {
            const error = {status:404, details:"Not Found"}
            const expectedStatus = 404
            schemeService.findSteps = jest.fn((id) => {{throw error}})
            
            const response = await request(server).get("/1/steps")

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(schemeService.findSteps).toHaveBeenCalledTimes(1);
        })
    })

    describe("DELETE \"/:id\"", () => {
        test("Returns a 200 with a proper body", async () => {
            schemeService.remove = jest.fn((id) => {
                return new Promise(res => res({scheme_name: "removed"}))
            })
            const expectedName = "removed";

            const response = await request(server).delete("/1")
            const singleScheme = response.body.removed;

            expect(response.status).toEqual(200);
            expect(singleScheme.scheme_name).toEqual(expectedName)
            expect(schemeService.remove).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if a generic error is thrown", async () => {
            schemeService.remove = jest.fn((id) => {{throw {errno:19}}})
            
            const response = await request(server).delete("/1")

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.remove).toHaveBeenCalledTimes(1);
        })
        test("Returns a specfic error status if an error is thrown", async () => {
            const error = {status:404, details:"Not Found"}
            const expectedStatus = 404
            schemeService.remove = jest.fn((id) => {{throw error}})
            
            const response = await request(server).delete("/1")

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(schemeService.remove).toHaveBeenCalledTimes(1);
        })
    })

    describe("POST \"/\"", () => {
        test("bodyValidator sends 400 with no body", async () => {
            schemeService.add = jest.fn()
            const expectedStatus = 400;

            const response = await request(server)
                                    .post("/")
                                    

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(response.body.details).toMatch(/body/i)
            expect(schemeService.add).toHaveBeenCalledTimes(0);
        })
        test("schemeValidator sends 400 with no scheme_name", async () => {
            schemeService.add = jest.fn()
            const expectedStatus = 400;

            const response = await request(server).post("/")
                                .send({no_scheme_name: "test"})

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(response.body.details).toMatch(/scheme_name/i)
            expect(schemeService.add).toHaveBeenCalledTimes(0);
        })

        test("Returns a 201 with a proper body", async () => {
            schemeService.add = jest.fn(() => {
                return new Promise(res => res({scheme_name: "Added"}))
            })
            const expectedBody = {scheme_name: "Added"};

            const response = await request(server)
                                    .post("/")
                                    .send({scheme_name: "Added"})

            expect(response.status).toEqual(201);
            expect(response.body).toEqual(expectedBody)
            expect(schemeService.add).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if an error is thrown", async () => {
            schemeService.add = jest.fn(() => {{throw {errno:19}}})
            
            const response = await request(server)
                                    .post("/")
                                    .send({scheme_name: "Added"})

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.add).toHaveBeenCalledTimes(1);
        })
    })

    describe("PUT \"/:id\"", () => {
        test("bodyValidator sends 400 with no body", async () => {
            schemeService.update = jest.fn()
            const expectedStatus = 400;

            const response = await request(server)
                                    .put("/1")
                                    

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(response.body.details).toMatch(/body/i)
            expect(schemeService.update).toHaveBeenCalledTimes(0);
        })
        test("schemeValidator sends 400 with no scheme_name", async () => {
            schemeService.update = jest.fn()
            const expectedStatus = 400;

            const response = await request(server).put("/1")
                                .send({no_scheme_name: "test"})

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(response.body.details).toMatch(/scheme_name/i)
            expect(schemeService.update).toHaveBeenCalledTimes(0);
        })

        test("Returns a 201 with a proper body", async () => {
            schemeService.update = jest.fn(() => {
                return new Promise(res => res({scheme_name: "Updated"}))
            })
            const expectedBody = {scheme_name: "Updated"};

            const response = await request(server)
                                    .put("/1")
                                    .send({scheme_name: "Updated"})

            expect(response.status).toEqual(200);
            expect(response.body).toEqual(expectedBody)
            expect(schemeService.update).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if an error is thrown", async () => {
            schemeService.update = jest.fn(() => {{throw {errno:19}}})
            
            const response = await request(server)
                                    .put("/1")
                                    .send({scheme_name: "Updated"})

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.update).toHaveBeenCalledTimes(1);
        })
    })

    describe("POST \"/:id/steps\"", () => {
        test("bodyValidator sends 400 with no body", async () => {
            schemeService.addStep = jest.fn()
            const expectedStatus = 400;

            const response = await request(server)
                                    .post("/1/steps")
                                    

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(response.body.details).toMatch(/body/i)
            expect(schemeService.addStep).toHaveBeenCalledTimes(0);
        })
        test("stepValidator sends 400 if missing required properties", async () => {
            schemeService.addStep = jest.fn()
            const expectedStatus = 400;

            const response = await request(server).post("/1/steps")
                                .send({no_scheme_name: "test"})

            expect(response.status).toEqual(expectedStatus);
            expect(response.body.status).toEqual(expectedStatus)
            expect(response.body.details).toMatch(/missing/i)
            expect(schemeService.addStep).toHaveBeenCalledTimes(0);
        })

        test("Returns a 201 with a proper body", async () => {
            const newStep = {step_number:1, instructions:"testing"}
            schemeService.addStep = jest.fn(() => {
                return new Promise(res => res({instructions: "Added"}))
            })
            const expectedInstr = "Added";

            const response = await request(server)
                                    .post("/1/steps")
                                    .send(newStep)

            expect(response.status).toEqual(201);
            expect(response.body.instructions).toEqual(expectedInstr)
            expect(schemeService.addStep).toHaveBeenCalledTimes(1);
        })
        test("Returns a 500 error if an error is thrown", async () => {
            const newStep = {step_number:1, instructions:"testing"}
            schemeService.addStep = jest.fn(() => {{throw {errno:19}}})
            
            const response = await request(server)
                                    .post("/1/steps")
                                    .send(newStep)

            expect(response.status).toEqual(500);
            expect(response.body.status).toEqual(500)
            expect(schemeService.addStep).toHaveBeenCalledTimes(1);
        })
    })
})