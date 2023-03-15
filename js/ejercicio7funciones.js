
// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 
function tablaMultiplicar(numero) {
    let lista = document.createElement("ul");
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement("li");
      item.textContent = `${numero} x ${i} = ${numero * i}`;
      lista.appendChild(item);
    }
    document.body.appendChild(lista);
  }
  let numero;
  while (isNaN(numero)) {
    numero = parseInt(prompt("Ingrese un número:"));
    if (isNaN(numero)) {
      alert("ERROR... Ingrese un número");
    }
  }
  tablaMultiplicar(numero);
  