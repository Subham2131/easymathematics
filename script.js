let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function performOperation(operation) {
    display.value += ` ${operation} `;
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/\s+/g, ''));
    } catch (error) {
        alert('Invalid Calculation');
    }
}

function calculateTrig(functionName) {
    let value = parseFloat(display.value);
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (functionName) {
        case 'sin':
            display.value = Math.sin((value * Math.PI) / 180).toFixed(6);
            break;
        case 'cos':
            display.value = Math.cos((value * Math.PI) / 180).toFixed(6);
            break;
        case 'tan':
            display.value = Math.tan((value * Math.PI) / 180).toFixed(6);
            break;
        default:
            alert('Unknown function');
    }
}
