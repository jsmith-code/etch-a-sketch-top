const newGridBtn = document.querySelector('#new-grid-btn');
const pixelGrid = document.querySelector('#pixel-grid');
const colorPicker = document.querySelector('#color-picker');

let brushColor = '#000000';

colorPicker.addEventListener('change', (e) => {
    const color = e.target.value;
    brushColor = color;
})

newGridBtn.addEventListener('click', () => {
    const size = getIntBetween(1, 100);
    if (isNaN(size)) {
        return;
    }
    generateGrid(size);
});

// Set pixel color and opacity on mouseover
pixelGrid.addEventListener('mouseover', (e) => {
    if (!e.buttons) return;
    const pixel = e.target;
    pixel.style.backgroundColor = brushColor;
});

pixelGrid.addEventListener('mousedown', (e) => {
    if (!e.buttons) return;
    console.log(e.target)
    const pixel = e.target;
    pixel.style.backgroundColor = brushColor;
});

function generateGrid(size) {
    const gridExists = pixelGrid.hasChildNodes();
    if (gridExists) {
        // Remove previous grid's pixels
        pixelGrid.textContent = '';
    }

    pixelGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    pixelGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalPixels = size ** 2;
    for (let pixel = 0; pixel < totalPixels; pixel++) {
        const pixel = createPixel();
        pixelGrid.appendChild(pixel);
    }
}

function createPixel() {
    const pixel = document.createElement('div');
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
