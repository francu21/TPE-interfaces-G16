let cerrado = true;
document.getElementById('menu').addEventListener('click', verMenu);
//funcion para ver o cerrar menu
function verMenu(){
    let linea1 = document.querySelector('.uno');
    let linea2 = document.querySelector('.dos');
    let linea3 = document.querySelector('.tres');
    let li1 = document.querySelector('#inicio');
    let li2 = document.getElementById('contacto');
    let li3 = document.getElementById('ayuda');
    if(cerrado){
        linea2.style.animation = 'desaparecer 0.8s forwards';
        linea1.style.animation = 'cruzar1 0.8s forwards';
        linea3.style.animation = 'cruzar3 0.8s forwards';
        li1.style.animation = 'vernav 0.5s forwards';
        li2.style.animation = 'vernav 0.75s forwards';
        li3.style.animation = 'vernav 1s forwards';
        cerrado = false;
    }else{
        linea2.style.animation = 'aparecer 0.8s forwards';
        linea1.style.animation = 'enderezar1 0.8s forwards';
        linea3.style.animation = 'enderezar3 0.8s forwards';
        li1.style.animation = 'cerrarnav 1s forwards';
        li2.style.animation = 'cerrarnav 0.75s forwards';
        li3.style.animation = 'cerrarnav 0.5s forwards';
        cerrado = true;
    }
}

//para que el logo no se mueva al principio en la carga
setTimeout(() => {
    window.addEventListener('scroll', function() {
    
        // si se scrollea mas de 100px, anade la clase 'scrolled'
        if (window.scrollY > 100) {
            document.body.classList.add('scrolledheader');
        } else {
            document.body.classList.remove('scrolledheader');
        }
    });
}, 10000);
