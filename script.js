// Función para desplazarse al catálogo de manera suave
function irAlCatalogo() {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

// Función para filtrar los productos según la categoría seleccionada
function filtrarCatalogo(categoria) {
    const productos = document.querySelectorAll('.producto');

    // Mostrar todos los productos si la categoría seleccionada es 'todas'
    productos.forEach(producto => {
        if (categoria === 'todas' || producto.dataset.categoria === categoria) {
            producto.style.display = 'block'; // Mostrar producto
        } else {
            producto.style.display = 'none'; // Ocultar producto
        }
    });
}

// Función para abrir WhatsApp con un mensaje predefinido para cada producto
function comprar(producto) {
    const enlaceWhatsApp = "https://wa.me/message/FDFUZAA5XFWMP1"; // Cambia este enlace con tu número de WhatsApp
    const mensaje = `Hola, estoy interesado en la ${producto}.`; // Mensaje predefinido
    const url = `${enlaceWhatsApp}?text=${encodeURIComponent(mensaje)}`; // Codifica el mensaje para pasarlo en la URL
    window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
}

// Función para mostrar u ocultar el menú
function toggleMenu() {
    const menu = document.getElementById('nav-categorias').querySelector('ul');
    menu.classList.toggle('visible');
}



// Función para mostrar/ocultar el menú cuando se hace clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('visible');
});

// Función para manejar el clic en los enlaces
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Si el menú está visible, lo ocultamos después de hacer clic en un enlace
        if (menu.classList.contains('visible')) {
            menu.classList.remove('visible');
        }
    });
});
