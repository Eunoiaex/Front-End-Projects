let lastResult = null;

function calculate() {
    let firstNumber;
    if (lastResult !== null) {
        firstNumber = lastResult;
    } else {
        firstNumber = parseFloat(document.getElementById('firstNumber').value);
    }

    const operation = document.getElementById('operation').value;
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
        return;
    }

    switch (operation) {
        case 'sum':
            lastResult = firstNumber + secondNumber;
            break;
        case 'multi':
            lastResult = firstNumber * secondNumber;
            break;
        case 'subtract':
            lastResult = firstNumber - secondNumber;
            break;
        case 'division':
            if (secondNumber === 0) {
                document.getElementById('result').innerHTML = 'Cannot divide by zero.';
                return;
            }
            lastResult = firstNumber / secondNumber;
            break;
        case 'modulus':
            lastResult = firstNumber % secondNumber;
            break;
        default:
            document.getElementById('result').innerHTML = 'Invalid operation.';
            return;
    }

    document.getElementById('result').innerHTML = `Result: ${lastResult}`;

    setTimeout(() => {
        if (confirm("Do you want to perform another operation using the last result?")) {
            document.getElementById('firstNumber').value = lastResult;
            document.getElementById('secondNumber').value = '';
        } else {
            lastResult = null;
            document.getElementById('firstNumber').value = '';
            document.getElementById('secondNumber').value = '';
        }
    }, 100);
}