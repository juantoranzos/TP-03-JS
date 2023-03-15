/**
 Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

 */
 function analizarTexto() {
    let texto = prompt("Introduce una cadena de texto:");
    if (texto === texto.toUpperCase()) {
      document.write("La cadena esta formada solo por mayusculas.");
    } else if (texto === texto.toLowerCase()) {
      document.write("La cadena esta formada solo por minusculas.");
    } else {
      document.write("La cadena esta formada por una mezcla de mayusculas y minusculas.");
    }
  }
  analizarTexto();
  