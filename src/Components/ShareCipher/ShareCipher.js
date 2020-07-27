import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Anime from 'react-anime';
import CreateCipher from './CreateCipher';
import CrackCipher from './CrackCipher';

// ShareCipher drives the interactive "sharable cipher"
// portion of the module. Uses useParams for acquisition
// of an existing hash via sharable link.
function ShareCipher() {
    const { hash } = useParams();
    const [mode, setMode] = useState('');
    const [ignoreHash, setIgnoreHash] = useState(false);

    if (mode === 'create') {
        return (
            <Anime opacity={[0,1]}>
                <CreateCipher />
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('home')}>Go back</button>
            </Anime>
        );
    }
    
    if ((hash && !ignoreHash) || mode === 'crack') {
        return (
            <Anime opacity={[0,1]}>
                <CrackCipher hash={!ignoreHash && hash} />
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={
                    () => {
                        setMode('home');
                        setIgnoreHash(true);
                    }
                }>Go back</button>
            </Anime>
        );
    }
    
    return (
        <>
            <h1 className='title'>Teach LA's Cipher Potluck</h1>
            <div className='row_space'>
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('create')}>Create a cipher!</button>
                <button className='button is-large is-family-secondary has-text-weight-bold' onClick={() => setMode('crack')}>Crack a cipher!</button>
            </div>
        </>
    );
}

export default ShareCipher;