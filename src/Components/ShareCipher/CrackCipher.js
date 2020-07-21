import React, { useState } from 'react';
import Anime from 'react-anime';

// CrackCipher is the interactive module for cracking a
// sharable cipher. If props.hash is provided, then it
// will be automatically input to the "load the cipher"
// field on draw.
function CrackCipher(props) {
    const [currentHash, setCurrentHash] = useState(props.hash ? props.hash : 'Input a friend\'s cipher code!');
    const [shamt, setShamt] = useState(0);
    const [plaintext, setPlaintext] = useState(null);
    const [guess, setGuess] = useState('Type your guess!');
    const [getFailed, setGetFailed] = useState(false);

    const getCipher = () => {
        fetch(`http://localhost:8081/cipher/${currentHash}`, {
            method: 'GET',
            mode: 'cors',
        })
        .then(r => r.body)
        .then((body) => {
            setShamt(body.shamt);
            setPlaintext(body.plaintext);
        })
        .catch((err) => {
            setGetFailed(true);
            console.log(err);
        })
    }

    if (plaintext === null) {
        return (
            <div className='container'>
                <input className='input' type='text' name='hash' value={currentHash} onChange={e => setCurrentHash(e.target.value)} />
                <button className='button' onClick={getCipher}>Load the cipher!</button>

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
            <p>Input your guess for the shift amount...</p>
            <input className='input' type='range' min='0' max='25' step='1' value={shamt} onChange={e => setShamt(e.target.value)} />
            <label>{shamt}</label>
            <input className='input' type='text' value={guess} onChange={e => setGuess(e.target.value)} />
        </div>
    );
}

export default CrackCipher;