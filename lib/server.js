const ExplorerController = require("./../lib/controllers/ExplorerController");
const express = require("express");
const { request, response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) =>{
    const mission = request.params.mission;
    const usernamesExplorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission, explorers: usernamesExplorersInMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) =>{
    const score = request.params.score;
    const trick = ExplorerController.applyValidationInNumber(score);
    response.json({score, trick});
});


