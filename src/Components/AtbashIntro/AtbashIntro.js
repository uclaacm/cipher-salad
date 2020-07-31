import React from 'react'
import hieroglyph1 from './hieroglyphs1.svg'
import hieroglyph2 from './hieroglyphs2.svg'
import LetterEncoding from '../LetterEncoding/LetterEncoding.js'
import './atbashIntro.css'

function AtbashIntro() {
    return (
        <section className="container mb-6">
            <div className="columns is-variable is-5">
                <div className="column is-one-third">
                    <img src={hieroglyph1} alt="ancient hieroglyphs depicting birds and other things" />
                </div>
                <div className="column">
                    <div className="content"> 
                        <p className="is-size-5">
                            Cryptography is ancient, and has existed as long as people have wanted to 
                            communicate in secret.
                        </p>
                        <p className="is-size-5">
                            One of the oldest ciphers was designed before the English alphabet, but we can 
                            easily translate it over: the Atbash cipher
                        </p>
                    </div>
                </div>
            </div>
            <div className="column is-one-third">
                <img src={hieroglyph2} alt="more ancient hieroglyphs" className="position-img" />
            </div>
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="content">
                        <p className="is-size-5">
                            Originally made for Hebrew, people would replace the first letter, aleph, with 
                            the last letter tav. The second letter, bet, would be replaced with the 
                            second-to-last letter, shin...
                        </p>
                        <p className="is-size-5">
                            Can you guess how these letters would match up in an 
                            English Atbash cipher?
                        </p>
                    </div>
                </div>
                <div className="column position-letter-encodings">
                    <LetterEncoding decodedLetter="A" encodedLetter="Z" hoverReveal={false}/> 
                    <LetterEncoding decodedLetter="B" encodedLetter="Y" hoverReveal={true} num="1"/>
                    <LetterEncoding decodedLetter="C" encodedLetter="X" hoverReveal={true} num="2"/>
                    <p className="is-size-6">Hover over the letters to reveal!</p>
                </div>
            </div>
        </section>
    );
}

export default AtbashIntro;