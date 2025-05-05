document.querySelectorAll('.modal-popup').forEach(modal => {
  const images = JSON.parse(modal.dataset.images || '[]');
  let index = 0;

  const imgEl = modal.querySelector('.carousel-pop-img');
  const btnPrev = modal.querySelector('.carousel-pop-btn.prev');
  const btnNext = modal.querySelector('.carousel-pop-btn.next');
  const closeBtn = modal.querySelector('.close-btn');

  const showImage = () => {
    if (imgEl && images.length > 0) {
      imgEl.src = images[index];
    }
  };

  const openModal = () => {
    modal.style.display = 'flex';
    index = 0;
    showImage();
  };

  // Botones de navegación
  btnPrev?.addEventListener('click', e => {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length;
    showImage();
  });

  btnNext?.addEventListener('click', e => {
    e.stopPropagation();
    index = (index + 1) % images.length;
    showImage();
  });

  // Cerrar modal
  closeBtn?.addEventListener('click', e => {
    e.stopPropagation();
    modal.style.display = 'none';
  });

  // Cerrar haciendo clic fuera del contenido
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Asignar botón activador
  document.querySelectorAll(`[data-modal="${modal.id}"]`).forEach(trigger => {
    trigger.addEventListener('click', () => {
      openModal();
    });
  });
});
