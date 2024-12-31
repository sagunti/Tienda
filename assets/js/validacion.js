document.getElementById("miFormulario").addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorEmail = document.getElementById("errorEmail");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorMensaje = document.getElementById("errorMensaje");

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre
    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

     // Validar apellido
     if (apellido === "") {
        errorApellido.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorApellido.classList.add("d-none");
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

     // Validar telefono
     if (telefono === "") {
        errorTelefono.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorTelefono.classList.add("d-none");
    }

    // Validar mensaje
    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
      
    }
});