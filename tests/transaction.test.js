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