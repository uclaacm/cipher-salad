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
    console.log(caesarShift(ciphertext ? ciphertext : '', shamt) === plaintext);
    return (
        <div className='container'>
            <h1 className='title'>Let's get cracking!</h1>

            <div className='my-3'></div>

            <section className='section'>
                <p className='is-size-3'>
                    Your secret ciphertext is:
                    <br />
                    '{ciphertext}'
                </p>

                <div className='my-3'></div>

                <p className='is-size-5'>
                    Let's crack the encryption by decoding it with the <b>Caesar Cipher</b>! Rotate the wheel to give it a try. The decoded text will turn green when you've got it!
                </p>
            </section>

            <div className='my-3'></div>

            <CaesarWheel onOffsetChange={ n => setShamt(n) } />

            <div className='my-3'></div>

            <section className='section'>
                <Anime
                    color={(caesarShift(ciphertext ? ciphertext : '', shamt) === plaintext.toUpperCase()) ? '#6aa84f' : '#c00'}
                >
                    <p className='is-size-3'>
                        {shamt ?
                        caesarShift(ciphertext.toUpperCase(), shamt) :
                        ciphertext
                        }
                    </p>
                </Anime>
            </section>
        </div>
    );
}

export default CrackCipher;