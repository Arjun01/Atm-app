const fs = require('fs');
const chalk = require('chalk')

let reset = ()=>{
    try {
        const value = [{id:1,
        date:"",
        details:{
            amount:0,
            notesDispensed:"{0:0}"}}]

        const balance = {
            balance: 50000
        }
       const transactionJSON = JSON.stringify(value);
       const balanceJSON = JSON.stringify(balance);

       fs.writeFileSync('./data/transactions-json.json', transactionJSON);
       fs.writeFileSync('./data/balance-json.json', balanceJSON);
        
       console.log(chalk.green(`Transactions deleted and balance reset to ${balance.balance} successfully! `));
        
    } catch (error) {
        return []     
    }

}

module.exports = reset;