let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
ctx.fillStyle = '#F8F8FF';
let imgGanador = new Image();
imgGanador.src = "juegos/fichas/kiwis.jpg";
let fondo = new Image();
fondo.src = "juegos/fichas/frutas2.avif";
let cellImage = new Image();
cellImage.src = 'juegos/fichas/slotFicha.png';
fondo.onload = function() {
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
}
cellImage.onload = function() {
    ctx.drawImage(cellImage, x, y, cellSize, cellSize);
} 

const CANT_FICHAS = 35;
let fichasJ1 = [];
let fichasJ2 = [];
let imgJ1 = new Image();
let imgJ2 = new Image();
let jugador1;
let jugador2;
let tipo_tablero = 4;
let currentPlayer = 1;
let tiempo = 20;
let gameOver = true;
let lastClickedFicha = null;
let isMouseDown = false;

//tablero
let COLS = 7;
let ROWS = 6;
const cellSize = 68; // tamanio de cada espacio
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

function setBoard(n) {
    // agregar filas
    for (let i = 0; i < n; i++) {
        board.push(Array(COLS).fill(null));
    }

    // agrega columnas
    for (let i = 0; i < ROWS + n; i++) {
        for (let j = 0; j < n; j++) {
            board[i].push(null);
        }
    }

    ROWS += n;
    COLS += n;
}

function drawBoard() {
    
    const boardTopLeftX = (canvasWidth - (COLS * cellSize)) / 2;
    const boardTopLeftY = 100;

    // tablero
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const x = boardTopLeftX + col * cellSize;
            const y = boardTopLeftY + row * cellSize;
            ctx.drawImage(cellImage, x, y, cellSize, cellSize);
            
        }
    }
}

function definirJuego(img1 , img2, jug1, jug2, tt){
    //define el juego con lo que le manda el formulario
    gameOver = false;
    COLS = 7;
    ROWS = 6;
    tipo_tablero = 4;
    imgJ1.src = img1; 
    imgJ2.src = img2; 
    jugador1 = jug1;
    jugador2 = jug2;
    tipo_tablero = tipo_tablero + tt;
    

    setBoard(tt)
    addFichas();
    requestAnimationFrame(drawHintsAnimated);
}

function addFicha(){
    
    let posX1 = 200 - Math.random() * (100) ;
    let posY1 = canvasHeight-100-Math.random() * (100) ;
    let posX2 = canvasWidth-100-Math.random() * (100) ;
    let posY2 = canvasHeight-100-Math.random() * (100) ;

    let ficha1 = new Ficha(posX1,posY1,30, imgJ1,ctx);
    let ficha2 = new Ficha(posX2,posY2,30, imgJ2,ctx);
    fichasJ1.push(ficha1);
    fichasJ2.push(ficha2);
    
    drawFicha();
}
function drawFicha(){
    if (gameOver) return;
    clearCanvas();
    drawTablas();
    drawBoard();
    drawTimer();
    drawTurno();
    drawReinicio();

    for (let i=0; i<fichasJ1.length; i++) {
        fichasJ1[i].draw();
    }
    for (let i=0; i<fichasJ2.length; i++) {
        fichasJ2[i].draw();
    }
}
function addFichas(){
    addFicha();
    if(fichasJ1.length < CANT_FICHAS){
        addFichas();
    }
}

function clearCanvas(){
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
}


function onMouseDown(e){
    if (gameOver) return;
    isMouseDown = true;
    if(lastClickedFicha != null){
        lastClickedFicha.setResaltado(false);
        lastClickedFicha = null;
    }
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let clickFicha = findClickedFicha(x, y);
    if(clickFicha != null){
        clickFicha.setResaltado(true);
        lastClickedFicha = clickFicha;
    }
    drawFicha();

    // verifica si es dentro del boton reiniciar
    if (x > 5 && x < 107 && y > 87 && y < 119) {
        reiniciarJuego();
    }
}

function findClickedFicha(x, y) {
    if(currentPlayer === 1){
        for (let index = 0; index < fichasJ1.length; index++) {
            const element = fichasJ1[index];
            if (!element.isBloqueada() && element.isPointInSide(x, y)) {
                return element;
            }
        }
    }
    if(currentPlayer===2){
        for (let index = 0; index < fichasJ2.length; index++) {
            const element = fichasJ2[index];
            if (!element.isBloqueada() && element.isPointInSide(x, y)) {
                return element;
            }
        }
        return null;
    }
}
function onMouseUp(e){
    if (gameOver) return;
    isMouseDown = false;

    if (lastClickedFicha) {
        // obtiene la columna donde se solto la ficha
        const column = getColumnFromPosition(lastClickedFicha.posX);
        
        if (column !== null) {
            // busca la primera fila disponible en esa columna
            const row = getFirstAvailableRow(column);

            if (row !== null) {
                // inicia la animación de caida
                animateFichaFall(lastClickedFicha, row, column);
                lastClickedFicha = null;  
            }
        }
    }
}
function onMouseMove(e){
    if (gameOver) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if(isMouseDown && lastClickedFicha!=null){
        lastClickedFicha.setPosition(x,y);
        drawFicha();
    }
}

function drawTablas(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 322, 82); 
    ctx.fillRect(48, canvasHeight-352, 204, 304); 
    ctx.fillRect(canvasWidth-252, canvasHeight-352, 204, 304); 
    ctx.fillStyle = '#81A649';
    ctx.fillRect(0, 0, 320, 80); 
    ctx.fillRect(50, canvasHeight-350, 200, 300); 
    ctx.fillRect(canvasWidth-250, canvasHeight-350, 200, 300); 
    ctx.fillStyle = '#fff';
    ctx.font = '30px Saira';
    ctx.fillText(jugador1, 55, canvasHeight-320);
    ctx.fillText(jugador2, canvasWidth-245, canvasHeight-320);
}
function drawTimer(){
    ctx.fillStyle = '#000';
    ctx.font = '30px Saira';
    ctx.fillText("Tiempo restante: "+tiempo, 10, 70);
}

function drawReinicio(){
    ctx.fillStyle = '#000'; 
    ctx.fillRect(5, 87, 102, 32);
    ctx.fillStyle = 'red'; 
    ctx.fillRect(6, 88, 100, 30); 
    ctx.fillStyle = '#fff';
    ctx.font = '20px Saira';
    ctx.fillText('Reiniciar', 16, 110); 
}
function drawTurno(){
    ctx.fillStyle = '#000';
    ctx.font = '30px Saira';
    ctx.fillText("Turno de "+getCurrentPlayer(), 10, 30);
}
function drawGanador(){
    finalizarJuego();
    ctx.fillStyle = '#000';
    ctx.fillRect((canvasWidth/2)-300, (canvasHeight/2)-150, 600, 300);
    ctx.drawImage(imgGanador, (canvasWidth/2)-298, (canvasHeight/2)-148, 596, 296);
    ctx.fillStyle = '#fff';
    ctx.fillRect((canvasWidth/2)-250, (canvasHeight/2)-40, 500, 80);
    ctx.fillStyle = 'black';
    ctx.font = '50px Saira';
    ctx.fillText('El ganador es '+ getCurrentPlayer(), (canvasWidth/2)-240, (canvasHeight/2)+20); 
}

// se fija en que columna esta la ficha basada en la posicion X
function getColumnFromPosition(x) {
    const boardLeft = (canvasWidth - (COLS * cellSize)) / 2;

    if (x < boardLeft || x > boardLeft + COLS * cellSize) {
        return null;  // se solto fuera del tablero
    }

    return Math.floor((x - boardLeft) / cellSize);
}

// busca la fila mas baja disponible en una columna
function getFirstAvailableRow(col) {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row][col] === null) {
            return row;
        }
    }
    return null;  // no hay espacio
}

function animateFichaFall(ficha, targetRow, targetCol) {
    const boardTopLeftY = 100;
    const targetY = boardTopLeftY + targetRow * cellSize + cellSize / 2;  // Y final de la ficha
    const targetX = (canvasWidth - (COLS * cellSize)) / 2 + targetCol * cellSize + cellSize / 2;  // X de la columna

    function fall() {
        if (ficha.posY < targetY) {
            ficha.posY += 4;  // velocidad caida
            ficha.posX = targetX;
            drawFicha();
            requestAnimationFrame(fall);
        } else {
            // guarda el jugador actual en la posicion del tablero
            board[targetRow][targetCol] = currentPlayer; 

            // bloquea la ficha asi no se puede retirar
            ficha.setBloqueada(true);

            // verifica si hay un ganador
            if (checkVictory(targetRow, targetCol, currentPlayer)) {
                setTimeout(() => {
                    drawGanador();
                }, 100);
            } else {
                switchTurn(); //si no hay ganador cambia el turno
            }

            
        }
    }
    requestAnimationFrame(fall);
}

//flechas columnas
let hintOffsetY = 0;
let hintDirection = 1;
const hintSpeed = 0.2;
const hintSize = 20;  // tamanio de las flechas
const hintYBase = 60;  // posicion base de las flechas

// anima las flechas
function drawHintsAnimated() {
    if (gameOver) return;
    const boardTopLeftX = (canvasWidth - (COLS * cellSize)) / 2;
    drawFicha();
    // anima las flechas moviéndolas hacia arriba y abajo
    hintOffsetY += hintDirection * hintSpeed;
    if (hintOffsetY > 10 || hintOffsetY < 0) {
        hintDirection *= -1;  // cambia la direccion al llegar al limite
    }

    // dibuja las flechas para cada columna disponible
    for (let col = 0; col < COLS; col++) {
        if (board[0][col] === null) {  // si la columna esta disponible
            const hintX = boardTopLeftX + col * cellSize + cellSize / 2;
            const hintY = hintYBase + hintOffsetY;

            ctx.beginPath();
            ctx.moveTo(hintX, hintY + hintSize);  
            ctx.lineTo(hintX - hintSize / 2, hintY);  
            ctx.lineTo(hintX + hintSize / 2, hintY);  
            ctx.closePath();

            ctx.fillStyle = 'red'; 
            ctx.fill();
            
            ctx.strokeStyle = 'black';
            ctx.stroke();

        }
    }

    // lo llama siempre para la animacion constante
    requestAnimationFrame(drawHintsAnimated);
}

//buscar ganador
function checkVictory(row, col, player) {
    const directions = [
        { dx: 1, dy: 0 },  // horizontal
        { dx: 0, dy: 1 },  // vertical
        { dx: 1, dy: 1 },  // diagonal 
        { dx: 1, dy: -1 }  // diagonal 
    ];

    for (let dir of directions) {
        let count = 1;

        // cuenta las fichas hacia adelante en la direccion actual
        count += countInDirection(row, col, dir.dx, dir.dy, player);

        // cuenta las fichas hacia atras en la dirección opuesta
        count += countInDirection(row, col, -dir.dx, -dir.dy, player);

        if (count >= tipo_tablero) {
            return true;
        }
    }

    return false;
}

// cuenta cuantas fichas seguidas hay en una direccion
function countInDirection(row, col, dx, dy, player) {
    let count = 0;
    let currentRow = row + dy;
    let currentCol = col + dx;

    // continuar contando mientras este dentro del tablero y las fichas coincidan
    while (
        currentRow >= 0 &&
        currentRow < ROWS &&
        currentCol >= 0 &&
        currentCol < COLS &&
        board[currentRow][currentCol] === player  // verificar si es del jugador actual
    ) {
        count++;
        currentRow += dy;
        currentCol += dx;
    }

    return count;
}


//turnos
function switchTurn() {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    console.log(currentPlayer);
    tiempo = 15;
}

function contador(){
    if (gameOver) return;
    if(tiempo===0){
        switchTurn();
    }else{
        tiempo--;
    }
    drawFicha();
}
setInterval(contador, 1000); // lo llama cada 1 segundo

function getCurrentPlayer(){
    if(currentPlayer === 1){
        return jugador1;
    }else{
        return jugador2;
    }
}

function reiniciarJuego(){
    gameOver = true;
    // restablece el tablero vacio
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

    // limpia las fichas del tablero 
    fichasJ1 = [];
    fichasJ2 = [];  

    currentPlayer = 1;
    tiempo = 20;

    clearCanvas();
    drawFicha();

    //vuelve a abrir el formulario para inciar otro juego
    document.querySelector('.form-canvas').style.display = 'block';
}
function finalizarJuego(){
    gameOver = true;
    setTimeout(reiniciarJuego, 3000);
}


canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);