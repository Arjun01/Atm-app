const fs = require('fs');

let saveBalance = (statement)=>{
    const dataJSON = JSON.stringify(statement);
    fs.writeFileSync('./data/balance-json.json', dataJSON);

}
module.exports = saveBalance;