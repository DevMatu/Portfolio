/*En JavaScript, seleccionamos elementos del HTML usando su ID o su clase.*/

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Frenamos el envío tradicional

    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = "Enviando...";
    button.disabled = true;

    // Capturamos los datos del formulario
    const formData = new FormData(form);

    // Enviamos los datos usando 'fetch' (Petición asíncrona)
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        // Si todo salió bien:
        button.textContent = "¡Enviado con éxito!";
        button.style.background = "linear-gradient(45deg, #1c8a1c, #3bb23b)"; // Cambia a verde
        form.reset(); // Limpia los campos
    } else {
        // Si hubo un error:
        button.textContent = "Hubo un error...";
        button.style.background = "red";
    }
    
    // Después de 3 segundos, volvemos el botón a la normalidad
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = ""; // Vuelve al CSS original
        button.disabled = false;
    }, 3000);
});

window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(elemento => {
    const windowHeight = window.innerHeight;
    const elementTop = elemento.getBoundingClientRect().top;
    const elementVisible = 150; // Cuántos píxeles tiene que asomar para activarse

    if (elementTop < windowHeight - elementVisible) {
      elemento.classList.add('active');
    }
  });
});



