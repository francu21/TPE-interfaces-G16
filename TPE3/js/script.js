//carga-pagina
let i = 0;
let tam_barra = document.querySelector('.barra-carga').clientWidth;
let tam_img = document.querySelector('.kiwi-carga').clientWidth;

let intervalo = setInterval(function() {
  let pximg = i*((tam_barra-tam_img)/500);
  document.querySelector('.porcentaje').innerHTML = Math.floor(i/5)+"%";
  document.querySelector('.kiwi-carga').style.transform = "translate(" + pximg + "px,0)";
  document.querySelector('.barra-porcentaje').style.width = pximg+64+ "px";
  
  i++;
  if (i > 500) {
    clearInterval(intervalo); 
    document.querySelector('.carga-pagina').style.display = "none";
  }
}, 10); 



function verMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-250px';
    } else {
        menu.style.left = '0px';
    }
}

function verPerfil() {
    var perfil = document.getElementById('perfil');
    if (perfil.style.right === '0px') {
        perfil.style.right = '-250px';
    } else {
        perfil.style.right = '0px';
    }
}

function jugar4enlinea(){
    window.location.href = "4enlinea.html";
}



