var canvas = document.getElementById('game');
//화면에 그릴 수 있는 권한이 있음
var context = canvas.getContext('2d');

class Player{
    //생성자
    constructor(pos_x,pos_y,radius,color){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color; 
    }

    draw() {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}

class bullet{
    constructor(posX, posY, color){
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }
}
function _click(event){
    context.beginPath();
    this.posX = event.clientX - context.canvas.offsetLeft;
    this.posY = event.clientY - context.canvas.offsetTop;
    context.fillRect(posX-15, posY-15, 10,10);
    }


var char_player = new Player(100,100,20,'skyblue'); 
var char_bullet = new bullet(0,0,'black');
char_player.draw();