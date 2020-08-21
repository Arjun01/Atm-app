const fs = require('fs');
const path = require('path');
let getBalance = ()=>{
    const dataBuffer = fs.readFileSync(path.resolve(__dirname, '../data/balance-json.json'));
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    
    
}
module.exports = getBalance;