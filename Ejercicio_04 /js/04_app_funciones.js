import { rollDice, averageOfArray } from "./04_app.js";

let arrayDiceResult = [];

for (let i = 0; i <= 6000-1; i++) {
  arrayDiceResult.push (rollDice(i));
  
}

console.log(arrayDiceResult);
console.log(`LA MEDIA DEL VECTOR ES: ${averageOfArray(arrayDiceResult)}`);