let actualIndex = 0; // Índice de la primera card visible
const cards = document.querySelectorAll('.carrusel-cards .card'); // Todas las cards
const totalCards = cards.length; // Total de cards
const cardWidth = document.querySelector('.card').clientWidth+20+2; // Ancho de cada card en px
const carruselWidth = document.querySelector('.carrusel').clientWidth;
const cardsVisibles = carruselWidth / cardWidth;
document.querySelector('.izq').style.display = "none";

// Función para mostrar cards basado en el índice actual
function showCard(index) {
    if (index > totalCards - cardsVisibles) {
        actualIndex = totalCards - cardsVisibles;
        document.querySelector('.der').style.display = "none";
    }else if (index < 0) {
        actualIndex = 0;
    } else {
        actualIndex = index;
    }

    if(actualIndex==0){
        document.querySelector('.izq').style.display = "none";
    }else{
        document.querySelector('.izq').style.display = "block";
    }
    
    // Mueve las cards hacia la izquierda o derecha
    const movimiento = -actualIndex * cardWidth;
    document.querySelector('.carrusel-cards').style.transform = "translate("+movimiento+"px,0)";
}

function nextCard() {
    showCard(actualIndex + 2); // Mover 2 cards a la derecha
}

function prevCard() {
    showCard(actualIndex - 2); // Mover 2 cards a la izquierda
    document.querySelector('.der').style.display = "block";
}


