const fs = require("fs");

class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const ListExplorers = ExplorerService.filterByMission(explorers, mission);
        return ListExplorers.map(explorer => explorer.githubUsername);  
    }


}

module.exports = ExplorerService;
