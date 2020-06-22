var database ;
var drawing = [];
function setup(){
    var  canvas =   createCanvas(displayWidth,displayHeight);
    canvas.mousePressed(startPath);
 
    database = firebase.database();



}

function startPath(){
    currentPath = [] ;
 
 drawing.push(currentPath);


}

function draw(){
    background(0);
    

    if(mouseIsPressed){
        var point = {
            x : mouseX ,
            y : mouseY 
        }
        currentPath.push(point);
        var databaseref = database.ref("/").update({
            positions :drawing
        });
    
    }


        stroke("cyan");
        strokeWeight(10);
        noFill();
  
        for(var i = 0 ; i   < drawing.length ; i++){
            var path = drawing[i];
            beginShape();
            for(var t = 0 ; t   < path.length ;t++){
                vertex(path[t].x,path[t].y)
            }
            endShape();
        }

        console.log(drawing);
}