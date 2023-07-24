'use strict'



// Añadir el atributo lazyload a todas las img
document.addEventListener("DOMContentLoaded", function() {
    const imgElements = document.getElementsByTagName("img");

    for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].setAttribute("loading", "lazy");
    }
});