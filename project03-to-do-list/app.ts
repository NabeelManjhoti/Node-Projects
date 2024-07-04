import inquirer from "inquirer";

let toDoList = [];
let conditions = true;

console.log("\n\t Wellcome to Nabeel's Todo-List Application\n");

while(conditions){
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new Task:",
        },
    ]);

    toDoList.push(newTask.task);
    console.log(`${newTask.task}: added in Todo-list Sucessfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "more",
            type: "confirm",
            message: "Would you like to add more Tasks?",
            default: "False",
        },
    ]);

    conditions = addMoreTask.more;
};

console.log("Your pending tasks are:", toDoList);