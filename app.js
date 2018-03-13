//Pacman
//To-do list:
//Draw pacman character
//Draw ghost character
//Move pacman by the keyboard
//Move the ghost to follow pacman 
//Walls
//Food for pacman to eat
//If the ghost catches Pacman, game over
//Score = how much food we ate

var pacmanx = 225;
var pacmany = 225;
var ghostx = 25;
var ghosty = 25;
var food = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var score = 0;
document.addEventListener('keydown', movePacman);
setInterval(loop, 40);
setInterval(moveGhost, 500);

function loop() {
  draw.rectangle(0,0,window.innerWidth,window.innerHeight, "white");
  drawWalls();
  drawFood();
  drawPacman();
  drawGhost();
  if(pacmanx == ghostx){
    if(pacmany == ghosty){
      clearInterval(1);
      clearInterval(2);
      draw.text('YOU DIED!', 250,250, 'red');
      draw.text('Score: ' + score, 250, 280, 'red');
    }
  }
}
function drawFood() {
  var x = 25;
  var y = 25;
  for(var i = 0; i < food.length; i++){
    if(food[i] == 1) {
       draw.circle(x,y,2, "black");
    }
    x = x + 50;
    if(x > 500) {
      x = 25;
      y = y + 50;
    }
  }
}
function drawWalls() {
  //External edge
  draw.line(0,0, 500, 0, 'black', 6);
  draw.line(0,500,500, 500, 'black', 6);
  draw.line(0,0,0, 500, 'black', 6);
  draw.line(500,0,500, 500, 'black', 6);
  //Horizontal
  draw.line(50,50,450, 50, 'black', 6);
  draw.line(50,450,450, 450, 'black', 6);
  draw.line(50,150,450, 150, 'black', 6);
  draw.line(50,350,450, 350, 'black', 6);
  //Vertical
   draw.line(50,200,50, 350, 'black', 6);
   draw.line(100,150,100, 300, 'black', 6);
   draw.line(400,200,400, 350, 'black', 6);
   draw.line(450,150,450, 300, 'black', 6);
};
function drawPacman() {
    draw.circle(pacmanx, pacmany, 20, "yellow");
};

function drawGhost() {
  draw.circle(ghostx,ghosty,20, 'magenta');
  draw.rectangle(ghostx-20, ghosty, 40, 20, 'magenta')
  draw.circle(ghostx-6, ghosty-6, 3, 'white', 'black', 1)
  draw.circle(ghostx+6, ghosty-6, 3, 'white', 'black', 1)
}

function moveGhost(){
  if(pacmanx >= ghostx) {
    ghostx = ghostx + 50;
  }else if(pacmanx <= ghosty) {
    ghostx = ghostx - 50;
  } else if(pacmany >= ghosty) {
    ghosty = ghosty + 50;
  } else if(pacmany <= ghosty){
    ghosty = ghosty - 50;
  }
}
function movePacman(e){
    if(e.keyCode == 37) {
      if(getPixel(pacmanx-25, pacmany) != '#000000'){
        pacmanx = pacmanx - 50;
      }
    } else if(e.keyCode == 38){
      	if(getPixel(pacmanx, pacmany-25) != '#000000'){
        	pacmany = pacmany - 50;
        }
    } else if(e.keyCode == 39){
        if(getPixel(pacmanx+25, pacmany) != '#000000'){
        	pacmanx = pacmanx + 50;
        }
    } else if(e.keyCode == 40){
      	if(getPixel(pacmanx, pacmany+25) != '#000000'){
        	pacmany = pacmany + 50;
        }
    }
  	var foodx = (pacmanx-25)/50;
  	var foody = 10*(pacmany-25)/50;
  	var realFoodNumber = foodx + foody;
  	if(food[realFoodNumber] == 1){ score = score + 1;}
  	food[realFoodNumber] = 0;
};

function getPixel(x, y) {
  var pixel = document.getElementsByTagName('canvas')[0].getContext('2d').getImageData(x,y,1,1).data;
  return '#' + ('000000' + (((pixel[0] << 16) | (pixel[1] << 8) | pixel[2]).toString(16))).slice(-6); 
}

