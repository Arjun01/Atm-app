const fs = require('fs');

let saveTransaction = (statement)=>{
    const dataJSON = JSON.stringify(statement);
    fs.writeFileSync('./data/transactions-json.json', dataJSON);

}
module.exports = saveTransaction;