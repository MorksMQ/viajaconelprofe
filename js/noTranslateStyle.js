window.addEventListener('load', function () {
    const observer = new MutationObserver(function () {
      document.querySelectorAll('body *').forEach((el) => {
        el.style.fontSize = '';
        el.style.fontFamily = '';
      });
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
  