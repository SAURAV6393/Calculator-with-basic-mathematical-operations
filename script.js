let memory = 0;
let history = [];

// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to clear the last entry
function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to remove the last character (backspace)
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        updateHistory();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Memory Functions
function memoryAdd() {
    const display = document.getElementById('display');
    memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
    const display = document.getElementById('display');
    memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}

// Update History
function updateHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = history.join('<br>');
}