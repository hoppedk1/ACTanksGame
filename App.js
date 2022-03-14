function setup() {  // kører kun en gang, når programmet startes
    createCanvas(950, 700); // størrelse på canvas, er gjort lidt større for at g

    textAlign(CENTER, CENTER);
}

function draw() {
    background(0);
    display();
    
}

function display() {
    fill(255);
    textSize(12);
    text("Score: "+score, width-80, 30);
    text("Liv: " + liv, width-160, 30);
    text("Missed  " + missed, width-240, 30)
    
    //Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises
    if(tid > 0) {
        tid -= 1;
    }
    if (tid < 100) {
        fill(col);
        ellipse(x, y, rad*2, rad*2);

    }
}