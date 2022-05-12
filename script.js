const container = document.querySelector('#container');
let gridSide = document.querySelector("#inputValue").value;
let gridTiles = gridSide ** 2;
let tileSize = (800 / gridSide) - 2;

function createGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let tile = document.createElement('div');
        tile.classList.add('test');
        tile.setAttribute('style', `width: ${tileSize}px`);
        container.appendChild(tile);
    }
}

createGrid(gridTiles);

// const inputBtn = document.getElementById("inputValue");
// const val = document.querySelector('#inputValue').value;

// inputBtn.addEventListener('input', );


let allTiles = document.querySelectorAll('.test');

allTiles.forEach((tile) => { 
    tile.addEventListener('mouseover', () => {
        tile.classList.add("painted");
    });
});



function clearBoard() {
    for (tile of allTiles) {
        tile.classList.remove("painted");
    }
}

const clearButton = document.getElementById("clearBtn");
clearButton.onclick = clearBoard;
// add color options to paint brush

