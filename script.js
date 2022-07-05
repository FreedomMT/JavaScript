var canvas = document.getElementByld("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = cancas.Width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddlex = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var bricks = [];
for(varc=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(var r=0; r < brickRowCount; r++){
        bricks[c][r] = {x:0, y:0, status:1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemave", mouseMoveHandler, false);

function keyDownHandler(e){
    if(e.code == "ArrowRight"){
        rightPressed = true;
    }
    else if(e.code == 'ArrowLeft'){
        leftPressed = true;
    }
}
function keyUpHandle(e){
    if(e.code == 'ArrowRight'){
        rightPressed = false;
    }
    else if(e.code =='ArrowLeft'){
        leftPressed = false;
    }
}
function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < cancas.width){
        paddleX = relativeX - PaddleWidth/2;
    }
}
function collisionDetection(){
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == birckRowCount*brickColumnCount){
                        alert("YOU WIN CONGRATS");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.Pl*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}