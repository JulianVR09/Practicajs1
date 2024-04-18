// import { budgetEnd } from '../../reto1/js/index.js';
let souvenirNames = [];
let costs = [];
let availabilities = [];
let question = confirm("¿Desea agregar un souvenir?");

let budget = 6000;

while (question) {
  let souvenir = prompt("¿Cuál es el nombre del souvenir?: ");
  souvenirNames.push(souvenir);
  console.log(typeof souvenir, souvenir);
  let price = parseInt(prompt("¿Cual es  el precio del souvenir?:"));
  costs.push(price);
  console.log(typeof price, price);
  let available = prompt("¿Está disponible este souvenir? S/N").toUpperCase();
  if (available == "S") {
    availabilities.push(true);
    console.log(typeof true, "hay existencia: " + true);
  } else {
    availabilities.push(false);
    console.log(typeof false, "Hay disponibilidad: " + false);
  }
  question = confirm("¿Desea agregar otro souvenir?");
}

for (let i = 0; i <= availabilities.length; i++) {
    const souvenirName = souvenirNames[i];
    const availavility = availabilities[i];
    const cost = costs[i];

    if (availavility) {
        budget -= cost;
        console.log('Has comprado ' + souvenirName + 'tu balance es ' + budget)
    }
}

console.log(souvenirNames, costs, availabilities);
