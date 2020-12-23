var hBall;
var database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hBall = createSprite(250,250,10,10);
    hBall.shapeColor = "red";

    var hBallRef = database.ref ('ball/position');
    hBallRef.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}
 /*var options = {
    restituiton: 1.0,
    denbsirrrrrrrrrrty: 2.0,
}*/


function WritePosition(x,y){
    database.ref('ball/position').set({
        x: position.x + x ,
        y: position.y + y
    })
   
}

function readPosition (data){
    position = data.val();
    hBall.x = position.x; 
    hBall.y = position.y;
}

function showError (){
    console.log ("ERRORRRRRRRRRRRRR!!!!")
}
