var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ref = database.ref("car/position");
    ref.on("value",readPosition,showError)
}

function readPosition(data){
    position = data.val ();
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){

}

function writePosition(x,y){
database.ref ("car/position").set
({
    x: ball.x + x,
    y: ball.y + y,

})
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
