const fs = require('fs');

let loadTransactions = ()=>{
    try {
        const dataBuffer = fs.readFileSync('./data/transactions-json.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);   
        
    } catch (error) {
        return []   
    }
}

module.exports = loadTransactions;