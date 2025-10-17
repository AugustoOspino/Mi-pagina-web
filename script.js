

// Script para validacion de formulario


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío automático

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Si pasa todas las validaciones
  alert("Mensaje enviado correctamente.");
  // Aquí podrías enviar los datos usando fetch/AJAX si lo deseas
  this.reset(); // Limpia el formulario
});

//envio de mensajes
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2c5cjv5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mensaje enviado con exito!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});