/* Te han contratado en una empresa de venta de ropa.
 Se llegó el buen fin y una de tus tareas es que calcules 

 ¿Cuál tendría que ser el precio final de un saco super
  padrísimo que cuesta 1560 que tiene un descuento de 18%?
  ¿Cuáles tendrían que ser las modificaciones que tendrías
 que hacer en caso de que el descuento sea 10%.*/

  let precio= prompt("Dame el precio de la prenda");
  let descuento= prompt("Dame el descuento aplicable (%)");

  let porcentaje= parseFloat(descuento) / 100;
  let descuentoAplicado= parseFloat(precio) * parseFloat(porcentaje);
  let precioFinal= parseFloat(precio) - parseFloat(descuentoAplicado);

  console.log(precioFinal);
  alert("El precio final de tu prenda es: " + precioFinal);

/*¿Cuáles tendrían que ser las modificaciones que tendrías
 que hacer en caso de que el descuento sea 10%.*/
