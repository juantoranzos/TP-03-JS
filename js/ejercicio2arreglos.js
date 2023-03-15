let ciudades = [];

while (true) {
  let ciudad = prompt('Introduce el nombre de una ciudad:');
  
  if (ciudad === null) {
    break; // Si el usuario selecciona "Cancelar", salimos del bucle
  }

  ciudades.push(ciudad);
}

// longitud del arreglo
document.write('La longitud del arreglo es: ' + ciudades.length + '<br>');

// los ítems de las posiciones primera, tercera y última
document.write('El primer elemento es: ' + ciudades[0] + '<br>');
document.write('El tercer elemento es: ' + ciudades[2] + '<br>');
document.write('El último elemento es: ' + ciudades[ciudades.length - 1] + '<br>');

// en última posición la ciudad de París
ciudades.push('París');
document.write('Las ciudades son: ' + ciudades.join(', ') + '<br>');

// la segunda posición
document.write('El elemento que ocupa la segunda posición es: ' + ciudades[1] + '<br>');

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = 'Barcelona';


document.write('El arreglo final es: ' + ciudades);
