  const modalesConCarrusel = document.querySelectorAll('.modal-popup');

  modalesConCarrusel.forEach(modal => {
    const images = JSON.parse(modal.getAttribute('data-images') || '[]');
    let index = 0;

    const imgEl = modal.querySelector('.carousel-pop-img');
    const btnPrev = modal.querySelector('.carousel-pop-btn.prev');
    const btnNext = modal.querySelector('.carousel-pop-btn.next');
    const closeBtn = modal.querySelector('.close-btn');

    // Función para mostrar imagen actual
    const showImage = () => {
      if (imgEl && images.length > 0) {
        imgEl.src = images[index];
      }
    };

    // Botones
    btnPrev?.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage();
    });

    btnNext?.addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage();
    });

    closeBtn?.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });

    // Mostrar imagen al abrir modal
    const triggerBtns = document.querySelectorAll(`[data-modal="${modal.id}"]`);
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        index = 0;
        showImage();
      });
    });
  });

