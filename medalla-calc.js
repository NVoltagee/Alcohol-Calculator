prompt = require('prompt-sync')();

ozConsumed = Number(prompt('Medallas = ') * 10);
weight = Number(prompt('Weight = ') );
gender = Number(prompt('Gender (0 = male || 1 = female) = '));
hoursSinceLastDrink = Number(prompt('Hours Since Last Drink ?= '));

if (gender === 0) {
  gender = 0.73;
} else {
  gender = 0.66;
}

console.log((ozConsumed * 5.14) / (weight * gender) - (0.015 * hoursSinceLastDrink));