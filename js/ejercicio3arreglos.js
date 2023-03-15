let resultados = new Array(11).fill(0); // Inicializar un array con 11 posiciones, de 2 a 12

for (let i = 0; i < 50; i++) {
  // Generar dos números aleatorios entre 1 y 6
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  
  // Sumar los resultados de los dos dados
  let suma = dado1 + dado2;
  
  // Añadir una aparición a la suma correspondiente en el array de resultados
  resultados[suma - 2]++; // Restar 2 para que el primer índice sea 0 y el último 10
}

// Mostrar los resultados por consola
for (let i = 0; i < resultados.length; i++) {
  document.write(`La suma ${i + 2} apareció ${resultados[i]} veces <br>`);
}
