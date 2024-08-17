document.addEventListener('DOMContentLoaded', function() {
    const outerVariableInput = document.getElementById('outerVariable');
    const innerVariableInput = document.getElementById('innerVariable');
    const createClosureButton = document.getElementById('createClosure');
    const callClosureButton = document.getElementById('callClosure');
    const outputDiv = document.getElementById('output');

    let myClosure;

    function appendOutput(message) {
        outputDiv.innerHTML += message + '<br>';
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    outputDiv.innerHTML = '';

    function outerFunction(outerVariable) {
        const outerConstant = "I'm a constant in the outer function";

        function innerFunction(innerVariable) {
            const messages = [
                `Outer Variable: ${outerVariable}`,
                `Outer Constant: ${outerConstant}`,
                `Inner Variable: ${innerVariable}`
            ];

            messages.forEach(msg => console.log(msg));
            messages.forEach(msg => appendOutput(msg));
        }

        return innerFunction;
    }

    createClosureButton.addEventListener('click', function() {
        outputDiv.innerHTML = '';

        const outerVariableValue = outerVariableInput.value.trim();

        if (outerVariableValue === '') {
            appendOutput('Please enter a value for the Outer Variable.');
            return;
        }

        myClosure = outerFunction(outerVariableValue);

        appendOutput('Closure created! Now enter an Inner Variable and click "Call Closure".');
    });

    callClosureButton.addEventListener('click', function() {
        if (!myClosure) {
            appendOutput('Please create the closure first by clicking "Create Closure".');
            return;
        }

        const innerVariableValue = innerVariableInput.value.trim();

        if (innerVariableValue === '') {
            appendOutput('Please enter a value for the Inner Variable.');
            return;
        }

        myClosure(innerVariableValue);
    });
});