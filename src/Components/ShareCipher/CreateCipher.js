import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { createCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';
import { SERVER } from '../../constants';
import CaesarWheel from '../CaesarWheel/CaesarWheel';

const PLACEHOLDER_TEXT = 'TYPE HERE TO CREATE A CIPHER';

// CreateCipher is the portion of the interactive module
// for creating sharable ciphers.
function CreateCipher() {
    const [currentHash, setCurrentHash] = useState('');
    const [shamt, setShamt] = useState(0);
    const [plaintext, setPlaintext] = useState('');

    // 0 = no op in progress
    // 1 = in progress
    // 2 = success
    // 3 = failed
    const [createStatus, setCreateStatus] = useState(0);

    // 0 = no copy
    // 1 = copied OK
    // 2 = error
    const [copyStatus, setCopyStatus] = useState(0);

    return (
        <div className='container'>
            <div className="center">
                <h1 className='title is-size-2 underline mt-4'>Create a Cipher!</h1>
            </div>
            
            <section className='share-section'>
                <p className='is-size-4 mt-3'>Input your plaintext...</p>

                <div className='my-3'></div>

                <input
                    className='input'
                    type='text'
                    placeholder={PLACEHOLDER_TEXT}
                    value={plaintext}
                    onChange={
                        (e) => {e.preventDefault(); setPlaintext(e.target.value.toUpperCase())}
                    }
                />

                <div className='my-3'></div>
                
                <p className='is-size-4'>Then, choose your shift amount...</p>
            </section>

            <section className='share-section'>
                <CaesarWheel
                    offset={shamt}
                    onOffsetChange={n => setShamt(n) }
                />
                    
                <div className='my-3'></div>

            </section>
            
            <section className='share-section'>
                <p className='is-size-4'>
                    {`This will be encoded as ${plaintext ? caesarShift(plaintext.toUpperCase(), shamt) : caesarShift(PLACEHOLDER_TEXT, shamt)}`}
                </p>
            </section>

            <section className='share-section'>
                <p className='is-size-4'>Ready to send this to friends or family?</p>

                <div className='my-3'></div>

                <button className='button' onClick={
                    async () => {
                        setCreateStatus(1);
                        let created = await createCipher({
                            plaintext: plaintext ? plaintext : PLACEHOLDER_TEXT,
                            shamt,
                        });
                        if (created) {
                            setCurrentHash(String(created));
                            setCurrentHash(`${SERVER}/game/solve/${created}`);
                            setCreateStatus(2);
                            return;
                        }
                        setCreateStatus(3);
                    }
                }>
                    {
                    createStatus === 0 ?
                    'Create my cipher code!' :
                    createStatus === 1 ?
                    'Creating your link' :
                    createStatus === 2 ?
                    'Cipher link created!' :
                    'An error was encountered!'
                    }
                </button>

                <div className='create-link'>
                    <div className='my-3'></div>
                    
                    {currentHash &&
                    <>
                        <p className='is-size-4'>
                            Share your cipher with the following link:
                            <br />
                            <a
                                href={currentHash}
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                {currentHash}
                            </a>
                        </p>

                        <div className='my-3'></div>

                        <button
                            className='button'
                            onClick={
                                () => {
                                    if (!copy(currentHash))
                                        setCopyStatus(2);
                                    else
                                        setCopyStatus(1);
                                }
                            }
                        >
                            {copyStatus === 0 ?
                            'Copy to clipboard!' :
                            copyStatus === 2 ?
                            'Failed to copy!' :
                            'Copied!'
                            }
                        </button>
                    </>
                    }
                </div>
            </section>
        </div>
    );
}

export default CreateCipher;
