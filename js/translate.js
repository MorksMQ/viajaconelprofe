let idiomaActual = 'es'; // Idioma predeterminado

function googleTranslateInit() {
    new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_translate_element');
}

function toggleTranslation() {
    const frame = document.querySelector('.goog-te-menu-frame');
    
    if (!frame) {
        console.warn("Google Translate no está listo aún.");
        return;
    }
    
    // Simula un clic en el idioma deseado
    const opciones = frame.contentDocument.querySelectorAll('.goog-te-menu2-item span.text');
    
    opciones.forEach(opcion => {
        if ((idiomaActual === 'es' && opcion.innerText.includes('English')) ||
            (idiomaActual === 'en' && opcion.innerText.includes('Español'))) {
            opcion.click();
            idiomaActual = (idiomaActual === 'es') ? 'en' : 'es'; // Cambiar idioma actual
        }
    });
}

