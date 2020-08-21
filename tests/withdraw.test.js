const Transaction = require('../app/transaction');

test('Should fetch account balance',()=>{
    const withdrawal ={
        10:0,
        20:0,
        50:0,
        100:0,
        200:2,
        500:1,
        1000:0
    }

    let withdraw = new Transaction(900,0);
    let money = withdraw.getMoney()
    expect(money).toEqual(withdrawal);
})