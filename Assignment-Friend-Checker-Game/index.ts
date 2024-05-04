#! usr/bin/env node
import inquirer from "inquirer";

let isFriend = await inquirer.prompt ([{
    name: "friendName",
    type: "string",
    message: "Enter Your Friend's Name"
}]);

if (isFriend.friendName === "Haseeb") {
        console.log(`${isFriend.friendName} is your Best Friend`);
} else if (isFriend.friendName === "Haris" ||
    isFriend.friendName === "Kareem" ||
    isFriend.friendName === "Imran"
) {
    console.log(`${isFriend.friendName} is your Friend`)
} else {
    console.log("He/She is not your Friend")
};