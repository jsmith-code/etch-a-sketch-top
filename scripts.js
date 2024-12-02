const newGridBtn = document.querySelector('#new-grid-btn');

newGridBtn.addEventListener('click', () => {
    const size = getIntBetween(1, 100);
    if (isNaN(size)) {
        return;
    }
    generateGrid(size);
});

function generateGrid(size) {
    const pixelGrid = document.querySelector('#pixel-grid');

    const gridExists = pixelGrid.hasChildNodes();
    if (gridExists) {
        // Remove previous grid's pixels
        pixelGrid.textContent = '';
    }

    for (let row = 0; row < size; row++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-row');
        pixelGrid.appendChild(pixelRow);
        
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
    
    pixel.addEventListener('mouseover', () => {       
        if (!pixel.classList.contains('colored'))  {
            pixel.classList.add('colored');
            
            const red = Math.floor(Math.random()*255);
            const green = Math.floor(Math.random()*255);
            const blue = Math.floor(Math.random()*255);
            pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        
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
