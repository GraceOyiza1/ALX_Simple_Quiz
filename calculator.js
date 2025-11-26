// calculator.js

// ------------------------------------------
// Part 1: Arithmetic Functions
// ------------------------------------------

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Prevent division by zero
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}


// ------------------------------------------
// Part 2: Main Calculation Handler
// ------------------------------------------

function calculate(operationFunction) {
    // 1. Retrieve raw values from the input fields
    const value1 = document.getElementById('number1').value;
    const value2 = document.getElementById('number2').value;

    // 2. Input Validation and Conversion
    // parseFloat converts the string input to a number.
    // The || 0 ensures that if the input is empty or invalid (NaN), it defaults to 0.
    const number1 = parseFloat(value1) || 0;
    const number2 = parseFloat(value2) || 0;

    // 3. Perform the calculation using the function passed as an argument
    const result = operationFunction(number1, number2);

    // 4. Display the result
    document.getElementById('calculation-result').textContent = result;
}


// ------------------------------------------
// Part 3: Attach Event Listeners
// ------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

    // Attach listeners for each button, calling the generic 'calculate' 
    // function and passing the specific arithmetic function to use.

    document.getElementById('add').addEventListener('click', function () {
        calculate(add);
    });

    document.getElementById('subtract').addEventListener('click', function () {
        calculate(subtract);
    });

    document.getElementById('multiply').addEventListener('click', function () {
        calculate(multiply);
    });

    document.getElementById('divide').addEventListener('click', function () {
        calculate(divide);
    });
});