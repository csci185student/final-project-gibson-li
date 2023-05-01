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




// Get a reference to the image element
// const nut = document.querySelector('.nut');

// // Generate random margin values between 0 and 50 pixels
// const topMargin = Math.floor(Math.random() * 500);
// const leftMargin = Math.floor(Math.random() * 500);

// // Apply the margins to the image
// document.querySelectorAll('.nut').forEach(nut => {
//   nut.style.margin = `${topMargin}px ${leftMargin}px`;
// });


