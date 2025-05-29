const botones = document.querySelectorAll('.btn-toggle');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('active')); // quitar clase activa a todos
        btn.classList.add('active'); // activar solo el clickeado

        // Aquí puedes colocar tu lógica de renderizado
        if (btn.id === 'pago-presencial') {
            // Renderiza contenido de mensual
        } else {
            // Renderiza contenido de anual
        }
    });
});