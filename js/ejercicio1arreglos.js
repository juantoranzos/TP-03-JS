//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

document.write('<ul>');
for (let i = 0; i < meses.length; i++) {
  document.write('<li>' + meses[i] + '</li>');
}
document.write('</ul>');

