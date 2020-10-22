const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var particle = null;
var turn = 0;
var gameState = "play";

function preload() {
    
}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240, 793, 480, 15);
    
    //divisions
    for (var k = 0; k <= width; k = k + 80){
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }

    //plinkos
    for (var j = 40; j <= width; j = j + 50){
        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 40; j <= width - 10; j = j + 50){
        plinkos.push(new Plinko(j, 175));
    }

    for (var j = 40; j <= width; j = j + 50){
        plinkos.push(new Plinko(j, 275));
    }

    for (var j = 40; j <= width - 10; j = j + 50){
        plinkos.push(new Plinko(j, 375));
    }

    for (var j = 40; j <= width; j = j + 50){
        plinkos.push(new Plinko(j, 475));
    }

}

function draw(){
    background(100);
    Engine.update(engine);

    fill("pink");
    textSize(20);
    text("500", 25, 550);
    text("200", 105, 550);
    text("100", 185, 550);
    text("100", 265, 550);
    text("200", 345, 550);
    text("500", 425, 550);

    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();
    }

    ground.display();

    for (var j = 0; j < plinkos.length; j++){
        plinkos[j].display();
    }

    for (var i = 0; i < particles.length; i++){
        particles[i].display();
    }

    if(particle !== null){
        
        particle.display();

        if(particle.body.position.y > 760){
            if(particle.body.position.x < 80 || particle.body.position.x > 400){
            score = score + 500;
            particle = null;
            }

            else if(particle.body.position.x > 80 && particle.body.position.x < 160 || particle.body.position.x < 320 && particle.body.position.x > 400){
            score = score + 200;
            particle = null;
            }

            else if(particle.body.position.x > 240 || particle.body.position.x < 400){
            score = score + 100;
            particle = null;
            }
        }
    }

    if(turn >= 5){
        gameState = "end";
    }

    if (gameState === "end"){
        fill("pink");
        textSize(45);
        text("GAME OVER", 100, 240);
    }

    fill("white");
    textSize(20);
    text("Score: " + score, 25, 35)
}

function mouseClicked(){
    if (gameState === "play"){
        turn = turn + 1;
        particle = new Particle(mouseX, 10, 10, 10);
        particles.push(particle);
    }
}


