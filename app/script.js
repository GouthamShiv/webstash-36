const container = document.getElementById('container');
const colors = ['#E74C3C', '#8E44AD', '#3498DB', '#E67E22', '#2ECC71'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1D1D1D';
    element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}