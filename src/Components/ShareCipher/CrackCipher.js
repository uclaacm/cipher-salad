import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Anime from 'react-anime';
import { getCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';
import CaesarWheel from '../CaesarWheel/CaesarWheel';

// CrackCipher is the interactive module for cracking a
// sharable cipher. If props.hash is provided, then it
// will automatically try to load the cipher pointed to
// by the provided hash.
function CrackCipher() {
    let { hash } = useParams();

    // the current cipher hash.
    const [currentHash, setCurrentHash] = useState(hash);

    const [shamt, setShamt] = useState(0);                          // current shift amount
    const [plaintext, setPlaintext] = useState(null);               // plaintext of the ciphered message
    const [ciphertext, setCiphertext] = useState(null);             // current guess at the deciphered message
    const [guess, setGuess] = useState('TYPE YOUR GUESS!');         // current guess
    const [guessOK, setGuessOK] = useState(false);                  // whether the current guess is correct
    const [getStatus, setGetStatus] = useState(0);                  // 0 = no get in progress, 1 = get in progress, 2 = failed

    // load the described cipher.
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

    // if provided a hash, then try to load it.
    if (hash && !getStatus && !ciphertext)
        loadCurrentHash();

    // If the user navigated directly to this page
    if (plaintext === null) {
        return (
            <div className='container'>
                <input
                    className='input'
                    type='text'
                    name='hash'
                    placeholder="Input a friend's cipher code!"
                    value={currentHash}
                    onChange={e => setCurrentHash(e.target.value)}
                />
                <button className='button' onClick={loadCurrentHash}>
                    {
                        getStatus === 1 ?
                        "Loading cipher..." :
                        "Load the cipher!"
                    }
                </button>

                {
                    getStatus === 2 &&
                    <Anime opacity={[0,1]}>
                        <p>Failed to get the cipher... Did you type it in correctly?</p>
                    </Anime>
                }
            </div>
        );
    }
    
    // if the user was provided a valid hash
    return (
        <div className='container'>
            <h1 className='title'>Let's get cracking!</h1>

            <div className='columns is-centered is-vcentered'>
                <div className='column'>
                    <p className='is-size-3'>
                        Your secret ciphertext is:
                        <br />
                        <strong>{ciphertext}</strong>
                    </p>
                </div>

                <div className='column'>
                    <p className='is-size-4'>
                        We want to decipher it. Let's try running it through a Caesar cipher!
                    </p>

                    <div className='my-3'></div>

                    <CaesarWheel
                        onOffsetChange={
                            n => {
                                setShamt(n);
                            }
                        }
                    />

                    <div className='my-3'></div>

                    <p className='is-size-4'>
                        {ciphertext &&
                        `If we "shift" its letters by ${Math.abs(shamt)}, the ciphertext becomes ${caesarShift(ciphertext.toUpperCase(), shamt)}`
                        }
                    </p>
                </div>
            </div>

            <div className='section'>
                <p className='is-size-4'>
                    Think you've cracked my cipher? Take a guess:
                </p>
                <input
                    className='input'
                    type='text'
                    placeholder='Type in your guess!'
                    value={guess}
                    onChange={e => setGuess(e.target.value.toUpperCase())}
                />

                <div className='my-3'></div>

                <button
                    className='button'
                    onClick={
                        e => {
                            e.preventDefault();
                            console.log(guess, plaintext);
                            setGuessOK(guess.toUpperCase() === plaintext.toUpperCase());
                        }
                    }
                >
                    Submit guess!
                </button>

                {guessOK &&
                <Anime
                    opacity={[0,1]}
                    color={['black', 'green']}
                >
                    <p className='is-size-4'>
                        Nice job!
                    </p>
                </Anime>
                }
            </div>

        </div>
    );
}

export default CrackCipher;