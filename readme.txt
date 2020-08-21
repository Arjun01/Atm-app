To run the app
Step1: Download all the required node modules
For that run:   npm install

Step2: Go to the index.js file directory to execute the file
for that type: cd app

Step 3: Now you can execute each and every command using current command prompt, since it uses yarn for that.

Either use command: node index.js --help  // to see all the commands available

OR
Follow these commands below:

a) to withdraw some amount from ATM:
    type: node index.js withdraw --amount enter_amount
    //The above command will execute for non-selected denomination since, no denomination was selected.
    eg: node index.js withdraw --amount 900
        Output should be -> {"200": 2 , "500": 1}

b) To withdraw some amount from ATM with selected denomination:
    type: node index.js withdraw --amount enter_amount --selected enter_denomination
    eg: node index.js withdraw --amount 900 --selected 200 
        Output should be -> {"100": 1, "200" : 4}

c) To check your current balance:
    type: node index.js balance

d) To see all the previous transactions:
    type: node index.js list

e)Since this program monitors the balance and if you wanna play more with it, but your balance is exhausted. 
    You can do it using reset command.
    type: node index.js reset 
    //This command deletes all your previous transactions and resets your balance to 50000 again.