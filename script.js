// the user shall input the amount of piles he/she wants on the grid (from 16x16 until 100x100)
let gridSide = 3;

// With this input value, calculate width/input to figure out the width of each tile of the grid
let tileWidth = (800 / gridSide);

// update the value of the width of each div


// capture the main container in javascript
const container = document.querySelector('#container');

// create input ** 2 divs and append them in the main container
let gridTiles = gridSide ** 2;

for (let i = 0; i < gridTiles; i++) {
    let tile = document.createElement('div');
    tile.classList.add('test');
    // NOT WORKING document.getElementsByClassName('.test') = tileWidth;
    container.appendChild(tile);
}

// create a function that paint a div by clicking on it OR by hovering over it. Once its hovered, the function effect is still valid.
// the function will either: 1. change bg-color of the div; 2. add a class to the div, and this class shall have a different color

// create a clear board function that resets all bg-color or remove the new class of all divs

// add color options to paint brush