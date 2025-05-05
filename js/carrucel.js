    const carrusel = document.getElementById('carrusel');
    const tarjetas = document.querySelectorAll('.carrusel .tarjeta-hover');
    const tarjetasPorPagina = 4;
    const totalPaginas = Math.ceil(tarjetas.length / tarjetasPorPagina);
    let paginaActual = 0;

    function mostrarPagina(pagina) {
        const desplazamiento = -(100 / tarjetasPorPagina) * tarjetasPorPagina * pagina;
        carrusel.style.transform = `translateX(${desplazamiento}%)`;
    }

    function avanzarPagina() {
        paginaActual = (paginaActual + 1) % totalPaginas;
        mostrarPagina(paginaActual);
    }

    function retrocederPagina() {
        paginaActual = (paginaActual - 1 + totalPaginas) % totalPaginas;
        mostrarPagina(paginaActual);
    }

    document.getElementById('siguiente').addEventListener('click', () => {
        avanzarPagina();
        reiniciarAutoCarrusel();
    });

    document.getElementById('anterior').addEventListener('click', () => {
        retrocederPagina();
        reiniciarAutoCarrusel();
    });

    // Cambio automático cada 10 segundos
    let intervalo = setInterval(avanzarPagina, 3000);

    function reiniciarAutoCarrusel() {
        clearInterval(intervalo);
        intervalo = setInterval(avanzarPagina, 10000);
    }

    mostrarPagina(paginaActual);

