var numbers = [15, 22, 48, 17];
var habits = ["choice", "voice", "hustle", "grit", "growth", "optimism", "consideration", "bad and boujie"];
var j = 0;


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(49, 91, 109);
    
    for(var i = 0; i < 4; i++){
       
        ellipse((i+1)*100,200, numbers[i], numbers[i]
        );
    }
    
    fill(161, 226, 222);
    textSize(50);
    text(habits[j], 250, 150);
    
}

function mousePressed(){
    j = j + 1;
    if(j==habits.length){
        j=0;
    }
}
    
