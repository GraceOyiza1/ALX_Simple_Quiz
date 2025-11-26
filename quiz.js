// quiz.js

// --------------------------------------------------------
// Part 1: Function Declaration and Logic (checkAnswer)
// --------------------------------------------------------

function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User's Answer
    // Select the checked radio button using its name attribute 'quiz'
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    // Add a check in case the user clicks 'Submit' without selecting an answer
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer first!";
        document.getElementById('feedback').style.color = "orange";
        return; // Stop the function
    }

    // Access the value of the selected radio button
    const userAnswer = selectedRadio.value;

    // 3. Compare the User's Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        // Correct Answer: Update textContent as required
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        // Incorrect Answer: Update textContent as required
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}


// --------------------------------------------------------
// Part 2: Event Listener Setup
// --------------------------------------------------------

// Use DOMContentLoaded to ensure the HTML button is loaded before the script tries to find it.
document.addEventListener('DOMContentLoaded', function () {
    // 1. Retrieve the “Submit Answer” button by its ID
    const submitButton = document.getElementById("submit-answer");

    // 2. Add a click event listener
    // Pass the function name (checkAnswer) as the callback without calling it (no parentheses)
    submitButton.addEventListener('click', checkAnswer);
});