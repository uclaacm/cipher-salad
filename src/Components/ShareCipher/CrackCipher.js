import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Anime from 'react-anime';
import { getCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';
import CaesarWheel from '../CaesarWheel/CaesarWheel';
import { SERVER } from '../../constants';

const SOLVE_URL = `${SERVER}/game/solve/`;

// Parse user input and return just the hash portion of
// the URL or the string itself - if it is already the
// hash of a cipher.
// If the match of SOLVE_URL begins at the start of the
// string, then slice off the SOLVE_URL portion and return
// the hash. Otherwise, assume it is a hash.
function parseHashURL(url) {
    return !url.indexOf(SOLVE_URL) ? url.slice(SOLVE_URL.length) : url;
}

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
        let cipherData = await getCipher(parseHashURL(currentHash));
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
                    placeholder="Paste friend's cipher code or cipher link!"
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
                    <Anime opacity={[0,1]} color={'#c00'}>
                        <p>Failed to get the cipher... Did your friend give you the right link?</p>
                    </Anime>
                }
            </div>
        );
    }
    
    // if the user was provided a valid hash
    return (
        <div className='container'>
            <h1 className='title'>Let's get cracking!</h1>

            <div className='my-3'></div>

            <section className='share-section'>
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

            <section className='share-section'>
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
