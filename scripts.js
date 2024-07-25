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
    
    return pixel;
}

generateGrid(16);
