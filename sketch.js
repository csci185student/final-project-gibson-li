// let x = 0;
// let y = 0;
// let squirrel = document.querySelector('#squirrel');
// const canvasWidth = window.innerWidth;
// const canvasHeight = window.innerHeight; 

// function setup() {
//     createCanvas(canvasWidth, canvasHeight);
//     drawGrid(canvasWidth, canvasHeight);
// }

// function drawGrid() {}

// function moveController(ev) {
//     console.log(ev.code);
//     if (ev.code === 'ArrowRight') {
//         console.log('move image right')
//         x = x + 15;
//         squirrel.style.left = `${x}px`;
//     } else if (ev.code === 'ArrowLeft') {
//         console.log('move image left')
//         x = x - 15;
//         squirrel.style.left = `${x}px`;
//     } else if (ev.code === 'ArrowUp') {
//         console.log('move image up')
//         y = y - 15;
//         squirrel.style.top = `${y}px`;
//     } else if (ev.code === 'ArrowDown') {
//         console.log('move image down')
//         y = y + 15;
//         squirrel.style.top = `${y}px`;
//     }

//     clear();
//     drawGrid(canvasWidth, canvasHeight);
// }

// // event listener on keydown
// document.addEventListener('keydown', moveController);
