const newGridBtn = document.querySelector('#new-grid-btn');

newGridBtn.addEventListener('click', () => {
    while (true) {
        const input = prompt('Enter new grid size (must be between 1 - 100)');
        if (!input) {
            return;
        }

        const size = Math.round(Number(input));
        if (!isNaN(size) && size >= 1 && size <= 100) {
            generateGrid(size);
            return;
        }
    }
});

function generateGrid(size) {
    const canvasContainer = document.querySelector('#canvas-container');

    const gridExists = canvasContainer.hasChildNodes();
    if (gridExists) {
        // Remove previous grid's pixels
        canvasContainer.textContent = '';
    }

    for (let row = 0; row < size; row++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-row');
        canvasContainer.appendChild(pixelRow);
        
        for (let col = 0; col < size; col++) {
            const pixel = createPixel();
            pixelRow.appendChild(pixel);
        }
    }
}

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = '#333333';
    });

    return pixel;
}

generateGrid(16);
