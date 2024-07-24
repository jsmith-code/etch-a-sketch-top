function generateGrid(size) {
    const canvasContainer = document.querySelector('#canvas-container');
    if (canvasContainer.hasChildNodes()) {
        canvasContainer.textContent = '';
    }

    for (let row = 0; row < size; row++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-row');
        canvasContainer.appendChild(pixelRow);
        
        for (let col = 0; col < size; col++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixelRow.appendChild(pixel);
        }
    }
}

generateGrid(16);
