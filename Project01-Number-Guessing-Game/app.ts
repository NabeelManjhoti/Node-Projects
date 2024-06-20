#! usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Nabeel's Number Guessing Game");

const randomNumber = Math.floor(Math.random()* 10 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess any number between 1 to 10",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congrats! you answer is Correct.")
}else{
    console.log("Incorrect number. Try Again")
};