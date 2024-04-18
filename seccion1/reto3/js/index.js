const budget = parseInt(prompt("Cual es tu presupuesto inicial: "));
let hosting = parseInt(prompt("Cual es el estimado del hospedaje: "));
let transportation = parseInt(prompt("Cual es el estimado del transporte: "));
let food = parseInt(prompt("Cual es el presupuesto de la comida: "));
let n = parseInt(prompt("Deseas comprar un articulo?:\
                        \n(1)Si\
                        \n(2)No"));
let result = budget - (hosting + transportation + food);
alert("Con esas compras te quedaria: " + result);
const object = [];
function constructora(nombreProducto, valorProducto) {
  return {
    name: nombreProducto,
    cost: valorProducto,
  };
}

while (n == 1) {
  let name = prompt("Cual es el nombre del articulo?: ");
  let cost = prompt("Caul es el valor del producto?: ");
  let question = prompt("¿Desea comprar el articulo?: si/no ").toLowerCase();
  let text = result - cost;
  if (question == "si" && text >= 250) {
    alert("Puedes comprar el producto sin verte afectado!!");
    object.push(constructora(name, cost));
    n = parseInt(prompt("Deseas hacer otra vez:\
                        \n(1)Si\
                        \n(2)No"));
  } else {
    if (question == "no") {
      alert("Preferiste no comprar el articulo");
      n = parseInt(prompt("Deseas hacer otra vez:\
                        \n(1)Si\
                        \n(2)No"));
    } else {
      if (question == "si" && text < 250) {
        alert("Es preferible que no compres el articulo");
        n = parseInt(prompt("Deseas hacer otra vez:\
                        \n(1)Si\
                        \n(2)No"));
      };
    };
  };
};

alert(object);