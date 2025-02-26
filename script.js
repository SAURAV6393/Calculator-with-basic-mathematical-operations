let memory = 0;
let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (isOperator(display.value.slice(-1)) && isOperator(value)) {
        return;
    }
    display.value += value;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function backspace() {
    clearEntry();
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value.trim();

    if (expression === '' || isOperator(expression.slice(-1))) {
        display.value = 'Error';
        triggerShakeAnimation(display);
        return;
    }

    try {
        const result = new Function(`return ${expression}`)();
        const formattedResult = parseFloat(result.toFixed(10));

        history.push(`${expression} = ${formattedResult}`);
        updateHistory();
        display.value = formattedResult;
    } catch {
        display.value = 'Error';
        triggerShakeAnimation(display);
    }
}

function triggerShakeAnimation(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}

function updateHistory() {
    document.getElementById('history').innerHTML = history.map(entry => `<p>${entry}</p>`).join('');
}

function memoryAdd() { memory += parseFloat(document.getElementById('display').value) || 0; }
function memorySubtract() { memory -= parseFloat(document.getElementById('display').value) || 0; }
function memoryClear() { memory = 0; }
