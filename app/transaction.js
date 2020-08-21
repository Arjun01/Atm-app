const Atm = require("./atm");
const loadTransactions = require('./actions/load');
const saveTransaction = require('./actions/saveTransaction');

class Transaction extends Atm{
    constructor(amount, limit, denomination){
        super(limit, denomination);
        this.amount = amount;
        this.id = 0;
         this.date =0;
    }
    update = ()=>{
            console.log(`update function of transaction class ${this.amount}`);
            const withdrawData = this.getMoney();
            const transactions = loadTransactions();
           
            this.id = transactions.length+1;
            console.log(this.id);
            // transactions.push(withdrawData);
            //saveTransaction(transactions);
            
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