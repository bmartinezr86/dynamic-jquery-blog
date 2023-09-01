$(document).ready(function () {
  var containerReloj = $("#container-reloj");
  function estructura() {
    var reloj = $('<section id="reloj"></section>');
    containerReloj.append(reloj);
  }
  function actualizarReloj() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    // Formatear horas, minutos y segundos con ceros a la izquierda si son menores que 10
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    var horaActual = horas + ":" + minutos + ":" + segundos;
    $("#reloj").text(horaActual);
  }

  function reloj() {
    estructura();
    actualizarReloj();

    // Actualizar el reloj cada segundo (1000 milisegundos)
    setInterval(actualizarReloj, 1000);

    // Llamar a la función para mostrar la hora actual inmediatamente
    actualizarReloj();
  }

  reloj();
});
