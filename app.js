let answer = '';

function appendToAnswer(value) {
    answer += value;
    updateDisplay();
}

function backspace() {
    answer = answer.slice(0, -1);
    updateDisplay();
}

function clearAnswer() {
    answer = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').textContent = answer;
}

function calculate() {
    try {
        const expression = answer.replace(/X/g, '*');
        const result = eval(expression);
        answer = result.toString();
        updateDisplay();
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}
