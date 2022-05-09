const FizzbuzzService = require('./../../lib/services/FizzbuzzService');

const explorers = [
    { name: "Explorer1", score: 1, trick: 1},
    { name: "Explorer3", score: 3, trick: "FIZZ"},
    { name: "Explorer5", score: 5, trick: "BUZZ"},
    { name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
];

describe("Unit tests", () =>{
    test("1) Test para validar score", () =>{
            const explorer1 = FizzbuzzService.applyValidationInExplorer(explorers[0]);
            expect(explorer1.trick).toBe(1);
    
            const explorer2 = FizzbuzzService.applyValidationInExplorer(explorers[1]);
            expect(explorer2.trick).toBe("FIZZ");
    
            const explorer3 = FizzbuzzService.applyValidationInExplorer(explorers[2]);
            expect(explorer3.trick).toBe("BUZZ");

            const explorer4 = FizzbuzzService.applyValidationInExplorer(explorers[3]);
            expect(explorer3.trick).toBe("FIZZBUZZ");
    } )
})