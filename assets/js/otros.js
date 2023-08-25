"use strict";

// Añadir el atributo lazyload a todas las img
document.addEventListener("DOMContentLoaded", function () {
  const imgElements = document.getElementsByTagName("img");

  for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].setAttribute("loading", "lazy");
  }
});

const settings = {
  async: true,
  crossDomain: true,
  url: "https://news67.p.rapidapi.com/v2/country-news?fromCountry=gb&onlyInternational=true",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b376ea608mshf2d6406f49b4622p1909c7jsn3958de0517e4",
    "X-RapidAPI-Host": "news67.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
