function setup()
{
    createCanvas(800, 800);
}

function draw()
{
    // general line thinkness
    strokeWeight(10);

    // title
    background(97,68,113);
    textSize(50)
    text("Self Portrait", 250,50);

    //hair back
    fill(196, 178, 66);
    rect(275,150,200,250);

    // dress
    fill(95,233,231);
    triangle(320,500,400,320,500,500)

    // head
    fill(255, 224, 189);
    circle(400,250,200);

    // hair
    fill(196, 178, 66);
    rect(475,150,50,250);
    fill(196, 178, 66);
    rect(275,150,50,250);
    fill(196, 178, 66);
    rect(275,150,200,50);

    // arms
    line(370,375,300,320);
    line(435,375,500,320);

    // iris
    fill(191,219,219);
    circle(350,250,50)
    circle(450,250,50)

    // mouth
    noFill();
    stroke(0);
    curve(405, 236, 384, 323, 421, 323, 415, 275);

    // legs
    rect(375,500,10,50);
    rect(425,500,10,50);

    // pupil
    strokeWeight(30);
    fill(0);
    point(360,260);
    point(460,260);

    textSize(30);
    strokeWeight(1)
    fill(255)
    text("Taryn Crawford",500,700 );


}