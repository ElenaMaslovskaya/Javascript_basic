const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const val1 = Number(num1.value);
const val2 = Number(num2.value);

const addBtn = document.getElementById('addition');
const subBtn = document.getElementById('subtraction');
const mltBtn = document.getElementById('multiplication');
const dvnBtn = document.getElementById('division');

const resultElement = document.getElementById('result');

addBtn.onclick = function () {
    const addition = val1 + val2;
    resultElement.textContent = addition;
};

subBtn.onclick = function () {
    const subtraction = val1 - val2;
    resultElement.textContent = subtraction;
};

mltBtn.onclick = function () {
    const multiplication = val1 * val2;
    resultElement.textContent = multiplication;
};

dvnBtn.onclick = function () {
    const division = val1 / val2;
    resultElement.textContent = division;
};

