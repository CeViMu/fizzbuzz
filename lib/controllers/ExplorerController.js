const Reader = require("./../../lib/utlis/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = this.getExplorersByMission(mission)
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission)

    }

    static getExplorersAmonutByMission(mission){
        const explorers = this.getExplorersByMission(mission)
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission)
    }

    static applyValidationInNumber(number){ 
        return FizzbuzzService.applyValidationInNumber(number);
    }
    
}

module.exports = ExplorerController 