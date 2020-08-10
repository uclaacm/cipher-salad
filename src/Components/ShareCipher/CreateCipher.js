import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { createCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';
import { SERVER } from '../../constants';
import CaesarWheel from '../CaesarWheel/CaesarWheel';

// CreateCipher is the portion of the interactive module
// for creating sharable ciphers.
function CreateCipher() {
    const [currentHash, setCurrentHash] = useState('');
    const [shamt, setShamt] = useState(0);
    const [plaintext, setPlaintext] = useState('TYPE HERE TO CREATE A CIPHER!');

    // 0 = no op in progress
    // 1 = in progress
    // 2 = success
    // 3 = failed
    const [createStatus, setCreateStatus] = useState(0);

    const [copyStatus, setCopyStatus] = useState(0);        // 0 = no copy, 1 = copied OK, 2 = error

    return (
        <div className='container'>
            <h1 className='title is-size-1'>Create a cipher!</h1>
            
            <section className='section'>
                <p className='is-size-4'>Input your plaintext...</p>

                <div className='my-3'></div>

                <input
                    className='input'
                    type='text'
                    placeholder='TYPE HERE TO CREATE A CIPHER!'
                    value={plaintext}
                    onChange={
                        (e) => {e.preventDefault(); setPlaintext(e.target.value.toUpperCase())}
                    }
                />

                <div className='my-3'></div>
                
                <p className='is-size-4'>Then, choose your shift amount...</p>
            </section>

            <section className='section'>
                <CaesarWheel
                    offset={shamt}
                    onOffsetChange={n => setShamt(n) }
                />
                    
                <div className='my-3'></div>

            </section>
            
            <section className='section'>
                <p className='is-size-4'>
                    {
                        plaintext ?
                        `This will be encoded as ${caesarShift(plaintext.toUpperCase(), shamt)}` :
                        'Type something to see it encoded!'
                    }
                </p>
            </section>

            <section className='section'>
                <p className='is-size-4'>Ready to send this to friends or family?</p>

                <div className='my-3'></div>

                <button className='button' onClick={
                    async () => {
                        setCreateStatus(1);
                        let created = await createCipher({ plaintext, shamt });
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