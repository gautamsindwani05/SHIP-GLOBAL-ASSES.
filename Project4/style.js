document.addEventListener('DOMContentLoaded', function () {
    let randomNumber = generateRandomNumber(1, 100);
    let attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const submitBtn = document.getElementById('submitBtn');
    const restartBtn = document.getElementById('restartBtn');

    submitBtn.addEventListener('click', function () {
        const userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            feedback.style.color = 'red';
            return;
        }

        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;

        if (userGuess === randomNumber) {
            feedback.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
            feedback.style.color = 'green';
            disableInput();
        } else if (userGuess < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'orange';
        } else {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'orange';
        }
    });

    restartBtn.addEventListener('click', function () {
        randomNumber = generateRandomNumber(1, 100);
        attempts = 0;
        guessInput.value = '';
        feedback.textContent = '';
        attemptsDisplay.textContent = 'Attempts: 0';
        enableInput();
    });

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function disableInput() {
        guessInput.disabled = true;
        submitBtn.disabled = true;
    }

    function enableInput() {
        guessInput.disabled = false;
        submitBtn.disabled = false;
    }
});