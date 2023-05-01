let x = 200;
let y = 200;
let width = 150;
let fillColor = hotpink;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    // noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // right arrow moves circle right
    if (ev.code === 'ArrowRight' && !paused) {
        console.log('move tie fighter right')
        x = x + 10;
    // left arrow moves circle left
    } else if (ev.code === 'ArrowLeft') {
            console.log('move tie fighter left')
            x = x - 10;
    // up arrow moves circle up
    } else if (ev.code === 'ArrowUp') {
        console.log('move tie fighter up')
        y = y - 10;
    // down arrow moves circle down
    } else if (ev.code === 'ArrowDown') {
        console.log('move tie fighter down')
        y = y + 10;
    // resize circle
    } else if (ev.code === 'Space') {
        console.log('make tie fighter bigger')
        width = width + 10;
    } else if (ev.code === 'Enter') {
        console.log('make tie figther smaller')
        width = width - 10;
    // change color of circle
    } else if (ev.code === 'KeyR') {
        console.log('make tie fighter red');
        fillColor = 'red';
    } else if (ev.code === 'KeyB') {
        console.log('make tie fighter blue');
        fillColor = 'cyan';
    }
    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);

    
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
