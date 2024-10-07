//document.querySelector('.social-login').addEventListener('click', cerrarLogin);
document.querySelector('#cerrar-sesion').addEventListener('click', verSignup);
document.querySelector('#inicio-sesion-signup').addEventListener('click', verLogin)
document.querySelector('#back-signin').addEventListener('click', verSignup)

let login = document.getElementById('login');
let registro = document.querySelector('.container1');
let inicioSesion = document.querySelector('.container2');
function verSignup() {
    document.getElementById('perfil').style.right = '-250px';
    login.style.display = 'flex'; 
    registro.style.transform = "translateY(0vh)";
    inicioSesion.style.transform = "translateY(100vh)";
}
function verLogin(){
    registro.style.transform = "translateY(-100vh)";
    inicioSesion.style.transform = "translateY(0vh)";
}
function cerrarLogin(){
    login.style.display = 'none'; 
}