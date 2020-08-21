const Atm = require("./atm");
const loadTransactions = require('./actions/load');
const saveTransaction = require('./actions/saveTransaction');

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
            console.log(`update function of transaction class ${this.amount}`);
           var amount = this.amount;
            const withdrawData = JSON.stringify(this.getMoney());
            const transactions = loadTransactions();
            this.id = transactions.length+1;
           var data = JSON.stringify(withdrawData);
            transactions.push({
                id: this.id,
                date: this.date,
                details:{
                    amount: amount,
                    notesDispensed:withdrawData
                }
            });
           
            saveTransaction(transactions);
            
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