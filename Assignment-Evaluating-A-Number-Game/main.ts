// Evaluating A Number Game
let guess:number = 8;
let target:number = 8;
if (guess === target) {
    console.log("Congrats you Guessed Correctly");
} else if (guess > target) {
    console.log("Your Guess is very High");
} else {
    console.log("Your Guess is too Low");
};