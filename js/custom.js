'use strict';


let randomNumber = Math.floor(Math.random() * 100) + 1,
    numberField = document.querySelector('.number-field'),
    submitBtn = document.querySelector('.submit-btn'),
    myNumbers = document.querySelector('.my-numbers'),
    variate = document.querySelector('.variate'),
    resetButton,
    guessCount = 1;
    console.log(randomNumber);

    submitBtn.addEventListener('click', () => {
        let userGuess = Number(numberField.value)
        myNumbers.textContent += userGuess + ', '

        if (userGuess === randomNumber) {
            variate.textContent = 'Congrats, you win! The number is ' + randomNumber
            variate.style.backgroundColor = 'green'
            variate.style.color = 'white'
            restart();
        } else if (guessCount === 10) {
            variate.textContent = '!!!Game Over!!! The number is ' + randomNumber
            variate.style.backgroundColor = 'red'
            variate.style.color = 'white'
            restart();
        } else if (userGuess < randomNumber) {
            variate.textContent = 'Your number LESS then we need'
            variate.style.backgroundColor = 'yellow'
            variate.style.color = 'black'
        } else if (userGuess > randomNumber) {
            variate.textContent = 'Your number MORE then we need'
            variate.style.backgroundColor = 'blue'
            variate.style.color = 'white'
        }
        guessCount++
        numberField.value = '';
        numberField.focus();
        console.log(randomNumber);
    });

function restart() {
    numberField.disabled = true
    submitBtn.disabled = true
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.marginLeft = '50%'
    resetButton.style.marginTop = '10%'
    resetButton.style.transform = 'translateX(-50%)'
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        numberField.disabled = false
        submitBtn.disabled = false
        guessCount = 1
        randomNumber = Math.floor(Math.random() * 100) + 1
        myNumbers.textContent = 'Previous guesses: '
        variate.textContent = ''
        variate.style.backgroundColor = 'white'
        variate.style.color = 'white'
        numberField.value = ''
        numberField.focus()
        resetButton.parentNode.removeChild(resetButton);
    })
}

