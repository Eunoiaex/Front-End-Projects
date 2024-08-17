function getNumbers() {
    var numCount = document.getElementById('numCount').value;
    var numberInputs = document.getElementById('numberInputs');
    numberInputs.innerHTML = '';

    for (var i = 0; i < numCount; i++) {
        var input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Enter number ' + (i + 1);
        input.className = 'number-input';
        numberInputs.appendChild(input);
    }

    document.getElementById('inputValues').style.display = 'block';
}

function calculate() {
    var inputs = document.getElementsByClassName('number-input');
    var numbers = [];
    var sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        var number = parseFloat(inputs[i].value);
        numbers.push(number);
        sum += number;
    }

    var average = sum / numbers.length;


    document.getElementById('sum').textContent = sum.toFixed(2);
    document.getElementById('average').textContent = average.toFixed(2);
    document.getElementById('result').style.display = 'block';

    console.log(numbers);
}