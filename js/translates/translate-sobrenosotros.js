const traducciones = {
    "ejemplo": "example",
    "no olvides poner comas": "excepto en la ultima traduccion"
  };

  let traducido = false;

  function toggleTranslation() {
    for (const [es, en] of Object.entries(traducciones)) {
        const elementos = Array.from(document.querySelectorAll('*')).filter(el => {
            const text = Array.from(el.childNodes)
              .filter(n => n.nodeType === Node.TEXT_NODE)
              .map(n => n.textContent.trim().toLowerCase())
              .join(" ");
            return text === (traducido ? en.toLowerCase() : es.toLowerCase());
          });
          
      for (const el of elementos) {
        Array.from(el.childNodes).forEach(n => {
            if (n.nodeType === Node.TEXT_NODE) {
              n.textContent = traducido ? es : en;
            }
          });
              }
    }

    traducido = !traducido;
  }

