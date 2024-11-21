const descubreSection = document.querySelector('.descubre-juego');
const numberblocksImagen = document.querySelector('.numberblocks-imagen');

// cuando el mouse se mueve en la section
descubreSection.addEventListener('mousemove', (e) => {
    // ancho y alto de la section
    const sectionRect = descubreSection.getBoundingClientRect();
    
    // posicion del mouse
    const mouseX = (e.clientX - sectionRect.left) / sectionRect.width - 0.5; // -0.5 a 0.5
    const mouseY = (e.clientY - sectionRect.top) / sectionRect.height - 0.5; // -0.5 a 0.5

    const moveX = -mouseX * 40; // mueve 40px en lugar opuesto al mouse
    const moveY = -mouseY * 40; // mueve 40px en lugar opuesto al mouse

    numberblocksImagen.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});

