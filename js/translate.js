let idiomaActual = 'es'; // Idioma por defecto

// Función que inicializa Google Translate
function googleTranslateInit() {
    new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_translate_element');
}

// Función para cambiar de idioma
function toggleTranslation() {
    const select = document.querySelector(".goog-te-combo"); // Selecciona el menú de idiomas

    if (!select) {
        console.warn("Google Translate aún no ha cargado.");
        return;
    }

    if (idiomaActual === 'es') {
        select.value = 'en'; // Cambia a inglés
        idiomaActual = 'en';
    } else {
        select.value = 'es'; // Cambia a español
        idiomaActual = 'es';
    }

    // Disparar el evento "change" dos veces con un pequeño retraso
    select.dispatchEvent(new Event("change"));

    setTimeout(() => {
        select.dispatchEvent(new Event("change"));
    }, 200); // Retraso de 200ms para asegurar el cambio

    // Mantener solo el icono en el botón
    document.getElementById("translateBtn").innerHTML = `<i class="fa-solid fa-globe"></i>`;
}

// Espera a que Google Translate cargue y oculta su widget
function ocultarWidgetTraductor() {
    const translateContainer = document.getElementById("google_translate_element");
    if (translateContainer) {
        translateContainer.style.display = "none"; // Oculta el widget
    }
}

setTimeout(ocultarWidgetTraductor, 3000); // Espera 3 segundos para ocultar el widget
