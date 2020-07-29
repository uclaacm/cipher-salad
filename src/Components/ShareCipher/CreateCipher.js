import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { createCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';
import { SERVER } from '../../constants';

// CreateCipher is the portion of the interactive module
// for creating sharable ciphers.
function CreateCipher() {
    const [currentHash, setCurrentHash] = useState('');
    const [shamt, setShamt] = useState(0);
    const [plaintext, setPlaintext] = useState('Type here to create a cipher!');

    // 0 = no op in progress
    // 1 = in progress
    // 2 = success
    // 3 = failed
    const [createStatus, setCreateStatus] = useState(0);

    const [copyStatus, setCopyStatus] = useState(0);        // 0 = no copy, 1 = copied OK, 2 = error

    return (
        <div className='container'>
            <h1 className='title'>Create a cipher!</h1>
            <p className='is-size-4'>Input your plaintext...</p>
            <input className='input' type='text' value={plaintext} onChange={(e) => {e.preventDefault(); setPlaintext(e.target.value)}} />
            <p className='is-size-4'>{shamt ? `Then shift it ${shamt} letters over...` : 'Then choose your shift amount!'}</p>
            <input
                className='input'
                type='range'
                min='0'
                max='25'
                step='1'
                value={shamt}
                onChange={(e) => {e.preventDefault(); setShamt(Number(e.target.value))}}
            />
            <p className='is-size-4'>{`This will be encoded as ${caesarShift(plaintext.toUpperCase(), shamt)}`}</p>
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
                'Creating the cipher link' :
                createStatus === 2 ?
                'Cipher link created!' :
                'An error was encountered!'
                }
            </button>
            {currentHash &&
            <>
                <p>
                    Share your cipher with the following link, or click the button to copy it to your clipboard: <strong>{currentHash}</strong>
                </p>
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
    );
}

export default CreateCipher;