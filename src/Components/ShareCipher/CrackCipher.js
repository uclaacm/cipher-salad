import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Anime from 'react-anime';
import { caesarShift } from '../../caesarShift';
import CaesarWheel from '../CaesarWheel/CaesarWheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Congrats from './Congrats';

// CrackCipher is the interactive module for cracking a
// sharable cipher. If props.hash is provided, then it
// will automatically try to load the cipher pointed to
// by the provided hash.
function CrackCipher(props) {
    let match = useRouteMatch();
    let path = match.path;

    // the current cipher hash.

    const [shamt, setShamt] = useState(0);                          // current shift amount
    let plaintext = props.cipher[1];               // plaintext of the ciphered message
    let ciphertext = props.cipher[0];             // current guess at the deciphered message
    const [firstTimeLoad, setFirstTime] = useState(1);              // show fade in effect on first time load, since rotate wheel cause reload
    // load the described cipher.

    const shiftResult = caesarShift(ciphertext ? ciphertext : '', shamt) === (plaintext? plaintext : '').toUpperCase();
    const shiftText = caesarShift((ciphertext ? ciphertext : '').toUpperCase(), shamt);

    // if the user was provided a valid hash
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

                    <Anime easing="linear" duration="700" loop={false} opacity={firstTimeLoad ? [0,1] : [1]} >
                    <div className="cipher-container center">
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
        
                            <CaesarWheel onOffsetChange={ n => {
                                setShamt(n); 
                                setFirstTime(0);} } 
                            />
        
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
                                        <p className='is-size-3 mb-4'>
                                            {plaintext}
                                        </p>
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

export default CrackCipher;
