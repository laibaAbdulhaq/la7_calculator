#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message: "Enter firstnumber", type: "number", name: "firstnumber"},
    {message: "Enter secondnumber", type: "number", name: "secondnumber"},
{
    message: "select on of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
},
]);

//conditional statement
if (answer.operator ==="addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator ==="subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator ==="multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator ==="division"){
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}