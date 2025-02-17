import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Anime from 'react-anime';
import { getCipher } from '../../firestore';
import { caesarShift } from '../../caesarShift';
import { SERVER } from '../../constants';
import CrackCipher from './CrackCipher';

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
function SolveCipher() {
    let match = useRouteMatch();
    let path = `/game/solve`;
    // console.log(match);
    let { hash } = useParams();

    // the current cipher hash.
    const [currentHash, setCurrentHash] = useState(hash);

    const [plaintext, setPlaintext] = useState(null);               // plaintext of the ciphered message
    const [ciphertext, setCiphertext] = useState(null);             // current guess at the deciphered message
    const [getStatus, setGetStatus] = useState(0);                  // 0 = no get in progress, 1 = get in progress, 2 = failed, 3 = success
    const [firstTimeLoad, setFirstTime] = useState(1);              // show fade in effect on first time load, since actions cause reload
    // load the described cipher.
    
    const loadCurrentHash = async () => {
        if (getStatus === 1)
            return;
        setGetStatus(1);
        let cipherData = await getCipher(parseHashURL(currentHash));
        if (!cipherData)
            setGetStatus(2);
        else {
            setGetStatus(3);
            setPlaintext(cipherData.plaintext);
            setCiphertext(caesarShift(cipherData.plaintext.toUpperCase(), cipherData.shamt));
        }
    }

    const strings = ["P +3 S", "X +3 A", "I +3 L", "X +3 A", "A +3 D"]
    const lines = []
    for (var i = 0; i < strings.length; i++){
        lines.push(strings[i].split(' '))
    }

    
    return (
        <Switch>
            <Route path={`${path}/crack`}>
                <Anime opacity={[0,1]}>
                    <div className='my-5'></div>
                                
                <Route path={`${path}/crack`}>
                    <CrackCipher cipher={[ciphertext, plaintext]}/>
                </Route>
                        
                </Anime>

                <div className='my-5'></div>
            </Route>

            <Route path={match.path}>
                <section className='container'>

                    <Anime easing="linear" duration="700" loop={false} opacity={firstTimeLoad ? [0,1] : [1]} >
                    <div className="container center">
                        <h1 className='title is-size-2 underline mt-4'>Can you solve my cipher?</h1>
            
                            <section className='share-section'>
                                <p className='is-size-4 mb-3'>Your friend has encoded a cipher for you to crack, </p>
                                <p className='is-size-4 mb-3'>the cipher is encrypted with <u>caesar</u> encoding. </p>
                                <p className='is-size-4 mb-3'>Every letter in the ciphertext is shifted by a constant amount. </p>

                                {
                                    lines.map(val => 
                                        <div className="columns is-vcentered is-size-3">
                                            <div class="column is-one-third" style={{color:'#CC0000'}}>
                                                <Anime easing="linear"
                                                    duration={8500}
                                                    opacity={[0,1,0,1,0,0,0,0,0,0,0,0,0,0,1]}
                                                > {val[0]} </Anime>
                                            </div>
                                            <div class="column is-one-third" style={{color:'#FFB800'}}>
                                                <Anime easing="linear"
                                                    duration={8500}
                                                    opacity={[0,0,0,0,0,1,0,1,0,0,0,0,0,0,1]}
                                                > {val[1]} </Anime>
                                            </div>
                                            <div class="column is-one-third" style={{color:'#6AA84F'}}>
                                                <Anime easing="linear"
                                                    duration={8500}
                                                    opacity={[0,0,0,0,0,0,0,0,0,1,0,1,0,0,1]}
                                                > {val[2]} </Anime>
                                            </div>
                                        </div>
                                    )
                                }

            
                                <p className='is-size-4 mb-3'>Are you ready to be a cipher chef and crack the mystery code?</p>
            
                                <section className='share-section'>
                                    <p className='is-size-4 mb-3'>
                                        First, let's load our cipher! 
                                    </p>
                                
                                <input
                                    className='input'
                                    type='text'
                                    name='hash'
                                    placeholder="Paste friend's cipher code or cipher link here!"
                                    value={currentHash}
                                    onChange={e => {
                                        setCurrentHash(e.target.value); 
                                        setFirstTime(0); }}
                                />
                                {
                                    currentHash && getStatus === 0 &&
                                    <button className='button mt-3 is-medium is-family-secondary has-text-weight-bold' onClick={loadCurrentHash}>Load the cipher!</button>
                                }
                                {
                                    getStatus === 1 &&
                                    <Anime opacity={[0,1]} color={'#FFB800'}>
                                        <p className='mt-3'>Loding cipher </p>
                                    </Anime>
                                }
            
                                {
                                    getStatus === 2 &&
                                    <Anime opacity={[0,1]} color={'#c00'}>
                                        <p className='mt-3'>Failed to get the cipher... </p>
                                        <p className='mt-2'>Did your friend give you the right link?</p>
                                    </Anime>
                                }
                                {
                                    getStatus === 3 &&
                                    <Anime opacity={[0,1]} color={'#228B22'}>
                                        <p className='mt-3'>Loaded successfully </p>
                                    </Anime>
                                    
                                }
                                </section>
            
                                <div class="mb-4"></div>
                                
                                {
                                    getStatus === 3 &&
                                    <Redirect to={`${path}/crack`}/> 
                                }
                            </section>
                        </div>
                    </Anime>
                </section>
            </Route>
        </Switch>
    );
}

export default SolveCipher;
