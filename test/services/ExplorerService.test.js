const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Unit test", () =>{
    test("1) Test para filtrar a los explorers que pertenecen a una mission", () =>{
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }) 
}) 