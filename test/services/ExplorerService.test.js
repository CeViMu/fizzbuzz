const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require("./../../lib/utlis/Reader");

describe("Unit test", () =>{
    test("Test para filtrar a los explorers que pertenecen a una mission", () =>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers,"node")
        
        expect(explorersInNode[2]).toMatchObject({
            "name": "Woopa3",
            "githubUsername": "ajolonauta3",
            "score": 3,
            "mission": "node",
            "stacks": ["elixir", "groovy", "reasonML"]
          })
    }) 
}) 