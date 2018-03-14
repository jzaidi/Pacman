var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// //Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// //Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for (var i = 0; i < 200; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);
//   var rgb = "rgba(" + r + ", " + g + ", " + b + ", " + 0.9 + ")";

//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = rgb;
//   c.stroke();
// }
// //Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

function Line(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y);
        c.lineTo(this.x, this.y);
        c.strokeStyle = "#fa34a3";
        c.stroke();
    };
  this.update = function() {
    if (this.x > innerWidth || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > innerHeight || this.y < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }; 
}
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
    c.fillStyle = 'yellow';
    c.fill();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];
var lineArray = [];
// for (var i = 0; i < 100; i++) {
//   var radius = 30;
//   var x = Math.random() * (innerWidth -  radius * 2) + radius;
//   var y = Math.random() * (innerHeight - radius * 2) + radius;
//   var dx = (Math.random() - 0.5);
//   var dy = (Math.random() - 0.5);
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }
for (var i = 0; i < 100; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);
  lineArray.push(new Line(x, y, dx, dy));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
  for (var i = 0; i < lineArray.length; i++) {
    lineArray[i].update();
  }
}
animate();
