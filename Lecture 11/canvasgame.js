// context.arc(100, 100, 20, 0, 2*Math.PI);
// context.fillStyle = 'green';
// context.fill();
// context.fillStyle = 'skyblue';
// context.fillRect(225, 225, 100, 100);

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class gameManager{
    Shot(){
        let clickpos_x = event.clientX -context.canvas.offsetLeft;
        let clickpos_y = event.clientY -context.canvas.offsetTop;
        console.log(clickpos_x);

        clickpos_x++;
        clickpos_y++;
        console.log(clickpos_x);
        let bullets = new bullet(clickpos_x,clickpos_y,5,5,'skyblue',5);
        bullets.draw();
    }
}

class player{
    
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }
    draw()
    {
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI)
        context.fillStyle = this.color;
        context.fill();
    }

}

class bullet{
    constructor(position_x,position_y,radius,color,speed){
        this.position_x = position_x;
        this.position_y = position_y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.position_x+speed, this.position_y+speed, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

var char_player = new player(100,100,20,'skyblue');
char_player.draw();

var bullets = [];

var gm = new gameManager();
canvas.onclick = function(event){
        gm.Shot();
};

//아임 베리머치 분노
// 클래스 다이어그램 왜 이모양임
// 누가 적 -> 플레이어에 직접 이벤트 날리래
// 당신을 가만두지 않겠음