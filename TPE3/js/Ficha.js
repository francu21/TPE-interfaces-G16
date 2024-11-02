class Ficha{
    constructor(posX, posY, radius, img, context){
        this.posX = posX;
        this.posY = posY;
        this.img = img;
        this.ctx = context;
        this.radius = radius;
        this.resaltado = false;
        this.resaltadoEstilo = "black";
        this.bloqueada = false;
    }

    setImg(img){
        this.img = img;
    }

    setPosition(x,y){
        this.posX = x;
        this.posY = y;
    }

    getPosition(){
        return{
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getRadius(){
        return this.radius;
    }
    getImg(){
        return this.img;
    }
    setResaltado(resaltado){
        this.resaltado = resaltado;
    }

    setBloqueada(bloqueada) {
        this.bloqueada = bloqueada;
    }

    isBloqueada() {
        return this.bloqueada;
    }
    draw() {
        const imgSize = this.radius * 2;
    
        // Inicia un nuevo camino para el recorte circular
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.save(); // Guarda el estado actual del contexto
    
        // Aplica el recorte al área circular
        this.ctx.clip();
    
        // Dibuja la imagen dentro del área circular
        if (this.img && this.img.complete) {
            this.ctx.drawImage(this.img, this.posX - this.radius, this.posY - this.radius, imgSize, imgSize);
        }
    
        this.ctx.restore(); // Restaura el contexto para quitar el clip
    
        // Dibujar el borde resaltado si es necesario
        if (this.resaltado) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
    }

    isPointInSide(x,y){
        let _x = this.posX - x;
        let _y = this.posY - y;
        const distance = Math.sqrt(_x * _x + _y * _y);
        return distance < this.radius;
    }
}