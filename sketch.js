//Sprite creation
//Click to create a new sprite with random speed
//example from:
//http://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite.js

var mySprites= new Map();
var ball = null;
var width = 600;
var height = 800;
var player = null;
var player_fixed_height = height - 50;
var player_speed = 10;
var gravity = .5;

function setup() {
    createCanvas(600, 800);
    createBorder();
    createPlayer();

    ball = new Sprite(width/2, height/2, 10);
    ball.velocity = {x:-10, y:-10};
    ball.bounciness = 1;
}

function draw() {
    background(255, 255, 255);

    fill(0);
    // textAlign(CENTER);
    // text('Click to create a new sprite', width/2, height/2);

    movePlayer();
    ball.vel.y = ball.vel.y + gravity;

    checkCollisions();

    //draw all the sprites added to the sketch so far
    //the positions will be updated automatically at every cycle
}

function checkCollisions() {
    if (ball.collides(player)) {
        console.log("CCCCCCOOOLLIDE");
        ball.velocity = {x:0, y:-5};
    }
}

function createPlayer() {
    player = new Sprite(width/2, player_fixed_height, 100,20);
}

function movePlayer() {
    player.moveTo(mouseX, player_fixed_height, player_speed);
    player.rotation = 0;
}

function createBorder() {
    mySprites.set("topSprite",new Sprite(width/2,0,width,10));
    mySprites.set("left", new Sprite(0,height/2,10,height-10));
    mySprites.set("right", new Sprite(width,height/2,10,height-10));
    mySprites.set("floor", new Sprite(width/2,height,width,10));
    for (var [key,val] of mySprites) {
            val.color = "black";
            val.collider = 'static';
            val.bounciness = 1;

    }
}

// function mousePressed() {
//
//     //create a sprite at the mouse position and store it in a temporary variable
//     var s = createSprite(mouseX, mouseY, 30, 30);
//     //if no image or animation is associated it will be a rectancle of the specified size
//     //and a random color
//
//     //now you can use the variable to set properties
//     //e.g. a random velocity on the x and y coordinates
//     s.velocity.x = random(-5, 5);
//     s.velocity.y = random(-5, 5);
// }
