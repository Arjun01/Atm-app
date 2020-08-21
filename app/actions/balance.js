const fs = require('fs');
const chalk = require('chalk')
let getBalance = ()=>{
    const dataBuffer = fs.readFileSync('./data/balance-json.json');
    const dataJSON = dataBuffer.toString();
    const balance= JSON.parse(dataJSON);
    
    console.log(chalk.green.inverse(`The current balance is: ${balance.balance}`));
}
module.exports = getBalance;