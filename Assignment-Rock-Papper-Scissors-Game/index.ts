// Simple Rock Papper Scissors Game

let player1:string = "Rock";
let player2:string = "Papper";

if (player1 === player2) {
    console.log("This Game is Tie");
} else if ((player1 === "Rock" && player2 === "Scissors") ||
   (player1 === "Scissors" && player2 === "Papper") ||
   (player1 === "Papper" && player2 === "Rock")) {
    console.log("Player 1 Wins the Game");
   } else {
    console.log("Player 2 Wins the Game");    
   };