const fs = require('fs');
class Atm{
    constructor(){
        const dataBuffer = fs.readFileSync('./data/atm-json.json');
        const dataJSON = dataBuffer.toString();
        const atmData= JSON.parse(dataJSON);
        this.limit = atmData.limit;

       this.denomination =Object.values(atmData.denominations);
       //let keys={};
      // console.log(typeof(keys));

      // for(let k in atmData.denominations) keys.push(parseInt(k));
       //console.log(typeof(keys));
       // this.denomination = [];
        // for(var key =0; key< keys.length;key++){
        //     let currency = keys[key];
        //     this.denomination[key] = {key: atmData.denominations[currency]};

        // }
    }

};

module.exports = Atm;