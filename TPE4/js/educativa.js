window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const educativa = document.querySelector('.educativa');
    const educativaTop = educativa.offsetTop;
    const educativaHeight = educativa.offsetHeight;
    const cards = document.querySelectorAll('.cards .card');

    // verifica si esta en la section
    if (scrollPos >= educativaTop && scrollPos <= educativaTop + educativaHeight) {
        const relativeScroll = scrollPos - educativaTop;
        
        // mueve el texto y el marco
        const texto = document.querySelector('.educativa .texto');
        const marco = document.querySelector('.educativa .marco');
        texto.style.transform = `translate(${relativeScroll * 0.2}px,${relativeScroll * 0.6}px)`;
        marco.style.transform = `translate(${relativeScroll * 0.21}px, ${relativeScroll * 0.7}px)`;

        // mueve los personajes
        const personaje4 = document.querySelector('.personaje4');
        const personaje5 = document.querySelector('.personaje5');
        personaje4.style.transform = `translate(${relativeScroll * -0.18}px ,${relativeScroll * 0.28}px)`;
        personaje5.style.transform = `translate(${relativeScroll * 0.15}px , ${relativeScroll * 0.25}px)`;
    }
    //muestra las cartas a destiempo cuando el scroll esta en el rango
    if(scrollPos >= educativaTop + educativaHeight && scrollPos <= educativaTop + educativaHeight + educativaHeight){
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(-100%) scale(1)';
            }, index * 200); 
        });
    }else if(scrollPos <= educativaTop + educativaHeight + educativaHeight){
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(0) scale(0.1)';
            }, index * 200); 
        });
    }
    
});

//cambia las imagenes cada 3 segundos
let i = 1;
setInterval(() => {
    document.querySelector("#imagenesmarco").style.transform = 'translateX('+100*-i+'%)';
    if(i==2){
        i=0;
    }else{i++}
    
}, 3000);