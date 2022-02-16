/* Calcular el área de un triángulo */

let base= prompt("Dame la base del triángulo");

let altura= prompt("Dame la altura del triángulo");

let multiplicacion= parseFloat(base) * parseFloat(altura);

let resultado= parseFloat(multiplicacion / 2);

console.log(resultado);
alert("El área del triángulo es: " + resultado);