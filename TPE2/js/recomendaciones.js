
const recomendaciones = document.querySelector('.cards-recomendaciones');
document.querySelector('.circulo.uno').addEventListener('click', recomendacion1);
document.querySelector('.circulo.dos').addEventListener('click', recomendacion2);
document.querySelector('.circulo.tres').addEventListener('click', recomendacion3);
const circ1 = document.querySelector('.circulo.uno');
const circ2 = document.querySelector('.circulo.dos');
const circ3 = document.querySelector('.circulo.tres');
function recomendacion1(){
    recomendaciones.style.transform = "translate(0vw, 0)";
    circ1.style.backgroundColor = 'white';
    circ2.style.background = 'none';
    circ3.style.background = 'none';
}
function recomendacion2(){
    recomendaciones.style.transform = "translate(-100vw, 0)";
    circ2.style.backgroundColor = 'white';
    circ1.style.background = 'none';
    circ3.style.background = 'none';
}
function recomendacion3(){
    recomendaciones.style.transform = "translate(-200vw, 0)";
    circ3.style.backgroundColor='white';
    circ1.style.background = 'none';
    circ2.style.background = 'none';
}