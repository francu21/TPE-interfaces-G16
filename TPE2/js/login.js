
document.getElementById('cerrar-sesion').addEventListener('click', verSignup);
document.querySelector('#inicio-sesion-signup').addEventListener('click', verLogin)
document.querySelector('#back-signin').addEventListener('click', verSignup)
document.querySelector('#a-jugar').addEventListener('click', cerrarLogin)

document.querySelector('.registro-form.signup').addEventListener('submit', function(event) {
    event.preventDefault();
    var valido = true;
    document.getElementById('error-campovacio').style.display = 'none';
    document.getElementById('error-contrasenia').style.display = 'none';
    document.getElementById('error-recaptcha').style.display = 'none';

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nickname = document.getElementById('nickname').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const mail = document.getElementById('mail').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const repetircontrasenia = document.getElementById('repetir-contrasenia').value;
    const recaptcha = document.getElementById('recaptcha').checked;

    if(nombre===""||apellido===""||nickname===""||mail===""||contrasenia===""||repetircontrasenia===""){
        document.getElementById('error-campovacio').style.display = 'block';
        valido = false;
    }
    if(contrasenia!=repetircontrasenia){
        document.getElementById('error-contrasenia').style.display = 'block';
        valido = false;
    }
    if(!recaptcha){
        document.getElementById('error-recaptcha').style.display = 'block';
        valido = false;
    }
    
    
    if(valido){
        verConfirmacion();
    }

    console.log(nombre,apellido,nickname,nacimiento,contrasenia,repetircontrasenia,recaptcha);

});

document.querySelector('.registro-form.signin').addEventListener('submit', function(event) {
    event.preventDefault();
    var valido = true;
    document.getElementById("error-coincidencia").style.display = 'none';
    document.getElementById("contrasenia-incorrecta").style.display = 'none';
    document.getElementById("error-campovacio2").style.display = 'none';
    
    const mail = document.getElementById('mail2').value;
    const contrasenia = document.getElementById('contrasenia2').value;

    if(mail===""||contrasenia===""){
        document.getElementById("error-campovacio2").style.display = 'block';
        valido = false;
    }
    else{
        if(mail!="user@admin.com"){
            document.getElementById("error-coincidencia").style.display = 'block';
            valido = false;
        }
        if(contrasenia!="admin"){
            document.getElementById("contrasenia-incorrecta").style.display = 'block';
            valido = false;
        }
    }
    
    if(valido){
        verConfirmacion();
    }
   
    console.log(mail,contrasenia);

});



let login = document.getElementById('login');
let registro = document.querySelector('.container1');
let inicioSesion = document.querySelector('.container2');
let confirmacion = document.querySelector('.container3');
function verSignup() {
    document.getElementById('perfil').style.right = '-200px';
    document.getElementById('menu').style.left = '-200px';
    login.style.display = 'flex'; 
    registro.style.transform = "translateY(0vh)";
    inicioSesion.style.transform = "translateY(100vh)";
    confirmacion.style.transform = "translateY(200vh)";
}
function verLogin(){
    registro.style.transform = "translateY(-100vh)";
    inicioSesion.style.transform = "translateY(0vh)";
}
function verConfirmacion(){
    registro.style.transform = "translateY(-200vh)";
    inicioSesion.style.transform = "translateY(-100vh)";
    confirmacion.style.transform = "translateY(0vh)";
}
function cerrarLogin(){
    login.style.display = 'none'; 
}