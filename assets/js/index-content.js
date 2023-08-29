$(document).ready(function () {
  var container = $("#container");

  function banner() {
    var banner = $('<section id="banner"></section>');
    container.append(banner);
  }

  function posts() {
    var loadingElement = $('<div class="loading"></div>');
    var spinner = $('<div class="spinner"></div>');
    loadingElement.append(spinner);
    container.append(loadingElement);
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
      beforeSend: function () {
        // Se ejecuta antes de la petición AJAX
        loadingElement.show(); // Mostrar pantalla de carga
      },
      complete: function () {
        // Se ejecuta después de la petición AJAX (tanto en éxito como en error)
        loadingElement.hide(); // Ocultar pantalla de carga
      },
    };

    $.ajax(settings).done(function (response) {
      var posts = $('<div id="posts"></div>');
      const newsArray = response.news;
      newsArray.forEach((newsItem, index) => {
        var post = $(
          '<article id="post-' + index + '" class="post"></article>'
        );

        var img = $(
          '<div><a href="' +
            newsItem.url +
            '"><img alt="' +
            newsItem.title +
            '" title="' +
            newsItem.title +
            '"></a></div>'
        );
        console.log(newsItem.image);
        if (newsItem.image) {
          img.find("img").attr("src", newsItem.image);
        } else {
          const imageNotFound = "assets/img/noticias/API_News.png";
          img.find("img").attr("src", imageNotFound);
        }
        var containerTxtPost = $("<div></div>");
        var title = $(
          '<h2><a href="' + newsItem.url + '">' + newsItem.title + "</a></h2>"
        );

        // Procesar la fecha
        var date = new Date(newsItem.date);
        var month = date.toLocaleString("default", { month: "long" }); // Obtener el nombre del mes
        var day = date.getDate(); // Obtener el día del mes
        var year = date.getFullYear(); // Obtener el año

        var metadata = $(
          '<div class="meta-data"><span class="source">' +
            newsItem.source +
            '</span> | <span class="fecha">' +
            month +
            " " +
            day +
            ", " +
            year +
            "</span></div>"
        );
        var desc = $("<p>" + newsItem.body + "...</p>");
        var readMore = $(
          '<a href="' + newsItem.url + '" class="leer-mas">Leer más</a>'
        );

        containerTxtPost.append(title);
        containerTxtPost.append(metadata);
        containerTxtPost.append(desc);
        containerTxtPost.append(readMore);

        post.append(img);
        post.append(containerTxtPost);

        posts.append(post);

        container.append(posts);
      });
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
