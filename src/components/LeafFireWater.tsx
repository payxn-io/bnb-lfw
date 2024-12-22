type Choice = 'Leaf' | 'Fire' | 'Water';
type Result = 'Win' | 'Lose' | 'Tie';

const choices: Choice[] = ['Leaf', 'Fire', 'Water'];

const getComputerChoice = (): Choice => choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (playerChoice: Choice, computerChoice: Choice): Result => {
    if (playerChoice === computerChoice) return 'Tie';
    if (
        (playerChoice === 'Fire' && computerChoice === 'Leaf') ||
        (playerChoice === 'Water' && computerChoice === 'Fire') ||
        (playerChoice === 'Leaf' && computerChoice === 'Water')
    ) {
        return 'Win';
    }
    return 'Lose';
};