
// MOUSE TRAIL BELOW
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}
function draw() {
  
  var x = mouse.x,
      y = mouse.y;
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}
addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});
function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();


// NUTS BELOW
const nuts = [
  document.querySelector('.nut-1'),
  document.querySelector('.nut-2'),
  document.querySelector('.nut-3'),
  document.querySelector('.nut-4'),
  document.querySelector('.nut-5'),
  document.querySelector('.nut-6'),
  document.querySelector('.nut-7'),
  document.querySelector('.nut-8')
];
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

function randomNuts() {
  console.log('place nut randomly');
  for (i = 0; i < nuts.length; i++) {
    let randomX = Math.floor(Math.random() * viewportWidth);
    let randomY = Math.floor(Math.random() * viewportHeight);
    nuts[i].style.left = `${randomX}px`;
    nuts[i].style.top = `${randomY}px`;
  };
};

randomNuts();


// DRAW SQUIRREL BELOW, MOVE CONTROLLER

let x = 0;
let y = 0;
let squirrel = document.querySelector('#squirrel');
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}

function drawGrid() {}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code === 'ArrowRight') {
        console.log('move image right')
        x = x + 15;
        squirrel.style.left = `${x}px`;
    } else if (ev.code === 'ArrowLeft') {
        console.log('move image left')
        x = x - 15;
        squirrel.style.left = `${x}px`;
    } else if (ev.code === 'ArrowUp') {
        console.log('move image up')
        y = y - 15;
        squirrel.style.top = `${y}px`;
    } else if (ev.code === 'ArrowDown') {
        console.log('move image down')
        y = y + 15;
        squirrel.style.top = `${y}px`;
    }
    // detect collisions with nuts
    nuts.forEach(nut => {
      const nutRect = nut.getBoundingClientRect();
      const squirrelRect = squirrel.getBoundingClientRect();
      if (intersectRect(nutRect, squirrelRect)) {
        console.log('collision detected');
        nut.style.opacity = 0;
      }
    });

    drawGrid(canvasWidth, canvasHeight);
}



// Helper function to check if two rectangles intersect
function intersectRect(r1, r2) {
  return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

document.addEventListener('keydown', moveController);

