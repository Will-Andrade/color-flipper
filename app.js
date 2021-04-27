const bodyMain = document.querySelector('main');
const flipColorButton = document.querySelector('button');

const generateNewColor = () => 
    Math.floor(Math.random() * 16777215).toString(16);

const swapMainBodyColor = () => {
    const randomColor = `#${generateNewColor()}`;

    bodyMain.style.backgroundColor = randomColor;
    document.querySelector('h2 > span').textContent = `${randomColor}`
}

flipColorButton.addEventListener('click', swapMainBodyColor);
