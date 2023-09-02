$(document).ready(function () {
  var contactForm = $("#contact-form");
  var container = $("#container-form");

  function addFormToField(fieldName) {
    contactForm.append(fieldName);
  }
  function generarFormulario() {
    var title = $("<h2>Formulario de contacto</h2>");
    var inputNombre = $(
      '<input type="text" name="name" id="name" placeholder="Nombre" required>'
    );
    var inputApellidos = $(
      '<input type="text" name="last-name" id="last-name" placeholder="Apellidos" required>'
    );
    var inputCorreo = $(
      '<input type="email" name="mail" id="mail" placeholder="Correo electrónico" required>'
    );
    var inputMensaje = $(
      '<textarea id="message" name="message" placeholder="Deja tu mensaje"  required></textarea>'
    );
    var submit = $(' <input type="submit" id="submit"  value="Enviar">');

    addFormToField(title);
    addFormToField(inputNombre);
    addFormToField(inputApellidos);
    addFormToField(inputCorreo);
    addFormToField(inputMensaje);
    addFormToField(submit);
  }

  function envioForm() {
    $(document).on("submit", function () {
      event.preventDefault();
      contactForm.hide();
      let mensajeEnviado = $(
        '<div  class="send-message">Tu mensaje ha sido enviado con exito. 😄</div>'
      );
      container.append(mensajeEnviado);
    });
  }
  function initContactForm() {
    generarFormulario();
    envioForm();
  }

  initContactForm();
});
