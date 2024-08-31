let randomNumber = Math.floor(Math.random() * 100) + 1;
let chancesLeft = 5;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const chances = document.getElementById('chances');
    
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100";
        return;
    }

    chancesLeft--;
    if (guess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the right number in ${5 - chancesLeft} attempts.`;
        resetGame();
    } else if (guess > randomNumber) {
        feedback.textContent = "Your number is high";
    } else {
        feedback.textContent = "Your number is low";
    }

    if (chancesLeft <= 0 && guess !== randomNumber) {
        feedback.textContent = `Sorry, you've run out of chances. The number was ${randomNumber}.`;
        resetGame();
    } else {
        chances.textContent = `You have ${chancesLeft} Chances`;
    }
}

function resetGame() {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        chancesLeft = 5;
        document.getElementById('guessInput').value = '';
        document.getElementById('feedback').textContent = 'Your number is...';
        document.getElementById('chances').textContent = 'You have 5 Chances';
    }, 3000);
}
