function ocultarBarraGoogleTranslate() {
    const eliminarBarra = () => {
        let frame = document.querySelector("iframe.goog-te-banner-frame");
        let container = document.querySelector(".goog-te-banner-frame");

        if (frame) frame.remove(); // Elimina el iframe
        if (container) container.remove(); // Elimina el contenedor
        document.body.style.top = "0px"; // Evita espacio en blanco
    };

    // Elimina la barra inicialmente
    eliminarBarra();

    // Observador para detectar cuando Google intenta agregar la barra nuevamente
    const observer = new MutationObserver(() => eliminarBarra());

    observer.observe(document.body, { childList: true, subtree: true });
}

// Ejecutar la función después de que Google Translate haya cargado
setTimeout(ocultarBarraGoogleTranslate, 2000);
