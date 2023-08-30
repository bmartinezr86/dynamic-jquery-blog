$(document).ready(function () {
  var headerContent = $("#header");
  var body = $("body");
  var html = $("html");

  function primaryMenu() {
    var nav = $("<nav></nav>");
    var ulMenu = $('<ul id="menu"></ul>');
    var paginas = ["Inicio", "Calculadora", "Reloj", "Juego", "Contacto"];
    for (let pagina = 0; pagina < paginas.length; pagina++) {
      var liPag = $("<li></li>");
      var linkPag = "";
      if (pagina === 0) {
        linkPag = $('<a href="index.html">' + paginas[pagina] + "</a>");
      } else {
        linkPag = $(
          '<a href="' +
            paginas[pagina].toLowerCase() + // enlace a la pagina
            ".html" +
            '">' +
            paginas[pagina] + // titulo pagina
            "</a>"
        );
      }
      liPag.append(linkPag);
      ulMenu.append(liPag);
    }
    ulMenu.append(btnChangeTheme());
    nav.append(ulMenu);

    return nav;
  }

  function btnChangeTheme() {
    var btnChangeTema = $('<div id="tema"></div>');
    var desplegableTemas = $('<div id="desplegable-temas"></div>');
    var temas = ["rosa", "verde", "morado", "azul"];
    for (let tema = 0; tema < temas.length; tema++) {
      var spanTema = $(
        '<div class="opcion" id="opcion-' + temas[tema] + '"></div>'
      );
      desplegableTemas.append(spanTema);
    }
    desplegableTemas.css("display", "none");
    btnChangeTema.append(desplegableTemas);
    return btnChangeTema;
  }

  function funcionaDesplegableTheme() {
    $(document).on("click", "#tema", function () {
      var desplegable = $("#desplegable-temas");

      if (desplegable.css("display") === "none") {
        desplegable.css("display", "block");
      } else {
        desplegable.css("display", "none");
      }
    });
  }

  function pintarOpcionesTemas() {
    var opcionRosa = $("#opcion-rosa");
    var opcionVerde = $("#opcion-verde");
    var opcionAzul = $("#opcion-azul");
    var opcionMorada = $("#opcion-morado");
    opcionRosa.addClass("tema-rosa");
    opcionVerde.addClass("tema-verde");
    opcionAzul.addClass("tema-azul");
    opcionMorada.addClass("tema-morado");
  }
  function changeTheme(selectedTheme) {
    var themes = ["tema-rosa", "tema-verde", "tema-azul", "tema-morado"];

    body.removeClass(themes.join(" ")).addClass(selectedTheme);
    html.removeClass(themes.join(" ")).addClass(selectedTheme);
    $(".opcion").removeClass("active");
    $(`.opcion-${selectedTheme}`).addClass("active");

    pintarOpcionesTemas();
  }

  function funcionalBtnTheme() {
    $(document).on("click", ".opcion", function () {
      var selectedTheme = "tema-" + $(this).attr("id").replace("opcion-", "");
      changeTheme(selectedTheme);
    });
  }

  function logo() {
    var logo = $('<h1><a href="index.html" id="logo">API News</a></h1>');
    return logo;
  }

  function menuHamburguer() {
    var menuHamburguer = $('<div class="menu-toggle"></div>');
    var toogleBars = 3;
    for (let i = 0; i < toogleBars; i++) {
      const bar = $('<div class="bar"></div>');
      menuHamburguer.append(bar);
    }
    headerContent.append(menuHamburguer);
  }

  function funcionalMenuHamburguer() {
    $(".menu-toggle").click(function () {
      $(".bar").toggleClass("change");
      $("#menu").toggleClass("show");
      $(".menu-toggle").toggleClass("active");
    });
  }

  function header() {
    headerContent.append(logo());
    headerContent.append(primaryMenu());
    funcionaDesplegableTheme();
    funcionalBtnTheme();
    changeTheme("tema-rosa");
    menuHamburguer();
    funcionalMenuHamburguer();
  }

  header();
});
