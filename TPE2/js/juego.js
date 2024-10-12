let index=0;
document.getElementById('fichas-izq').style.color = "rgb(0,0,0,0.25)"
document.getElementById('boton-share').addEventListener('click', verIconos);
document.getElementById('fichas-izq').addEventListener('click', verFichasIzq);
document.getElementById('fichas-der').addEventListener('click', verFichasDer);

function verIconos(){
    var iconos = document.querySelector(".share-iconos");
    if (iconos.style.left === '0px') {
        iconos.style.left = '-250px';
    } else {
        iconos.style.left = '0px';
    }
}

function verFichas(i){
    index =index + i;
    let fichas = document.querySelector('.img-fichas');
    if(index < 0){
        index = 0;
    }else if(index >2){
        index = 2;
    }else if(index==2){
        document.getElementById('fichas-der').style.color = "rgb(0,0,0,0.25)";
    }else if(index==0){
        document.getElementById('fichas-izq').style.color = "rgb(0,0,0,0.25)";
    }
    
    fichas.style.transform = 'translateX('+-index*330+'px)'

}
function verFichasIzq(){
    verFichas(-1);
    document.getElementById('fichas-der').style.color = "black";
    
}
function verFichasDer(){
    verFichas(+1);
    document.getElementById('fichas-izq').style.color = "black";
}
