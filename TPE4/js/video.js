//cuando scrollea
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; //punto de scroll
    const videosection = document.querySelector('.video');
    const videoTop = videosection.offsetTop; // pixeles arriba de la section
    const videoHeight = videosection.offsetHeight; // alto de la section
    const pers = document.querySelector('#pers-video');
    const marco = document.querySelector('.marco-video');
    let movimiento = scrollPos-videoTop;
    //si el scroll esta dentro 
    if (scrollPos >= videoTop && scrollPos <= videoTop + videoHeight){
        marco.style.transform = 'translateY('+ movimiento*0.3+'px)';
        pers.style.transform = 'translate('+ movimiento*0.1+'px,'+ movimiento*0.2+'px )';
    }
});