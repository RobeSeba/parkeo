document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll('.offcanvas-body .nav-link');
    const offcanvas = document.getElementById('offcanvasNavbar');
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

    enlaces.forEach((enlace) => {
      enlace.addEventListener('click', (e) => {
        const targetId = enlace.getAttribute('href');
        if (targetId.startsWith("#")) {
          e.preventDefault(); // Evita el comportamiento normal

          // Cierra el menú
          bsOffcanvas.hide();

          // Espera a que el offcanvas se cierre antes de hacer scroll
          setTimeout(() => {
            const destino = document.querySelector(targetId);
            if (destino) {
              destino.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300); // Ajusta este tiempo si el cierre del menú toma más
        }
      });
    });
  });