const load = require('./load');
const chalk = require('chalk')

let listTransactions = () =>{
    
    const transactions = load();

    transactions.forEach((transaction) =>{
        console.log(chalk.magenta(`Transaction id: ${transaction.id}`),
                    chalk.yellow(`Dated : ${transaction.date}`));

        console.log(chalk.cyan.inverse(`Amount withdrawn: ${transaction.details.amount}`));
    }) 

}
module.exports = listTransactions;