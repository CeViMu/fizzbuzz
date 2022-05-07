const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require("./../../lib/utlis/Reader");

describe("Unit test", () =>{
    test("1) Test para filtrar a los explorers que pertenecen a una mission", () =>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers,"node")
        
        expect(explorersInNode).toStrictEqual(explorers.filter((explorer) => explorer.mission == "node"))
    }) 
}) 