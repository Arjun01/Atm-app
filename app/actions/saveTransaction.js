const fs = require('fs');

let saveTransaction = (statement)=>{
    const dataJson = JSON.stringify(statement);
        console.log(dataJson);

}
module.exports = saveTransaction;