/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/


const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasTent = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village', or do you 'stay'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" && hasMap) {
  console.log("You find your way to the village.");
} else if (choice === "village" && !hasMap && hasTorch) {
  console.log("You get lost on the way, and now it is dark. Do you 'turn back' or 'keep going?'");
  const choice2 = readline.question("Enter 'turn back' or 'keep going': ")
    if (choice2 === "turn back") {console.log("Game Over")}
      else if (choice2 === "keep going" && hasTorch) {console.log("It's a difficult night, but you make it safely at dawn")}
      else {console.log("You are hopelessly lost forever")}
    }
 else if (choice === "stay" && hasTent) {
  console.log("You set up camp and enjoy the scenery.");
} else if (choice === "stay" && !hasTent) {
  console.log("You are not equipped to stay here and weather the elements.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/


