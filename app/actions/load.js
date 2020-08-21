const fs = require('fs');
const path = require('path');
let loadTransactions = ()=>{
    try {
        const dataBuffer = fs.readFileSync(path.resolve(__dirname,'../data/transactions-json.json'));
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);   
        
    } catch (error) {
        return []   
    }
}

module.exports = loadTransactions;