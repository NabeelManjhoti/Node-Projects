import inquirer from "inquirer";

const answer = await inquirer.prompt ([
    {message: "Guess Your Number", type: "number", name: "guessingGame"}
]);

let guess:number = 11;

if (answer.guessingGame === guess){
    console.log("Congrats your Guess is Correct");
} else if (answer.guessingGame < guess){
    console.log("Your Guess is Too Low");
} else {
    console.log("Your Guess is Too High");
};