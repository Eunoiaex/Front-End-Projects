function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
        return;
    }

    switch (operation) {
        case 'sum':
            result = firstNumber + secondNumber;
            break;
        case 'multi':
            result = firstNumber * secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'division':
            if (secondNumber === 0) {
                document.getElementById('result').innerHTML = 'Cannot divide by zero.';
                return;
            }
            result = firstNumber / secondNumber;
            break;
        case 'modulus':
            result = firstNumber % secondNumber;
            break;
        default:
            document.getElementById('result').innerHTML = 'Invalid operation.';
            return;
    }

    document.getElementById('result').innerHTML = `Result: ${result}`;
}