//elementos
const friendImages = document.querySelectorAll('.friend-image');
const textBlocks = document.querySelectorAll('.text-block');
const imagecontainer = document.querySelector('.image-container');
let section = document.querySelector('.mas-amigos');

// activa la imagen segun la posicion del scroll
function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight /2;//posicion de scroll (en el centro para la imagen)
    
    textBlocks.forEach((block, index) => {
        //toma los pixeles superiores e inferiores del bloque
        const blockRect = block.getBoundingClientRect();
        const blockTop = window.scrollY + blockRect.top;
        const blockBottom = window.scrollY + blockRect.bottom;

        // controla si el scroll esta en el rango del texto
        if (scrollPosition >= blockTop && scrollPosition <= blockBottom) {
            // remueve clase activa de todas las imágenes
            friendImages.forEach(img => img.classList.remove('active'));
            // activa la imagen correspondiente
            if (friendImages[index]) {
                friendImages[index].classList.add('active');
            }
            //mueve la imagen en Y para que este visible para el usuario
            let movimiento = scrollPosition-section.offsetTop-230;
            //controla que las img no salgan de la section 
            if(movimiento > 200 && movimiento < 4700){
                imagecontainer.style.transform = 'translateY('+movimiento+'px)';
            }
            
        }
    });
}

window.addEventListener('scroll', handleScroll);