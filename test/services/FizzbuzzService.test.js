const FizzbuzzService = require('./../../lib/services/FizzbuzzService');


describe("Unit tests", () =>{
    test("1) Test para validar score", () =>{
        const explorer = [{mission: "node", score: 3}];
        const explorerScore = FizzbuzzService.applyValidationInExplorer(explorer)
        expect(explorerScore).toEqual("FIZZ");
    }) 
})