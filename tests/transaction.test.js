  const getBalance = require('../app/actions/balance')
  const loadTransactions = require('../app/actions/load');

    test('Should fetch account balance',()=>{
        const balance ={
            balance: 48200
        }

        let accountBalance = getBalance();
        expect(accountBalance).toEqual(balance);
    })
    test('Should load transactions',()=>{
        const transactions =[{
            "id":1,
                "date":"08/20/2020",
                "details":{
                    "amount":230,
                    "notesDispensed":"{10: 1, 20: 1, 200: 1}"
                }
        
            },
            {
                "id":2,
                "date":"08/21/2020",
                "details":{
                    "amount":900,
                    "notesDispensed":"{\"100\":9}"
                }
                    
            },
            {
                        
                "id":3,
                "date":"08/21/2020",
                "details":{
                    "amount":900,
                    "notesDispensed":"{\"200\":2,\"500\":1}"
                }
                    
            }]

        let loadedTransaction = loadTransactions();
        expect(loadedTransaction).toEqual(transactions);
    })
//Following can be more test cases:
//Writing the test ideas as comments because of time constraits.
// Transaction Test Ideas:
//
// Should not complete transaction with invalid Amount.
// Should not be able to do transaction with insufficient account balance.
// Should be able to do transaction without spefiying selected denomination.
// Should be able to do transaction with selected denomination. 
// Should not be able to do transaction if transaction limit exceeds.
// Should update transaction-json.json after each successful transaction.
// Should fetch current account balance from balance-json.json to compare with amount to withdraw. 
// Should deduct withdrwal amount from account balance in balance-json.json.
// Should increment id of each consecutive transaction.
// Should fetch all the previous transactions and push new transaction into that.
// Should add current date with each transaction data into transaction-json.
// Should display notes dispatched after each transaction in a sorted way.
// verify the error message by inserting the invalid amount.
// verify the error message by inserting amount more than account balance.
// verify the error message by inserting withdrawal amount more than atm limit.
// Should display the correct message after withdrawal transaction.
// Should be able to fetch currency denominations available from atm-json file.
// 


//
// Actions test Ideas
//
// Should be able to reset all the previous transactions and update balance. (Not recommended for real scenario.)
// Should display success message after reset command.
// verify the message after getbalance command.
// verify the message after list statements command.
// Should not be able to save a transaction without doing a  successful transaction.
// Should not be able to reduce account balance without doing a successful transaction.
