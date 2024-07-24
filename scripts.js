function generateGrid() {
    const canvasContainer = document.querySelector('#canvas-container');

    for (let row = 0; row < 16; row++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-row');
        canvasContainer.appendChild(pixelRow);
        
        for (let col = 0; col < 16; col++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixelRow.appendChild(pixel);
        }
    }
}

generateGrid();
