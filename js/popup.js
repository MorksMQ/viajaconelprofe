  // Abrir modal al hacer clic en tarjeta
  document.querySelectorAll('.tarjeta-popup').forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      const modalId = tarjeta.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
    });
  });

  // Cerrar modal al hacer clic en botón de cerrar o fuera del contenido
  document.querySelectorAll('.modal-popup').forEach(modal => {
    const closeBtn = modal.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    // Cierra si haces clic fuera del modal-content
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });