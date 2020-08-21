const fs = require('fs');
const path = require('path');
class Atm{
    constructor(){
        const dataBuffer = fs.readFileSync(path.resolve(__dirname,'./data/atm-json.json'));
        const dataJSON = dataBuffer.toString();
        const atmData= JSON.parse(dataJSON);
        this.limit = atmData.limit;

       this.denomination =Object.values(atmData.denominations);
    }

};

module.exports = Atm;