import React, { useState } from 'react';
import { getCipher } from '../../firestore';
import Anime from 'react-anime';
import { caesarShift } from '../../caesarShift';

// CrackCipher is the interactive module for cracking a
// sharable cipher. If props.hash is provided, then it
// will automatically try to load the cipher pointed to
// by the provided hash.
function CrackCipher(props) {
    // the current cipher hash
    const [currentHash, setCurrentHash] = useState(props.hash || 'Input a friend\'s cipher code!');

    const [shamt, setShamt] = useState(0);                          // current shift amount
    const [plaintext, setPlaintext] = useState(null);               // plaintext of the ciphered message
    const [ciphertext, setCiphertext] = useState(null);             // current guess at the deciphered message
    const [guess, setGuess] = useState('Type your guess!');         // current guess
    const [getStatus, setGetStatus] = useState(0);              // 0 = no get in progress, 1 = get in progress, 2 = failed

    // if provided a hash, then try to get the described cipher
    const loadCurrentHash = async () => {
        if (getStatus === 1)
            return;
        setGetStatus(1);
        let cipherData = await getCipher(currentHash);
        if (!cipherData)
            setGetStatus(2);
        else {
            setGetStatus(0);
            setPlaintext(cipherData.plaintext);
            setCiphertext(caesarShift(cipherData.plaintext.toUpperCase(), cipherData.shamt));
        }
    }

    // if provided a hash, then try to get it by hash.
    if (props.hash && !getStatus && !ciphertext)
        loadCurrentHash();

    if (plaintext === null) {
        return (
            <div className='container'>
                <input className='input' type='text' name='hash' value={currentHash} onChange={e => setCurrentHash(e.target.value)} />
                <button className='button' onClick={loadCurrentHash}>
                    {
                    getStatus === 1 ?
                    "Loading cipher..." :
                    "Load the cipher!"
                    }
                </button>

                {getStatus === 2 &&
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
                {
                !ciphertext ?
                "Input your guess for the shift amount..." :
                `If we shift it ${shamt} letters backwards, it becomes ${caesarShift(ciphertext.toUpperCase(), -1*shamt)}.`
                }
            </p>
            <input className='input' type='range' min='0' max='25' step='1' value={shamt} onChange={e => setShamt(Number(e.target.value))} />
            <label>{shamt}</label>
            <input className='input' type='text' value={guess} onChange={e => setGuess(e.target.value)} />
        </div>
    );
}

export default CrackCipher;