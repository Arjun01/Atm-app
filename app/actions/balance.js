const fs = require('fs');
const chalk = require('chalk')
let getBalance = ()=>{
    const dataBuffer = fs.readFileSync('./data/balance-json.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    
    
}
module.exports = getBalance;