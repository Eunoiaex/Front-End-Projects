// This is the outer function. It takes an argument `outerVariable`.
function outerFunction(outerVariable) {

    // A constant defined within the outer function.
    const outerConstant = "I'm a constant in the outer function";

    // This is the inner function, which forms a closure.
    // It takes an argument `innerVariable`.
    function innerFunction(innerVariable) {

        // The inner function can access the outer function's variable.
        console.log(`Outer Variable: ${outerVariable}`);

        // It can also access the constant defined in the outer function.
        console.log(`Outer Constant: ${outerConstant}`);

        // The inner function also has access to its own local variables.
        console.log(`Inner Variable: ${innerVariable}`);
    }

    // The outer function returns the inner function.
    // The returned function is now a closure.
    return innerFunction;
}

// We call the outer function, passing an argument.
// It returns the inner function, which is now a closure.
const myClosure = outerFunction("I'm from the outer function");

// We can now call the closure.
// When `myClosure` is called, it still has access to the outer function's scope.
myClosure("I'm from the inner function");