const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Unit test", () =>{
    test("1) Test para obtener la lista de explorers de la mision node", () => {
        //const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    }) 
})