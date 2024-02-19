let j;
function setup() {
    // put setup code here
    createCanvas(400,400);
    background(200);
    j = 0;
}

function draw() {
    // put drawing code here
    stroke(255,255,255);
    line(200,399,200,0);

    // kepala non animasi
    fill(255, 255, 0); //warna dalam
    stroke(200); //warna luar
    ellipse(100,200,160,160);

    //bibir non animasi
    fill(0);
    stroke(248, 229, 89);
    arc(96,225,60,30,0,3);

    //mata non animasi
    stroke(248, 229, 89);
    ellipse(65,170,20,20);
    ellipse(125,170,20,20);

    // kepala animasi
    var y = 200 + 10* Math.sin(PI/70*j)
    j += 1;
    fill(255, 255, 0);
    stroke(200); 
    ellipse(300,y,160,160);

    //bibir animasi
    var y = 225 + 10* Math.sin(PI/70*j)
    j += 1;
    fill(0);
    stroke(248, 229, 89)
    arc(300,y,60,30,0,3);

    //mata animasi
    var y = 170 + 10* Math.sin(PI/70*j)
    j += 1;
    fill(0);
    ellipse(330,y,20,20);
    ellipse(270,y,20,20);

}
    


    
