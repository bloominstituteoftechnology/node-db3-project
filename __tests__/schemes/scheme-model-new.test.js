const db = require("../../data/dbConfig");
const schemeModel = require("../../schemes/scheme-model-new");
const { stepData } = require("../../data/seeds/02-steps")
const { schemeData } = require("../../data/seeds/01-schemes")

describe("Schemes model", () => {

    beforeEach(async () => {
        await db("steps").truncate();
        await db("schemes").truncate();
        await db("schemes").insert(schemeData);
        await db("steps").insert(stepData);
    })

    test(`"find()" returns all schemes in db`, async () => {
        const dataLength = 6;

        const allSchemes = await schemeModel.find()

        expect(allSchemes.length).toEqual(dataLength)
    })

    describe("findbyId()", () => {
        test(`Returns one specific scheme`, async () => {
            const schemeName = "Revenge";
            const schemeId = 3;
    
            const singleScheme = await schemeModel.findById(3);
    
            expect(singleScheme.id).toEqual(schemeId);
            expect(singleScheme.scheme_name).toEqual(schemeName);
        })
        test(`Returns undefined if id doesn't exist in db`, async () => {
            expect.assertions(4);
            const singleScheme1 = await schemeModel.findById(10);
            const singleScheme2 = await schemeModel.findById("string");
            const singleScheme3 = await schemeModel.findById({});
            const singleScheme4 = await schemeModel.findById(null);
    
            expect(singleScheme1).toBeUndefined();
            expect(singleScheme2).toBeUndefined();
            expect(singleScheme3).toBeUndefined();
            expect(singleScheme4).toBeUndefined();
        })
        test(`Throws an error if called with no argument`, () => {
            expect.assertions(1);
            return schemeModel.findById()
                    .catch(e => expect(e.toString()).toMatch(/error/i))
        })
    })
    
    describe("findByName", () => {
        test(`Returns one specific scheme`, async () => {
            const schemeName = "Revenge";
            const schemeId = 3;
    
            const singleScheme = await schemeModel.findByName("Revenge");
    
            expect(singleScheme.id).toEqual(schemeId);
            expect(singleScheme.scheme_name).toEqual(schemeName);
        })
        test(`Returns undefined if name doesn't exist in db`, async () => {
            expect.assertions(4);
            const singleScheme1 = await schemeModel.findByName(10);
            const singleScheme2 = await schemeModel.findByName("string");
            const singleScheme3 = await schemeModel.findByName({});
            const singleScheme4 = await schemeModel.findByName(null);
    
            expect(singleScheme1).toBeUndefined();
            expect(singleScheme2).toBeUndefined();
            expect(singleScheme3).toBeUndefined();
            expect(singleScheme4).toBeUndefined();
        })
        test(`Throws an error if called with no argument`, () => {
            expect.assertions(1);
            return schemeModel.findByName()
                    .catch(e => expect(e.toString()).toMatch(/error/i))
        })
    })

    describe("findSteps()", () => {
        test("Returns steps for only a specfic scheme", async () => {
            const schemeName = "Revenge";
            const expectedLength = 4;
    
            const stepsArray = await schemeModel.findSteps(3);
    
            expect(stepsArray.length).toEqual(expectedLength)
            stepsArray.forEach(step => {
                expect(step.scheme_name).toEqual(schemeName);
            })
        })
        test(`Returns an empty array if scheme doesn't exist with id`, async () => {
            const expectedLength = 0;

            const stepsArray1 = await schemeModel.findSteps(10);
            const stepsArray2 = await schemeModel.findSteps("string");
            const stepsArray3 = await schemeModel.findSteps({});
            const stepsArray4 = await schemeModel.findSteps(null);
            const stepsArray5 = await schemeModel.findSteps();
    
            expect(stepsArray1.length).toEqual(expectedLength);
            expect(stepsArray2.length).toEqual(expectedLength);
            expect(stepsArray3.length).toEqual(expectedLength);
            expect(stepsArray4.length).toEqual(expectedLength);
            expect(stepsArray5.length).toEqual(expectedLength);
        })
    })

    describe("add() a scheme", () => {
        test("adding a scheme increases database length by 1", async () => {
            const newScheme = {scheme_name: "Shave all fur"};
            const expectedLength = 7;

            await schemeModel.add(newScheme);
            const schemeArray = await schemeModel.find()

            expect(schemeArray.length).toEqual(expectedLength);
        })
        test("adding a scheme is searchable in the db", async () => {
            const newScheme = {scheme_name: "Shave all fur"};
            const schemeName = "Shave all fur";

            await schemeModel.add(newScheme);
            const singleScheme = await schemeModel.findById(7)

            expect(singleScheme.scheme_name).toEqual(schemeName);
        })
        test("Throws an error if there are extra properties", () => {
            expect.assertions(1);
            const newScheme = {scheme_name: "Tickle Ray", description: "extra"};

            return schemeModel.add(newScheme)
                    .catch(err => expect(err.toString()).toMatch(/error/i))
        })
    })

    describe("update() a scheme", () => {
        test("Scheme name updates properly", async () => {
            const updatedScheme = {scheme_name: "Tear the ligaments"}
            const schemeId = 3
            const expectedName = "Tear the ligaments";

            await schemeModel.update(updatedScheme, 3);
            const singleScheme = await schemeModel.findById(schemeId);

            expect(singleScheme.scheme_name).toEqual(expectedName);
        })
        test("Throws an error if name already exists", () => {
            expect.assertions(1);
            const updatedScheme = {scheme_name: "Revenge"} 

            return schemeModel.update(updatedScheme, 1)
                    .catch(e => expect(e.toString()).toMatch(/error/i))
        })
    })

    describe("remove() a scheme", () => {
        test("removing a scheme successfully decreases the total db length", async () => {
            const expectedLength = 5;

            const success = await schemeModel.remove(1);
            const schemesArray = await schemeModel.find();

            expect(success).toEqual(1);
            expect(schemesArray.length).toEqual(expectedLength);
        })
        test("Unable to remove an id that isn't in the db", async () => {
            const success = await schemeModel.remove(10);

            expect(success).toEqual(0);
        })
    })

    describe("findStepById()", () => {
        test(`Returns one specific step`, async () => {
            const expectedInstr = "????";
            const stepId = 7;
    
            const singleStep = await schemeModel.findStepById(7);
    
            expect(singleStep.id).toEqual(stepId);
            expect(singleStep.instructions).toEqual(expectedInstr);
        })
        test(`Returns undefined if id doesn't exist in db`, async () => {
            expect.assertions(4);
            const singleStep1 = await schemeModel.findStepById(100);
            const singleStep2 = await schemeModel.findStepById("string");
            const singleStep3 = await schemeModel.findStepById({});
            const singleStep4 = await schemeModel.findStepById(null);
    
            expect(singleStep1).toBeUndefined();
            expect(singleStep2).toBeUndefined();
            expect(singleStep3).toBeUndefined();
            expect(singleStep4).toBeUndefined();
        })
        test(`Throws an error if called with no argument`, () => {
            expect.assertions(1);
            return schemeModel.findStepById()
                    .catch(e => expect(e.toString()).toMatch(/error/i))
        })
    })

    describe("addStep()", () => {
        test("adding a step will increase the length of steps for a scheme", async () => {
            const newStep = {
                scheme_id: 6,
                step_number: 5,
                instructions: "profit"
            }
            const expectedLength = 5;
            const SchemeId = 6

            await schemeModel.addStep(newStep);
            const stepArray = await schemeModel.findSteps(SchemeId)

            expect(stepArray.length).toEqual(expectedLength);
        })
        test("adding a step is searchable in the db", async () => {
            const newStep = {
                scheme_id: 6,
                step_number: 5,
                instructions: "profit"
            }
            const expectedInstr = "profit";
            const stepId = 23

            await schemeModel.addStep(newStep);
            const singleStep = await schemeModel.findStepById(stepId)

            expect(singleStep.instructions).toEqual(expectedInstr);
        })
        test("Throws an error if there are extra properties", () => {
            expect.assertions(1);
            const newStep = {
                scheme_id: 6,
                step_number: 5,
                instructions: "profit",
                notes: "Extra properties rock"
            }

            return schemeModel.addStep(newStep)
                    .catch(err => expect(err.toString()).toMatch(/error/i))
        })
    })
})