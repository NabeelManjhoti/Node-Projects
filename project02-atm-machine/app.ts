import inquirer from "inquirer";

let myBalance:number = 10000; //USD
let myPin:number = 4321;

console.log("Welcome to Nabeel's ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter youur PIN",
        type: "number",
    },
]);

if(pinAnswer.pin === myPin){
    console.log("Your PIN is correct, Login sucessfully");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an Option",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"],
        },
    ]);

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw",
            },
        ]);

        if(amountAns.amount <= myBalance){
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdaraw Succesfully`);
            console.log(`Your current balance is ${myBalance}`);
            console.log("Thank you for using Nabeel's ATM Machine");
        }else{
            console.log("Insufficient Balance");
        }
    };

    if(operationAns.operation === "Check Balance"){
        console.log(`Your current balane is ${myBalance}`);
    };
}else{
    console.log("Your PIN is incorrect. Please Enter a correct PIN to Continue");
};