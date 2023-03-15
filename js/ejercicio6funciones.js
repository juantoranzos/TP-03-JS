//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

let ladoA = parseFloat(prompt("La longitud del lado A es:"));
let ladoB = parseFloat(prompt("La longitud del lado B es:"));
function calcularPerimetro(a, b) {
  return 2*(a + b);
}
let perimetro = calcularPerimetro(ladoA, ladoB);
document.write(`El perímetro del rectángulo es: ${perimetro}`);

