const fs = require("fs");

class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        switch(explorer.score){
            case explorer.score%3 === 0:
                explorer.trick = "FIZZ";
                break;
        }
        }
}


module.exports = FizzbuzzService