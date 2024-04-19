const saving = parseInt(prompt("¿Cuanto deseas ahorrar diariamente? en USD: "));
console.log("Tus ahorros diarios van a ser: " + saving);
const food = 50;
const book = 100;
let n = 1;

while (n == 1) {
  let budget = parseInt(prompt("¿Cuanto es el presupuesto del dia de hoy? en USD: "));
  console.log("Tu presupuesto de hoy es: " + budget);
  let result = budget - saving;
  if (result > 0) {
    if (result >= 150) {
      let resulttwo = result - 150;
      console.log("Hoy puedes comer en la calle y comprar un libro");
      console.log("Te quedan hoy: " + resulttwo);
      n = parseInt(prompt("Desea agregar otro valor:\
      \n (1) Si\
      \n (2) No"));
    } else if (result < 150 && result >= 100) {
      let shoppBook = result - 100;
      let shoppFood = result - 50;
      console.log("Hoy puedes comprar un libro o comer en la calle, tu decides");
      console.log("Si compras un libro te quedarian: " + shoppBook + "\
      \n Si compras comida callejera te quedarian: " + shoppFood);
      n = parseInt(prompt("Desea agregar otro valor:\
      \n (1) Si\
      \n (2) No"));
    } else if(result < 100 && result >= 50){
      let shoppFood = result - 50;
      console.log("Hoy solo puedes comprar comida callejera");
      console.log("Con esta compra te quedarian: " + shoppFood);
      n = parseInt(prompt("Desea agregar otro valor:\
      \n (1) Si\
      \n (2) No"));
    } else {
      console.log("Hoy no puedes comprar nada")
      n = parseInt(prompt("Desea agregar otro valor:\
      \n (1) Si\
      \n (2) No"));
    };
  } else {
    console.log("No puedes comprar nada el dia de hoy(libro o comida callejera)");
    n = parseInt(prompt("Desea agregar otro valor:\
    \n (1) Si\
    \n (2) No"));
  };
};