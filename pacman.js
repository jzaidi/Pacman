let gameData = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 6, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 1, 2, 2, 1, 7, 2, 1, 1, 2, 1],
  [1, 2, 8, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}


var y = document.getElementById("myAudio2");

function playAudio2() {
  y.play();
}

function pauseAudio2() {
  y.pause();
}


var z = document.getElementById("myAudio3");

function playAudio3() {
  z.play();
}

function pauseAudio3() {
  z.pause();
}
var body23 = document.getElementById("body23");
const WALL = 1;
const COIN = 2;
const GROUND = 3;
const PACMAN = 5;
const REDGHOST = 6;
const PINKGHOST = 7;
const BLUEGHOST = 8;
let map;

let pacman = {
  x: 6,
  y: 4
};
let red_ghost = {
  x: 1,
  y: 1
};
let pink_ghost = {
  x: 7,
  y: 6
};
let blue_ghost = {
  x: 2,
  y: 7
};
function createTiles(data) {
  let tilesArray = [];
  for (let row of data) {
    for (let col of row) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      if (col === WALL) {
        tile.classList.add("wall");
      } else if (col === COIN) {
        tile.classList.add("coin");
      } else if (col === GROUND) {
        tile.classList.add("ground");
      } else if (col === REDGHOST) {
        tile.classList.add("redghost");
      } else if (col === PINKGHOST) {
        tile.classList.add("pinkghost");
      } else if (col === BLUEGHOST) {
        tile.classList.add("blueghost");
      } else if (col === PACMAN) {
        tile.classList.add("pacman");
        tile.classList.add(pacman.direction);
      }

      tilesArray.push(tile);
    }
    let brTile = document.createElement("br");
    tilesArray.push(brTile);
  }
  return tilesArray;
}

function movePinkGhost() {
  var directions = ["left", "right", "up", "down"];
  var randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  if (
    randomDirection === "left" &&
    gameData[pink_ghost.y][pink_ghost.x - 1] !== WALL
  ) {
    gameData[pink_ghost.y][pink_ghost.x] = COIN;
    pink_ghost.x = pink_ghost.x - 1;
    gameData[pink_ghost.y][pink_ghost.x] = PINKGHOST;
  } else if (
    randomDirection === "right" &&
    gameData[pink_ghost.y][pink_ghost.x + 1] !== WALL
  ) {
    gameData[pink_ghost.y][pink_ghost.x] = COIN;
    pink_ghost.x = pink_ghost.x + 1;
    gameData[pink_ghost.y][pink_ghost.x] = PINKGHOST;
  } else if (
    randomDirection === "up" &&
    gameData[pink_ghost.y - 1][pink_ghost.x] !== WALL
  ) {
    gameData[pink_ghost.y][pink_ghost.x] = COIN;
    pink_ghost.y = pink_ghost.y - 1;
    gameData[pink_ghost.y][pink_ghost.x] = PINKGHOST;
  } else if (
    randomDirection === "down" &&
    gameData[pink_ghost.y + 1][pink_ghost.x] !== WALL
  ) {
    gameData[pink_ghost.y][pink_ghost.x] = COIN;
    pink_ghost.y = pink_ghost.y + 1;
    gameData[pink_ghost.y][pink_ghost.x] = PINKGHOST;
  }
}

function moveBlueGhost() {
  var directions = ["left", "right", "up", "down"];
  var randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  if (
    randomDirection === "left" &&
    gameData[blue_ghost.y][blue_ghost.x - 1] !== WALL
  ) {
    gameData[blue_ghost.y][blue_ghost.x] = COIN;
    blue_ghost.x = blue_ghost.x - 1;
    gameData[blue_ghost.y][blue_ghost.x] = BLUEGHOST;
  } else if (
    randomDirection === "right" &&
    gameData[blue_ghost.y][blue_ghost.x + 1] !== WALL
  ) {
    gameData[blue_ghost.y][blue_ghost.x] = COIN;
    blue_ghost.x = blue_ghost.x + 1;
    gameData[blue_ghost.y][blue_ghost.x] = BLUEGHOST;
  } else if (
    randomDirection === "up" &&
    gameData[blue_ghost.y - 1][blue_ghost.x] !== WALL
  ) {
    gameData[blue_ghost.y][blue_ghost.x] = COIN;
    blue_ghost.y = blue_ghost.y - 1;
    gameData[blue_ghost.y][blue_ghost.x] = BLUEGHOST;
  } else if (
    randomDirection === "down" &&
    gameData[blue_ghost.y + 1][blue_ghost.x] !== WALL
  ) {
    gameData[blue_ghost.y][blue_ghost.x] = COIN;
    blue_ghost.y = blue_ghost.y + 1;
    gameData[blue_ghost.y][blue_ghost.x] = BLUEGHOST;
  }
}

function moveGhost() {
  var directions = ["left", "right", "up", "down"];
  var randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  if (
    randomDirection === "left" &&
    gameData[red_ghost.y][red_ghost.x - 1] !== WALL
  ) {
    gameData[red_ghost.y][red_ghost.x] = COIN;
    red_ghost.x = red_ghost.x - 1;
    gameData[red_ghost.y][red_ghost.x] = REDGHOST;
  } else if (
    randomDirection === "right" &&
    gameData[red_ghost.y][red_ghost.x + 1] !== WALL
  ) {
    gameData[red_ghost.y][red_ghost.x] = COIN;
    red_ghost.x = red_ghost.x + 1;
    gameData[red_ghost.y][red_ghost.x] = REDGHOST;
  } else if (
    randomDirection === "up" &&
    gameData[red_ghost.y - 1][red_ghost.x] !== WALL
  ) {
    gameData[red_ghost.y][red_ghost.x] = COIN;
    red_ghost.y = red_ghost.y - 1;
    gameData[red_ghost.y][red_ghost.x] = REDGHOST;
  } else if (
    randomDirection === "down" &&
    gameData[red_ghost.y + 1][red_ghost.x] !== WALL
  ) {
    gameData[red_ghost.y][red_ghost.x] = COIN;
    red_ghost.y = red_ghost.y + 1;
    gameData[red_ghost.y][red_ghost.x] = REDGHOST;
  }
}

function drawMap() {
  map = document.createElement("div");
  let tiles = createTiles(gameData);
  for (let tile of tiles) {
    map.appendChild(tile);
  }
  body23.appendChild(map);
}

function eraseMap() {
  body23.removeChild(map);
}

function moveDown() {
  pacman.direction = "down";
  if (gameData[pacman.y + 1][pacman.x] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y + 1;
    playAudio2();
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveUp() {
  pacman.direction = "up";
  if (gameData[pacman.y - 1][pacman.x] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y - 1;
     playAudio2();
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveLeft() {
  pacman.direction = "left";
  if (gameData[pacman.y][pacman.x - 1] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x - 1;
     playAudio2();
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveRight() {
  pacman.direction = "right";
  if (gameData[pacman.y][pacman.x + 1] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x + 1;
     playAudio2();
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function setupKeyboardControls() {
  document.addEventListener("keydown", function(e) {
    e.preventDefault();
    // console.log(e.keyCode);
    //moveGhost();
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      moveUp();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
    eraseMap();
    drawMap();
    //  console.log([pacman.x][pacman.y], [red_ghost.x][red_ghost.x]);
    if (gameData[pacman.x] === gameData[red_ghost.x]) {
      if (gameData[pacman.y] === gameData[red_ghost.y]) {
        playAudio3();
        clearInterval(redGhost);
        alert("You died!");
        location.reload();
      }
    }else if (gameData[pacman.x] === gameData[pink_ghost.x]) {
      if (gameData[pacman.y] === gameData[pink_ghost.y]) {
        playAudio3();
        clearInterval(pinkGhost);
        alert("You died!");
        location.reload();
      }
    }else if (gameData[pacman.x] === gameData[blue_ghost.x]) {
      if (gameData[pacman.y] === gameData[blue_ghost.y]) {
        playAudio3();
        clearInterval(blueGhost);
        alert("You died!");
        location.reload();
      }
    }
  });
}

function main() {
  playAudio();
  drawMap();
  setupKeyboardControls();
}
var redGhost = setInterval(moveGhost, 500);
var pinkGhost = setInterval(movePinkGhost, 400);
var blueGhost = setInterval(moveBlueGhost, 600);

main();
