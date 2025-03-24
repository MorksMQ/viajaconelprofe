document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      alert(`Gracias por Enviar un mensaje, pronto te llegara un correo a: ${email}`);
    }
  });