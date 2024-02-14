let pi = 3.1415;
let radio = parseInt(prompt('¿Cual es el radio de tu círculo?'));
let area = pi * (radio**2);

console.log('area sin redondear='+area);

area = area.toFixed(4);

document.write(`<h3>El área (sin redondear) de un círculo con radio ${radio} es: ${area} </h3>`);

area = Math.round(area:2);

console.log('pi='+pi);
console.log('radio)'+radio);
console.log('area redondeada='+area);

document.write(`<h3>El área (redondeada) de un círculo con radio ${radio} es: ${area} </h3>`);