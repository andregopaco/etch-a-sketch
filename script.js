const container = document.querySelector('#container');
let gridSide = 16;
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

function paintGrid() {
    let allTiles = document.querySelectorAll('.test');

    allTiles.forEach((tile) => { 
        tile.addEventListener('mouseover', () => {
            tile.classList.add("painted");
        });
    });
}

paintGrid();

function clearBoard() {
    for (tile of allTiles) {
        tile.classList.remove("painted");
    }
}

const clearButton = document.getElementById("clearBtn");
clearButton.onclick = clearBoard;

function clearContainer () {
    container.innerHTML = "";
}

function changeSize() {
    let newSize = prompt("To change the grid size, type a number between 10 and 100.");
    if (newSize <= 100 && newSize >= 10) {
        clearContainer();
        gridSize = newSize;
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


// const inputBtn = document.getElementById("inputValue");
// const val = document.querySelector('#inputValue').value;

// inputBtn.addEventListener('input', );

// NOT WORKING - COLORING FUNCTION:

// const tileColor = document.querySelector('.painted');
// const colorPicker = document.getElementById('cor');
// colorPicker.addEventListener('click', function (e) {
//     tileColor = document.getElementById('cor').value;
// })

// *BUGGY* - tileColor.style.backgroundColor = colorPicker;