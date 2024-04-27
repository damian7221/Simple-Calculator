function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('inputHistory').innerText = '';
}


function deleteLastInput() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
    document.getElementById('result').innerText = expression + ' =';
}

function sqrt() {
    let currentValue = parseFloat(document.getElementById('display').value);
    if (currentValue >= 0) {
        let result = Math.sqrt(currentValue);
        document.getElementById('display').value = result;
        document.getElementById('result').innerText = "√" + currentValue + " = " + result;
        reset = true;
    }
}

let isDarkMode = false;

function toggleDarkMode() {
    const body = document.body;
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}
