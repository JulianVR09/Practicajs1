const destiny = prompt("¿Cual es el destino de tu viaje?");
let days = prompt("¿Cuantos dias se estima que sera tu vaije?");
let budget = prompt("Caunto es el presupuesto que se tiene para el viaje?");
let result = budget > 500 * days;
window.alert("Tu viaje es posible: " + result);
let n = 1;

while (n == 1) {
  let question = confirm(
    "Deseas modificar los datos ya ingresados? Cancel=No Ok=Si"
  );
  if (question) {
    let menu = prompt(
      "¿Que deseas modificar?\
    \n1(Dias)\
    \n2(Presupuesto)"
    );
    if (menu == "1") {
      days = prompt("Ingresa la cantidad de días del viaje");
      let result = budget > 500 * days;
      window.alert("Tu viaje es posible: " + result);
    } else if (menu == "2") {
      budget = prompt("Ingrese un nuevo presupuesto");
      let result = budget > 500 * days;
      window.alert("Tu viaje es posible: " + result);
    } else {
      window.alert("error");
    }
  } else {
    n = 0;
  }
}
