// quiz.js

// --------------------------------------------------------
// Part 1: Function Declaration and Logic (checkAnswer)
// --------------------------------------------------------

function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User's Answer
    // Use querySelector to find the radio button that is currently checked 
    // based on its name attribute 'quiz'.
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was actually selected
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer first!";
        return; // Stop the function if no answer is selected
    }

    // Access the 'value' property of the selected radio button
    const userAnswer = selectedRadio.value;

    // 3. Compare the User's Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        // Correct Answer
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; // Optional: Add color for better feedback
    } else {
        // Incorrect Answer
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; // Optional: Add color for better feedback
    }
}


// --------------------------------------------------------
// Part 2: Event Listener Setup
// --------------------------------------------------------

// Use DOMContentLoaded to ensure the button exists before we try to select it
document.addEventListener('DOMContentLoaded', function () {
    // 1. Use document.getElementById to select the "Submit Answer" button
    const submitButton = document.getElementById("submit-answer");

    // 2. Add a click event listener
    // NOTE: We pass the function name (checkAnswer) without parentheses ()
    submitButton.addEventListener('click', checkAnswer);
});