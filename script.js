const container = document.querySelector('#container');

// user shall input the amount of piles he/she wants on the grid (from 16x16 until 100x100)
let gridSide = 3;
let gridTiles = gridSide ** 2;

// creation of divs based on user input
for (let i = 0; i < gridTiles; i++) {
    let tile = document.createElement('div');
    tile.classList.add('test');
    container.appendChild(tile);
}

// let allTiles = document.getElementsByClassName('test');
let allTiles = document.querySelectorAll('.test');
for (tile of allTiles) {
    tile.addEventListener('mouseover', () => {
        tile.classList.add("painted");
    });
}

// update the value of the width of each div
let tileWidth = (800 / gridSide) + " px";


// create a function that paint a div by clicking on it OR by hovering over it. Once its hovered, the function effect is still valid.
// the function will either: 1. change bg-color of the div; 2. add a class to the div, and this class shall have a different color


// create a clear board function that resets all bg-color or remove the new class of all divs
function clearBoard() {
    for (tile of allTiles) {
        tile.classList.remove("painted");
    }
}

// add color options to paint brush

