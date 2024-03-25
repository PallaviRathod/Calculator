function addToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}


function calculate() {
    const resultField = document.getElementById('result');
    let expression = resultField.value;

    // Replace "÷" and "×" with "/" and "*" respectively
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/×/g, '*');

    try {
        const result = eval(expression);
        if (isNaN(result)) {
            throw new Error('Invalid expression');
        }
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}

function addPercentage() {
    let result = document.getElementById('result').value;
    result = parseFloat(result) / 100; 
    document.getElementById('result').value = result;
}


function clearAll() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

