function calculateSum() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber;
        document.getElementById('result').innerHTML = `${firstNumber} + ${secondNumber} = ${sum}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
    }
}