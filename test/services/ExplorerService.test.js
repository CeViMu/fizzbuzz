const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Unit test", () =>{
    test("1) Test para filtrar a los explorers que pertenecen a una mission", () =>{
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }) 

    test("2) Test para calcular el numero de explorers en una mission", () =>{
        const explorers = [{mission: "node"}, {mission:"node"}];
        const explorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersByMission).toBe(2);
    }) 
}) 