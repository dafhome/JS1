// He probado sin hacer el parseInt y con el operador resta no actua igual, hace bien el cálculo
// let x = prompt("Escribe el primer número de la resta: ");
// let y = prompt("Escribe el número que vas a restar al primero: ");

let x = parseInt(prompt("Escribe el primer número de la resta: "));
let y = parseInt(prompt("Escribe el número que vas a restar al primero: "));

let suma = x - y;
console.log("El resultado de la resta es: "+suma);
console.log("Haciendo la operacion en el console.log: "+(x-y));

document.write("<h3>El resultado de la resta es: "+suma+"</h3><br>");
document.write("<h3>Haciendo la operacion en el console.log: "+(x-y)+"</h3>");