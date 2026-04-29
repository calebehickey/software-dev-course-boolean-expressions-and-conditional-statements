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

const hasTorch = false;
const hasMap = false;
const hasSword = true;
const hasTent = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. Do you try to find your way back or stay put?");
  const choice2 = readline.question("Enter 'go back' or 'stay put' ");
    if (choice2 === 'go back' && hasTorch){console.log("You're back with you started. Game over, try again.")}
    else if (choice2 === 'go back' && !hasTorch){console.log("Without a torch you are hopelessly lost. Game over.")}
    else if (choice2 === 'stay put' && hasTent){console.log("You stay the night. The next day you find your way through the mountains.")}
    else if (choice2 === 'stay put' && !hasTent) {console.log("Without adequate shelter you freeze to death. Game over.")}
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village. It is under attack by orcs. Do you stay and fight or flee?");
  const choice3 = readline.question("Enter 'fight' or 'flee' ");
  if (choice3 === "fight" && hasSword) {
    console.log("You defeat the orcs and are the hero of the village")
  }
    else if (choice3 === 'fight' && !hasSword){
      console.log("You are brave, but without a weapon you are killed with the rest of the villagers.")
    }
    else if (choice3 === 'flee'){
      console.log("Your cowardice has saved your life, but you are no hero. Game over.")
    };
    
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/