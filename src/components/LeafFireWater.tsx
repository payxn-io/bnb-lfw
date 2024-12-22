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

interface GameResult {
    playerChoice: Choice;
    computerChoice: Choice;
    gameResult: Result;
}

export default function LeafFireWater() {
    const [result, setResult] = useState<GameResult | null>(null);
    const [showPrize, setShowPrize] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [prizeClaimed, setPrizeClaimed] = useState<boolean>(false);

    const resetGame = () => {
        setResult(null);
        setShowPrize(false);
        setPrizeClaimed(false);
    };

    const claimPrize = () => {
        setShowModal(true);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f0f0f0',
            color: '#333',
        }}>

        </div>
    
    
    )
}