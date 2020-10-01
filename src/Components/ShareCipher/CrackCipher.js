import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Anime from 'react-anime';
import { caesarShift } from '../../caesarShift';
import CaesarWheel from '../CaesarWheel/CaesarWheel';
import { SERVER } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Congrats from './Congrats';

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
function CrackCipher(props) {
    let match = useRouteMatch();
    let path = match.path;

    // the current cipher hash.

    const [shamt, setShamt] = useState(0);                          // current shift amount
    const [plaintext, setPlaintext] = useState(props.cipher[1]);               // plaintext of the ciphered message
    const [ciphertext, setCiphertext] = useState(props.cipher[0]);             // current guess at the deciphered message
    const [firstTimeLoad, setFirstTime] = useState(1);              // show fade in effect on first time load, since rotate wheel cause reload
    // load the described cipher.

    const shiftResult = caesarShift(ciphertext ? ciphertext : '', shamt) === (plaintext? plaintext : '').toUpperCase();
    const shiftText = caesarShift((ciphertext ? ciphertext : '').toUpperCase(), shamt);

    // if the user was provided a valid hash
    if(firstTimeLoad){  // fade in effect on first time load, instead of everytime the wheel turns
        return (
             <Switch>
                <Route path={`${path}/success`}>
                    <Anime opacity={[0,1]}>
                        <div className='my-5'></div>
                                    
                    <Route path={`${path}/success`}>
                        <Congrats cipher={[ciphertext, plaintext]}/>
                    </Route>
                            
                    </Anime>

                    <div className='my-5'></div>
                </Route>

                <Route path={match.path}>
                    <section className='container'>

                        <Anime easing="linear" duration="700" loop={false} opacity={['0%','100%']} >
                        <div className="container center">
                            <h1 className='title is-size-2 underline mt-4'>Let's Get Cracking!</h1>
            
                                <section className='share-section'>
                                    <p className='is-size-4'>Your secret ciphertext is:</p>
                                    <p className='is-size-3 mb-2'>'{ciphertext}'</p>
            
                                    <div className='my-3'></div>
                                    <Anime easing="linear" duration="1500" loop={true} opacity={['0%','100%', '0%']} >
                                        <FontAwesomeIcon icon={faArrowDown} alt='down arrow' size="2x" color="#0" ></FontAwesomeIcon>             
                                    </Anime>
                                    <p className='is-size-5 mt-1 mb-1'> <i><b>Rotate</b></i> the Ceasar wheel to decode the cipher, </p>
                                    <p className='is-size-5 mt-1 mb-1'> until the text below turns <div style={{display:'inline', color:'#6AA84F'}}>green</div>. </p>
                                    <Anime easing="linear" duration="1500" loop={true} opacity={['0%','100%', '0%']} >
                                        <FontAwesomeIcon icon={faArrowDown} alt='down arrow' size="2x" color="#0" ></FontAwesomeIcon>             
                                    </Anime>
                                </section>
            
                                <div className='my-3'></div>
            
                                <CaesarWheel onOffsetChange={ n => {setShamt(n); setFirstTime(0);} } />
            
                                <div className='my-3'></div>
            
                                <section className='share-section'>
                                    {
                                        !shiftResult && 
                                        <Anime color={'#c00'}>
                                            <p className='is-size-3'>
                                                { shamt ? shiftText : ciphertext }
                                            </p>
                                        </Anime>
                                    }
                                    {
                                        shiftResult && 
                                        <Anime color={'#6aa84f'}>
                                            <p className='is-size-3'>
                                                Did you solve the secret cipher...?
                                            </p>
                                        </Anime>
                                    }
            
                                    <div class="mb-4"></div>
                                    {
                                        shiftResult &&
                                        <Link to={`${path}/success`} className='button is-large is-family-secondary has-text-weight-bold'>
                                            Next
                                        </Link>
                                    }
                                </section>
                            </div>
                        </Anime>
                    </section>
                </Route>
            </Switch>
        );
    }
    else{
        return (
            <Switch>
                <Route path={`${path}/success`}>
                    <Anime opacity={[0,1]}>
                        <div className='my-5'></div>
                                    
                    <Route path={`${path}/success`}>
                        <Congrats cipher={[ciphertext, plaintext]}/>
                    </Route>
                            
                    </Anime>

                    <div className='my-5'></div>
                </Route>

                <Route path={match.path}>
                    <section className='container'>
                    
                        <div className="container center">
                            <h1 className='title is-size-2 underline mt-4'>Let's Get Cracking!</h1>
                
                                <section className='share-section'>
                                    <p className='is-size-4'>Your secret ciphertext is:</p>
                                    <p className='is-size-3 mb-2'>'{ciphertext}'</p>
                
                                    <div className='my-3'></div>
                                    <Anime easing="linear" duration="1500" loop={true} opacity={['0%','100%', '0%']} >
                                        <FontAwesomeIcon icon={faArrowDown} alt='down arrow' size="2x" color="#0" ></FontAwesomeIcon>             
                                    </Anime>
                                    <p className='is-size-5 mt-1 mb-1'> <i><b>Rotate</b></i> the Ceasar wheel to decode the cipher, </p>
                                    <p className='is-size-5 mt-1 mb-1'> until the text below turns <div style={{display:'inline', color:'#6AA84F'}}>green</div>. </p>
                                    <Anime easing="linear" duration="1500" loop={true} opacity={['0%','100%', '0%']} >
                                        <FontAwesomeIcon icon={faArrowDown} alt='down arrow' size="2x" color="#0" ></FontAwesomeIcon>             
                                    </Anime>
                                </section>
                
                                <div className='my-3'></div>
                
                                <CaesarWheel onOffsetChange={ n => setShamt(n) } />
                
                                <div className='my-3'></div>
                
                                <section className='share-section'>
                                    {
                                        !shiftResult && 
                                        <Anime color={'#c00'}>
                                            <p className='is-size-3'>
                                                { shamt ? shiftText : ciphertext }
                                            </p>
                                        </Anime>
                                    }
                                    {
                                        shiftResult && 
                                        <Anime color={'#6aa84f'}>
                                            <p className='is-size-3'>
                                                Did you solve the secret cipher...?
                                            </p>
                                        </Anime>
                                    }
            
                                    <div class="mb-4"></div>
                                    {
                                        shiftResult &&
                                        <Link to={`${path}/success`} className='button is-large is-family-secondary has-text-weight-bold'>
                                            Next
                                        </Link>
                                    }
                                        
                                </section>
                            </div>
                    </section>
                </Route>
            </Switch>
        );
    }
}

export default CrackCipher;
