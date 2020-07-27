import React, { useState } from 'react';
import { createCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';

// CreateCipher is the portion of the interactive module
// for creating sharable ciphers.
function CreateCipher(props) {
    const [currentHash, setCurrentHash] = useState('');
    const [shamt, setShamt] = useState(0);
    const [plaintext, setPlaintext] = useState('Type here to create a cipher!');

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
                    let created = await createCipher({ plaintext, shamt });
                    console.log(created);
                    if (created)
                        setCurrentHash(String(created));
                }
            }>Create my cipher code!</button>
            {currentHash &&
            // TODO: copy to clipboard
            <p>Share your cipher with the following code, or click it copy it to your clipboard: <strong>{currentHash}</strong></p>
            }
        </div>
    );
}

export default CreateCipher;