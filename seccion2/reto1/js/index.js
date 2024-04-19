let day = confirm("¿El dia esta soleado?");
console.log("El dia esta soleado: " + day);
let energy = parseInt(prompt("¿Como te sientes de energia del 1-10?: "));
console.log("Tu nivel de energia hoy es: " + energy);
let workforce = confirm("¿Tienes mucha carga de trabajo?");
console.log("Tu carga de trabajo es: " + workforce);
if (day) {
    if (energy <= 10 && energy >=5 && !workforce) {
      console.log("Te recomiendo salir a correr!!!");
    } else if(workforce){
      console.log("Es mejor que hagas tus proyectos personales");
    } else if (energy < 5 && energy >= 1 && !workforce) {
      console.log("Date un dia libre");
    };
} else {
  if(workforce){
    console.log("Es mejor que hagas tus proyectos personales");
  } else if (energy < 5 && energy >= 1 && !workforce) {
    console.log("Date un dia libre");
  };
};