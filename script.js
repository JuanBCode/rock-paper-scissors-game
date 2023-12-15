let wins = 0, ties = 0, losses = 0;

function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'S' && computerChoice === 'P') ||
        (userChoice === 'P' && computerChoice === 'R')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    switch (result) {
        case 'win':
            wins++;
            updateResult(`You win! Computer chose ${computerChoice}.<br>Score - Wins: ${wins}, Ties: ${ties}, Losses: ${losses}`);
            break;
        case 'lose':
            losses++;
            updateResult(`You lose! Computer chose ${computerChoice}.<br>Score - Wins: ${wins}, Ties: ${ties}, Losses: ${losses}`);
            break;
        case 'tie':
            ties++;
            updateResult(`It's a tie! Computer also chose ${computerChoice}.<br>Score - Wins: ${wins}, Ties: ${ties}, Losses: ${losses}`);
            break;
    }
}
