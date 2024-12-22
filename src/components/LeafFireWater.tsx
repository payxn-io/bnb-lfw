import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import { inAppWallet } from "thirdweb/wallets";


type Choice = 'Leaf' | 'Fire' | 'Water';
type Result = 'Win' | 'Lose' | 'Tie';

const choices: Choice[] = ['Leaf', 'Fire', 'Water'];



interface GameResult {
    playerChoice: Choice;
    computerChoice: Choice;
    gameResult: Result;
}

export default function LeafFireWater() {
    

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
                height: '400px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative'
            }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>LFW Game Home</h1>
                <ConnectButton 
                    client={client} 
                    wallets={[
                        inAppWallet({
                            auth: {
                                options:[
                                    "email"
                                ]
                            }
                        })
                    ]}
                
                />

                

            </div>
           

        </div>
    
    
    )
}