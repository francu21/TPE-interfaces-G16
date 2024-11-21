document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;//scroll
    //los 3 fondos
    const capa1 = document.querySelector('.capa1');
    const capa2 = document.querySelector('.capa2');
    const capa3 = document.querySelector('.capa3');
    //los mueve segun el scroll
    capa1.style.backgroundPosition = `${scrollPosition * -0.07}px ${scrollPosition * 0.1}px`;
    capa2.style.backgroundPosition = `${scrollPosition * 0.06}px ${scrollPosition * 0.15}px`; 
    capa3.style.backgroundPosition = `${scrollPosition * 0.05}px ${scrollPosition * 0.18}px`; 
    
});