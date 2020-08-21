const getBalance = require('./balance');
const chalk = require('chalk')

let printBalance = () =>{
    
    const balance = getBalance();

    console.log(chalk.green.inverse(`The current balance is: ${balance.balance}`));

}
module.exports = printBalance;