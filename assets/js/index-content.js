$(document).ready(function () {
  var container = $("#container");

  function banner() {
    var banner = $('<section id="banner"></section>');
    container.append(banner);
  }

  function posts() {
    const apiKey = "YpX1p3WBsw2x8qQvv6L192fi";
  }
  function generarContenido() {
    banner();
    posts();
  }

  function indexContent() {
    generarContenido();
  }

  indexContent();
});
