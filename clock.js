var kirby;
//p5.js allows for preload() function to allow things such as images/textures to be loaded
//before setup() and draw() are called
function preload() {
    kirby = loadImage('image/Kirby.png');
}

//secprev variable used to keep track of movement of second hand moving on clock
var secprev;
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('holder');

    angleMode(DEGREES);

    loadSounds();
    secprev = second();
}

function draw() {
    background('#E57373');
    translate(300, 300);
    rotate(-90);

    var hr = hour();
    var min = minute();
    var sec = second();


    strokeWeight(12);
    stroke(0);
    fill('#FFCDD2');
    ellipse(0, 0, 500, 500);

    strokeWeight(6);
    stroke('#f48fb1');
    arc(0, 0, 490, 490, 0, 360);

    push();
    rotate(90);
    image(kirby, -212.5, -212.5, 425, 425);
    pop();

    //Seconds arc
    strokeWeight(4);
    stroke('#F48FB1');
    noFill();
    var end1 = map(sec, 0, 60, 0, 360);
    arc(0, 0, 470, 470, 0, end1);

    //Minutes arc
    var end2 = map(min, 0, 60, 0, 360);
    arc(0, 0, 455, 455, 0, end2);

    //Hour arc
    var end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 440, 440, 0, end3);


	//Seconds, Minutes, and Hours arc are rotated dependent on actual time
    push();
    rotate(end1);
    stroke('#EF9A9A');
    strokeWeight(6);
    line(0, 0, 180, 0);
    pop();

    push();
    rotate(end2);
    stroke(0);
    strokeWeight(8);
    line(0, 0, 160, 0);
    pop();

    push();
    rotate(end3);
    stroke(0);
    strokeWeight(12);
    line(0, 0, 100, 0);
    pop();

    stroke('#E57373');
    strokeWeight(12);
    fill('#E57373');
    ellipse(0, 0, 5, 5);

	
	//If second changes, play a ticking sound
    if(secprev !== sec){
        tick.play();
        secprev = sec;
    }
}


var tick, song;
function loadSounds() {
    tick = new Audio('sounds/tick.mp3');
    tick.volume = .7;

    song = new Audio('sounds/FlowerFields.mp3');
    song.volume = .4;
    song.loop = true;
    song.play();
}
