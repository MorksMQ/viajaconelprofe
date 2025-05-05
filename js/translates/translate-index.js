  const traducciones = {
    "los mejores destinos alrededor del mundo": "the best destinations around the world",
    "viaja con el profe": "travel with the teacher",
    "En viaja con el profe nos encargamos de crear experiencias unicas e inolviables, sin dejar la conciencia social y brindando multiples opciones para que cada persona pueda tachar todos los destinos de su lista.": "At travel with the teacher, we create unique and unforgettable experiences, always being socially conscious and offering multiple options so everyone can check off their dream destinations.",
    "reserva": "book now",
    "Próximos viajes": "Upcoming trips",
    "lo más vendido": "best sellers",
    "nuestros destinos": "our destinations",
    "más información": "more info",
    "fácil y rápido": "quick and easy",
    "itinerarios": "itineraries",
    "Asesoría personalizada": "Personalized advice",
    "Expertos te ayudan a planificar el viaje perfecto según tus necesidades.": "Experts help you plan the perfect trip for your needs.",
    "Precios competitivos": "Competitive prices",
    "Ofrecemos las mejores tarifas sin sacrificar calidad ni comodidad.": "We offer the best rates without sacrificing quality or comfort.",
    "Paquetes personalizados": "Custom packages",
    "Diseña tu viaje a medida, adaptado a tu presupuesto y preferencias.": "Design your own trip, tailored to your budget and preferences.",
    "¿Estas interesado en algo que vez?, mándanos un mensaje, Te estamos esperando.": "Interested in something you see? Send us a message. We’re waiting for you.",
    "Enviar": "Send",
    "compañía": "company",
    "sobre nosotros": "about us",
    "precios": "pricing",
    "contacto": "contact",
    "ayuda": "help",
    "contáctenos": "contact us",
    "más": "more",
    "viajes": "trips",
    "destinos": "destinations",
    "lo mas barato": "cheapest options",
    "tu correo": "email"
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

