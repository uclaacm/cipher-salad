import React from 'react';
import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function Congrats(props) {

    let plaintext = props.cipher[1];               // plaintext of the ciphered message
    let ciphertext = props.cipher[0];             // current guess at the deciphered message
    // load the described cipher.
    
    return (
        <div className="container center">
            <h1 className='title is-size-2 underline mt-4'>Are you the new crack master?</h1>

                <section className='share-section'>
                    <Anime 
                    easing="linear"
                    delay='100' 
                    opacity={['0%','100%']}
                    duration="1000"
                    >
                    <FontAwesomeIcon icon={faGraduationCap} alt='key' size="6x" color="#FFB800" />
                        <p className='is-size-3 mb-5'>Congratulations! </p>
                    </Anime>
                    <Anime 
                    easing="linear"
                    delay='1200' 
                    opacity={['0%','100%']}
                    duration="1000"
                    >
                        <p className='is-size-4 mb-2'>The answer to the secret cipher '{ciphertext}' is </p>
                    </Anime>
                    <Anime 
                    easing="linear"
                    delay='2600' 
                    opacity={['0%','100%']}
                    duration="1000"
                    >
                        <p className='is-size-3 mb-4' style={{color: '#6aa84f'}}>'{plaintext}'</p>
                    </Anime>
                    <Anime 
                    easing="linear"
                    delay='4000' 
                    opacity={['0%','100%']}
                    duration="1000"
                    >
                        <p className='is-size-4 mb-2'>Tell your buddy your success and keep on ciphering!</p>
                    </Anime>
                </section>

                <div className='my-3'></div>

        </div>
    );
}

export default Congrats;
