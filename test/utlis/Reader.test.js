const fs = require("fs");
const Reader = require("../../lib/utlis/Reader");

describe("Unit test", () =>{
    test("Test for class Reader", () =>{
        const reader = Reader.readJsonFile("explorers.json");
        const data = fs.readFileSync("explorers.json");
        expect(reader).toStrictEqual(JSON.parse(data));
    }); 
}); 