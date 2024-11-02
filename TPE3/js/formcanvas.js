document.querySelector('.form-canvas').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const jugador1 = document.getElementById('jugador1').value;
    const jugador2 = document.getElementById('jugador2').value;
    const fichaj1 = document.querySelector('input[name="fichaj1"]:checked').value;
    const fichaj2 = document.querySelector('input[name="fichaj2"]:checked').value;
    const select_tab = document.getElementById('select_tablero').value;
    const tipotablero = parseInt(select_tab,10);
    

    if(jugador1===''||jugador2===''||fichaj1===''||fichaj2===''){
        document.getElementById('span-form-canvas').style.display = 'block';
    }else{
        document.querySelector('.form-canvas').style.display = 'none';
        definirJuego(fichaj1,fichaj2,jugador1,jugador2,tipotablero);
        document.getElementById('span-form-canvas').style.display = 'none';
    }
    
    
  });