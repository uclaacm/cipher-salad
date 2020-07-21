import React, { useState } from 'react';
import Anime from 'react-anime';
import CreateCipher from './CreateCipher';
import CrackCipher from './CrackCipher';

// ShareCipher drives the interactive "sharable cipher"
// portion of the module.
// TODO: If provided props.hash it will
// automatically draw the CrackCipher component with the
// proper hash.
function ShareCipher(props) {
    const [mode, setMode] = useState('');

    if (mode === 'create') {
        return (
            <Anime opacity={[0,1]}>
                <CreateCipher />
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('home')}>Go back</button>
            </Anime>
        );
    }
    
    if (mode === 'crack') {
        return (
            <Anime opacity={[0,1]}>
                <CrackCipher />
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('home')}>Go back</button>
            </Anime>
        );
    }

    return (
        <>
            <h1 className='title'>Now then, let's play a game...</h1>
            <div className='row_space'>
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('create')}>Create a cipher!</button>
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('crack')}>Crack a cipher!</button>
            </div>
        </>
    );
}

export default ShareCipher;