const request = require("supertest");
const express = require("express");
const schemeRouter = require("../../schemes/scheme-router-new");
const schemeService = require("../../schemes/scheme-service");
jest.mock("../../schemes/scheme-service.js");

server = express();
server.use("", schemeRouter);
server.use((err, req, res, next) => {
    res.status(500).json({status: 500, details: "Internal Server Error"})
})

describe("Schemes model", () => {

    beforeEach(async () => {
        jest.resetAllMocks();
    })

    describe("GET \"/\"", () => {
        test("Returns a 500 error if an error is thrown", async () => {
            schemeService.findAll = jest.fn(() => {{throw {errno:19}}})
            const response = await request(server).get("/")
            console.log(response.body)

            expect(response.status).toEqual(500);
            // expect(response.body).toEqual(expectedBody)
            expect(schemeService.findAll).toHaveBeenCalledTimes(1);
        })
        test("Returns a 200 with a proper body", async () => {
            schemeService.findAll = jest.fn(() => {
                return new Promise(res => res([1, 2, 3]))
            })
            const expectedBody = [1, 2, 3];

            const response = await request(server).get("/")
            console.log(response.body)

            expect(response.status).toEqual(200);
            expect(response.body).toEqual(expectedBody)
            expect(schemeService.findAll).toHaveBeenCalledTimes(1);
        })
        
    })
})