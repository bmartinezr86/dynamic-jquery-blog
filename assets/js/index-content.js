$(document).ready(function () {
  var container = $("#container");

  function banner() {
    var banner = $('<section id="banner"></section>');
    container.append(banner);
  }

  function posts() {
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://newsnow.p.rapidapi.com/",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "8b376ea608mshf2d6406f49b4622p1909c7jsn3958de0517e4",
        "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
      },
      processData: false,
      data: '{\r\n    "text": "Top news",\r\n    "region": "wt-wt"\r\n}',
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
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
