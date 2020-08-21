 const fs = require('fs');
 const printBalance = require('./actions/printBalance');
 const listTransactions = require('./actions/listTransactions');
 const reset = require('./actions/reset');
 const Transaction = require('./transaction');
 const yargs = require('yargs');


// Create withdraw command
//Run in command promt
//=======> node index.js withdraw --amount _amount_to_withdraw_ --selected _selected_denomination_  <==========
//or node index.js --help to see all commands   
yargs.command({
    command: 'withdraw',
    describe: 'Withdraw some amount with or without selected denomination',
    builder: {
        amount: {
            describe: 'Total amount to withdraw',
            demandOption: true,
            type: 'integer'
        },
        selected: {
            describe: 'Select any denomination',
            demandOption: false,
            type: 'integer'
        }
    },
    handler(argv) {
        let withdraw = new Transaction(argv.amount);
        withdraw.update();
      
       // console.log(argv.amount, argv.selected)
    }
})

// Create reset command
//Run in command promt =======> node index.js reset  <==========
//or node index.js --help to see all commands   
yargs.command({
    command: 'reset',
    describe: 'Reset all transactions and balance',

    handler() {
        reset();
    }
})

// Create list  command
//Run in command promt> =======> node index.js list     <==========
//or node index.js --help to see all commands

yargs.command({
    command: 'list',
    describe: 'Lists all of your transactions',
    handler() {
        listTransactions();
    }
})

// Create balance command
//Run in command promt> =======> node index.js balance <==========
//or node index.js --help to see all commands   
yargs.command({
    command: 'balance',
    describe: 'Reads current balance',
    handler() {
       printBalance();
    }
})

yargs.parse()



















