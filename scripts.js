const newGridBtn = document.querySelector('#new-grid-btn');

newGridBtn.addEventListener('click', () => {
    const size = getIntBetween(1, 100);
    if (isNaN(size)) {
        return;
    }
    generateGrid(size);
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
    pixel.style.opacity = 0;
    pixel.style.backgroundColor = 'black';

    pixel.addEventListener('mouseover', () => {        
    if (pixel.style.opacity < 1 ) {
        let currentOpacity = parseFloat(pixel.style.opacity);
        pixel.style.opacity = currentOpacity + 0.1;
    }
    });

    return pixel;
}

function getIntBetween(min, max) {
    let input;
    do {
        input = prompt(`Enter an integer from ${min} - ${max}.`);
        if (!input) {
            return NaN;
        }
        input = Number(input);
    } while (isNaN(input) || input < min || input > max);
    return Math.round(input);
}

generateGrid(16);
