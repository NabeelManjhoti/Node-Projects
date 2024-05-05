#! usr/bin/dev node;
import inquirer from "inquirer";

const answer = await inquirer.prompt ([
    {name: "firstNumber",
     type: "number",
     message: "Enter First Number"},

    {name: "secondNumber",
     type: "number",
     message: "Enter First Number"},

    {name: "operator",
     type: "list",
     message: "Please Select One of Operators",
     choices: ["Addition", "Substraction", "Multiplication", "Devision",
     "Exponentiation", "Modulus"],
    },
]);

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Devision") {
    console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Exponentiation") {
    console.log(answer.firstNumber ^ answer.secondNumber);
} else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
} else {
    console.log("Please Enter a Valid Operator");
};