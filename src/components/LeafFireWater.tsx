import { useState } from "react";
import { ConnectButton, TransactionButton, useActiveAccount, useActiveWallet, useDisconnect, useReadContract } from "thirdweb/react";
import { client } from "../client";
import { inAppWallet } from "thirdweb/wallets";
import { shortenAddress } from "thirdweb/utils";
import { getContract } from "thirdweb";
import { bscTestnet } from "thirdweb/chains";
import { claimTo, getBalance } from "thirdweb/extensions/erc20";
import payxnLogo from "../assets/payxn-logo-BNB.png";
import monke from "../assets/monke.png";
import giraffe from "../assets/giraffe.png";
import { walletConnect } from "thirdweb/wallets";


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
    const account = useActiveAccount();
    const {disconnect} = useDisconnect();
    const wallet = useActiveWallet();

    const contract = getContract({
        client: client,
        chain: bscTestnet,
        address: "0x044E9c04c0Bb6Dc82f86da4ae0B1269Dbd3c804a"
    });


    const [result, setResult] = useState<GameResult | null>(null);
    const [showPrize, setShowPrize] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [prizeClaimed, setPrizeClaimed] = useState<boolean>(false);

    const handleChoice = (playerChoice: Choice) => {
        const computerChoice = getComputerChoice();
        const gameResult = determineWinner(playerChoice, computerChoice);
        setResult({ playerChoice, computerChoice, gameResult });
        setShowPrize(gameResult === 'Win');
    };

    const resetGame = () => {
        setResult(null);
        setShowPrize(false);
        setPrizeClaimed(false);
    };

    const claimPrize = () => {
        setShowModal(true);
    };

    const { data: tokenbalance } = useReadContract(
        getBalance,
        {
            contract: contract,
            address: account?.address!
        }
    )

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
            <div style={{
                padding: '2rem',
                margin: '0 0.5rem',
                width: '400px',
                maxWidth: '98%',
                height: '800px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative'
            }}>
                {/* Add the logo */}
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <img 
                        src={payxnLogo} 
                        alt="Payxn Logo" 
                        width={150} 
                        height={50} 
                        style={{ display: "block", marginTop: "40px" }} // Optional for centering the image
                    />
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>LFW Game Home</h1>
                {!account ? (
                <ConnectButton 
                    client={client}
                    accountAbstraction={{
                        chain: bscTestnet,
                        sponsorGas: true
                    }} 
                    wallets={[
                        walletConnect(),
                        inAppWallet({
                            auth: {
                                options:[
                                    "email"
                                ]
                            }
                        })
                    ]}
                
                />
            ) : (
                <>
        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                height: 'auto',
                                width: '100%',
                                gap: '0.5rem',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: '1px solid #f0f0f0',
                                padding: '0.5rem',
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontSize: '0.5rem',
                                        marginBottom: '-10px',
                                        marginTop: '-10px'
                                    }}
                                >{shortenAddress(account.address)}</p> 
                                <p style={{
                                        fontSize: '0.75rem',
                                        marginBottom: '-10px'
                                    }}
                                >Balance: {tokenbalance?.displayValue}</p>
                            </div>
                            <button
                                onClick={() => disconnect(wallet!)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem'
                                }}
                            >Logout</button>
                        </div>        
                {!result ? (
                    <div>
                        
                    <h3>Pick your wager:</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: "2rem" }}>
                        {choices.map((choice) => (
                            <button
                                key={choice}
                                onClick={() => handleChoice(choice)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '3rem'
                                }}
                            >
                                {
                                    choice === 'Leaf' ? '🍃' :
                                    choice === 'Fire' ? '️‍🔥' :
                                    '🌊'
                                }
                            </button>
                        ))}

                        
                    </div>
                    <h3>New Games:</h3>
                    <a href="https://t.me/lfwbnb_bot/payxn_bsc_idle" target="_self" style={{ textDecoration: "none" }}>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <img 
                                src={monke} 
                                alt="image" 
                                width={330} 
                                height={120} 
                                style={{ display: "block", marginTop: "0px" }} // Optional for centering the image
                            />
                        </div>
                    </a>

                    < br />

                    <a href="https://blarearcade.com/giraffe" target="_self" style={{ textDecoration: "none" }}>
                        <div style={{ textAlign: "center", marginTop: "0px" }}>
                            <img 
                                src={giraffe} 
                                alt="image" 
                                width={330} 
                                height={120} 
                                style={{ display: "block", marginTop: "0px" }} // Optional for centering the image
                            />
                        </div>
                    </a>
                    

                </div>            
                ) : (
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        
                        
                        
                        <p style={{ fontSize: '1.5rem', marginBottom: '-10px' }}>
                                    You chose: {result.playerChoice}
                        </p>
                        <p style={{ fontSize: '1.5rem', marginBottom: '-20px' }}>
                                    Computer chose: {result.computerChoice}
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>
                                    Result: {result.gameResult}
                        </p>
                        <div style={{
                                    position: 'relative',
                                    bottom: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    alignItems: 'center'
                                }}>
                                    <button
                                        onClick={resetGame}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: '#28a745',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Try Again
                                    </button>
                                    {showPrize && !prizeClaimed && (
                                        <button
                                            onClick={claimPrize}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                background: '#ffc107',
                                                color: 'black',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >Claim Prize</button>
                                    )}
                                    {showModal && (
                                        <div style={{
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{
                                                background: 'white',
                                                padding: '2rem',
                                                borderRadius: '8px',
                                                maxWidth: '300px',
                                                textAlign: 'center'
                                            }}>
                                                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Claim 10 Tokens!</h2>
                                                <p style={{ marginBottom: '1rem' }}>You won and can claim 10 tokens to your wallet.</p>

                                                <TransactionButton
                                                    transaction={() => claimTo({
                                                        contract: contract,
                                                        to: account.address,
                                                        quantity: "10"
                                                    })}
                                                    onTransactionConfirmed={() => {
                                                        alert('Prize claimed!')
                                                        setShowModal(false)
                                                        setPrizeClaimed(true)
                                                    }}
                                                    style={{
                                                        padding: '0.5rem 1rem',
                                                        background: '#28a745',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer'
                                                    }}
                                                >Claim Prize</TransactionButton>
                                            
                                                
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}

                
            </div>
        </div>
    )
}