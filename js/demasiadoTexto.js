function ajustarTexto() {
    const textos = document.querySelectorAll('.auto-ajuste');
    textos.forEach(texto => {
        const contenedor = texto.parentElement;
        const maxAltura = contenedor.clientHeight;
        let fontSize = 24; // tamaño máximo
        texto.style.fontSize = fontSize + 'px';

        // Solo reducir si se desborda
        while (texto.scrollHeight > maxAltura && fontSize > 14) {
            fontSize--;
            texto.style.fontSize = fontSize + 'px';
        }
    });
}

window.addEventListener('load', ajustarTexto);
window.addEventListener('resize', ajustarTexto);