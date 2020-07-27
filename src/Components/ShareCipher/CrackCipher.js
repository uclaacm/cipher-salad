import React, { useState } from 'react';
import { getCipher } from '../../firestore';
import Anime from 'react-anime';
import { caesarShift } from '../../caesarShift';

// CrackCipher is the interactive module for cracking a
// sharable cipher. If props.hash is provided, then it
// will automatically try to load the cipher pointed to
// by the provided hash.
function CrackCipher(props) {
    const [currentHash, setCurrentHash] = useState(props.hash ? props.hash : 'Input a friend\'s cipher code!');
    const [shamt, setShamt] = useState(0);
    const [plaintext, setPlaintext] = useState(null);
    const [ciphertext, setCiphertext] = useState(null);
    const [guess, setGuess] = useState('Type your guess!');
    const [getFailed, setGetFailed] = useState(false);

    if (plaintext === null) {
        return (
            <div className='container'>
                <input className='input' type='text' name='hash' value={currentHash} onChange={e => setCurrentHash(e.target.value)} />
                <button className='button' onClick={
                    async () => {
                        let cipherData = await getCipher(currentHash);
                        console.log(cipherData);
                        if (!cipherData)
                            setGetFailed(true);
                        else {
                            setPlaintext(cipherData.plaintext);
                            setCiphertext(caesarShift(cipherData.plaintext.toUpperCase(), cipherData.shamt));
                        }
                    }
                }>Load the cipher!</button>

                {getFailed &&
                <Anime opacity={[0,1]}>
                    <p>Failed to get the cipher... Did you type it in correctly?</p>
                </Anime>
                }
            </div>
        );
    }
    
    return (
        <div className='container'>
            <h1>Let's get cracking!</h1>
            <p>Your ciphertext is {ciphertext}</p>
            <p>
                { !ciphertext ?
                  "Input your guess for the shift amount..." :
                  `If we shift it ${shamt} letters over, it becomes ${caesarShift(ciphertext.toUpperCase(), shamt)}.`
                }
            </p>
            <input className='input' type='range' min='0' max='25' step='1' value={shamt} onChange={e => setShamt(e.target.value)} />
            <label>{shamt}</label>
            <input className='input' type='text' value={guess} onChange={e => setGuess(e.target.value)} />
        </div>
    );
}

export default CrackCipher;