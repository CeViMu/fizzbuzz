const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit test", () =>{
    test("1) Test para obtener la lista de explorers de la mision node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    }); 

    test("2) Test para obtener la lista nombres de usuarios de la mision node", () => {
        const usernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernames).toEqual(["ajolonauta1", "ajolonauta2","ajolonauta3", "ajolonauta4", "ajolonauta5",
            "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    }); 

    test("3) Test para obtener la cantidad de explorers en una mision", () =>{
        const explorersByMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersByMission).toBe(10);
    });

    test("4) Test para validación fizzbuzz por", () =>{
        const validation = ExplorerController.applyValidationInNumber(15);
        expect(validation).toBe("FIZZBUZZ");
    });
});