document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('El campo nombre no puede estar vacio');
      return;
    }
    if(nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    const apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('El campo apellido no puede estar vacio');
      return;
    }
    if(apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.");
        return;
    }
    
    const email = document.getElementById("email").value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(email.length == 0) {
        alert("Por favor, ingrese su correo electrónico.");
        return;
    }
    if (!regex.test(email)) {
        document.getElementById("resultado").innerHTML =  alert("Por favor, ingrese un correo electrónico valido.");;
    } 
  
    

    const telefono = document.getElementById("telefono").value;
    if(telefono.length == 0){
        alert("Por favor, ingrese un telefono válido.");
        return;
    }
    if(telefono.length <= 8){
        alert("Por favor, el telefono debe tener al menos 8 digitos");
        return;
    }
    if(telefono.length >= 10){
        alert("Por favor, el telefono debe tener menos de 10 digitos");
        return;
    }
    const consulta = document.getElementById("consulta").value;
    if(consulta.length < 40) {
        alert("La consulta debe tener al menos 40 caracteres.");
        return;
    }

    this.submit();
  }