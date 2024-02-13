// 3- Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales). 

// Mostrar el resultado del cálculo del área para ese radio, mediante la frase: “el área de un círculo con radio X es: XXX” . Debe haber tres variables: radio, pi y área.

// Test: para un radio de 22, el área es aprox. 1520.

let pi = 3.1415;
let radio = parseInt(prompt('¿Cual es el radio de tu círculo?'));
let area = pi * (radio**2);
console.log('area sin redondear='+area);
document.write('<h3>El área (con decimales) de un círculo con radio '+radio+' es: '+area+'.</h3>');
area = Math.round(area);

console.log('pi='+pi);
console.log('radio)'+radio);
console.log('area redondeada='+area);

document.write('<h3>El área (redondeada) de un círculo con radio '+radio+' es: '+area+'.</h3>');