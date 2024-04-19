let array = [];
function diccionario(name, weight, priority, size) {
  return {
    Nombre: name,
    Peso: weight, //pesado, moderado, poco
    Prioridad: priority, //alta, mediana, baja
    Tamaño: size //grande, mediano, pequeño
  };
};

let question = confirm("¿El dia esta gris?");
  if (question) {
    let name = "sombrilla";
    let weight = "moderado";
    let priority = "alta";
    let size = "mediano";
    array.push(diccionario(name, weight, priority, size));
  } else {
    let name = "sombrilla";
    let weight = "moderado";
    let priority = "baja";
    let size = "mediano";
    array.push(diccionario(name, weight, priority, size));
};

let n = parseInt(prompt("¿Deseas ingresar un objeto a la lista de posibilidades?\
\n(1)Si\
\n(2)No"));

while (n == 1) {
  let name = prompt("Ingrese el nombre del objeto: ").toLowerCase();
  let weight = prompt("Ingrese el peso del objeto en (pesado, moderado o poco): ").toLowerCase();
  let priority = prompt("Ingrese la prioridad del objeto en (alta, mediana o baja): ").toLowerCase();
  let size = prompt("Ingrese el tamaño del objeto en (grande, mediano o pequeño): ").toLowerCase();
  array.push(diccionario(name, weight, priority, size));
  n = parseInt(prompt("¿Desea ingresar otro objeto?\
\n(1)Si\
\n(2)No"));
};

console.log(array);