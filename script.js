const container = document.querySelector('#container');

// grid default values:
let gridSide = 16;
let gridTiles = gridSide ** 2;
let tileSize = (800 / gridSide) - 2;

// function to create a grid based on the number of divs on each side
function createGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let tile = document.createElement('div');
        tile.classList.add('test');
        tile.setAttribute('style', `width: ${tileSize}px`);
        container.appendChild(tile);
    }
}

createGrid(gridTiles);

function paintGrid() {
    let allTiles = document.querySelectorAll('.test');

    allTiles.forEach((tile) => { 
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = "black";
        });
    });
}

paintGrid();

function clearBoard() {
    let allTiles = document.querySelectorAll('.test');
    for (tile of allTiles) {
        tile.style.backgroundColor = "white";
    }
}

const clearButton = document.getElementById("clearBtn");
clearButton.onclick = clearBoard;

// the function below is used to erase container from all divs before creating more of them.
function clearContainer () {
    container.innerHTML = "";
}

function changeSize() {
    let newSize = prompt("To change the grid size, type a number between 10 and 100.");
    if (newSize <= 100 && newSize >= 10) {
        clearContainer();
        gridSide = newSize;
        gridTiles = newSize ** 2;
        tileSize = (800 / newSize) - 2;
        createGrid(gridTiles);
        paintGrid();
    } else {
        alert("Invalid entry.");
    }  
}

const sizeButton = document.getElementById("sizeBtn");
sizeButton.onclick = changeSize;

// imported function to get a random RGB color:
function generateRandomColor () {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

function changeColors() {
    clearBoard();
    allTiles = document.querySelectorAll('.test');
    allTiles.forEach((tile) => { 
        let someColor = generateRandomColor();
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = someColor;
        });
    });
}

const colorButton = document.getElementById('colorBtn');
colorButton.onclick  = changeColors;