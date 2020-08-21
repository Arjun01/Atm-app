const Atm = require("./atm");
const loadTransactions = require('./actions/load');
const saveTransaction = require('./actions/saveTransaction');
const saveBalance = require('./actions/saveBalance');
const getBalance = require('./actions/balance');
const chalk = require('chalk');

class Transaction extends Atm{
    constructor(amount, limit, denomination){
        super(limit, denomination);
        this.amount = amount;
        this.id = 0;
         this.date =new Date();
         var dd = String(this.date.getDate()).padStart(2, '0');
         var mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = this.date.getFullYear();
         this.date =mm + '/' + dd + '/' + yyyy;
    }
    update = ()=>{
           const amount = this.amount;
           const limit = this.limit;
           if(amount <= limit){
               const accountBalance = getBalance();
               if(accountBalance.balance >= amount){
                    const withdrawData = JSON.stringify(this.getMoney());
                    const transactions = loadTransactions();
                    this.id = transactions.length+1;
                    // var data = JSON.stringify(withdrawData);
                    transactions.push({
                        id: this.id,
                        date: this.date,
                        details:{
                            amount: amount,
                            notesDispensed:withdrawData
                        }
                    });
                    let updatedBalance = accountBalance.balance - amount;
                     accountBalance.balance = updatedBalance;
                    
                    console.log(chalk.green(`Transaction successfull! `));
                    console.log(chalk.yellow.inverse(`Transaction Id: ${this.id} `),chalk.magenta(`Dated: ${this.date}`));   
                    console.log(chalk.green(`Amount withdrawn : ${amount}`));  
                    console.log(chalk.cyan(`Notes Dispatched: `),chalk.cyan.inverse(`${withdrawData}`));
                    saveTransaction(transactions);
                   saveBalance(accountBalance);

               }
               else{    
                     console.log(chalk.red(`You don't have enough balance left.Your current balance is Rs.${accountBalance.balance}/- only `));
                    
                }

               
           }
           else{
               console.log(chalk.red(`Transaction limit exceeded! The limit of Atm is: Rs.${limit}/- only `));
           }

            
    }
    show=() => {
          }
     getMoney = () => {
        if (this.denomination[0] < this.denomination[1]) this.denomination.reverse();
            let change = {};
            this.denomination.map(b => {
                change[b] = Math.floor(this.amount/b);
                this.amount -= b*change[b];
            }) 
            const money = this.isEmpty(change);

    return money
    };

    isEmpty(change){
        for(var prop in change){
            if(change[prop] === 0)
                delete change[prop];
        }
        return change
    }
    

}


module.exports = Transaction;