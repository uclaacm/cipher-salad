import React from 'react'
import hieroglyph1 from './hieroglyphs1.svg'
import hieroglyph2 from './hieroglyphs2.svg'
import LetterEncoding from '../LetterEncoding/LetterEncoding.js'
import { atbashEncode } from '../../atbashEncode';
import Anime from 'react-anime';

const introTexts = [
    ", and has existed as long as people have wanted to communicate in secret.",
    "One of the oldest ciphers was designed before the English alphabet, but we can easily translate it over: the",
    "Originally made for Hebrew, people would replace the first letter of their alphabet with the last, the second with the second to last, and so on.",
    "Can you guess how these letters would match up in an English Atbash cipher?"
]

const lessonText = (line1, line2, first=false) => {
    return(
        <div className="column is-two-thirds">
            <div className=""> 
            <h4 className="subtitle">{(first)? <strong>Cryptography is ancient</strong>: null }{line1}</h4>
            <h4 className="subtitle is-family-secondary">{line2}{(first)? <strong> Atbash cipher</strong> : null}</h4>
                <p className="is-size-5">
                    
                </p>
                <p className="is-size-5">
                    
                </p>
            </div>
        </div>
    )
}

const hieroglyph = (hieroglyph, alttext, offset=false) => {
    let position = offset ? "position-img" : ""
    return(
        <div className="column is-one-third">
            <img src={hieroglyph} alt={alttext} className={position} />
        </div>
    )
}

const letterBoxes = () => {
    return(
        <div className="column is-relative">
            <div className="position-letter-encodings">
                <LetterEncoding decodedLetter="A" encodedLetter="Z" hoverReveal={false}/> 
                <LetterEncoding decodedLetter="B" encodedLetter="Y" hoverReveal={true} num="1"/>
                <LetterEncoding decodedLetter="C" encodedLetter="X" hoverReveal={true} num="2"/>
                <p className="is-size-6">Hover over the letters to reveal!</p>
            </div>
        </div>
    )   
}

export const clickMe = (text, translate) => {
    return(
        <Anime loop={true} translateX={5} direction={"alternate"} >
            <br/>
            <p class="is-size-3" style={{cursor:"pointer"}}>{translate ? text : atbashEncode(text)}</p> 
            <br/>
        </Anime>
    )
}

export const partOne = () => {
    return(
        <div>
            <div className="columns is-variable is-5">
                {hieroglyph(hieroglyph1, "ancient hieroglyphs depicting birds and other things")}
                {lessonText(introTexts[0], introTexts[1], true)}
            </div>
            {hieroglyph(hieroglyph2, "more ancient hieroglyphs", true)}
        </div>
        
    )
}

export const partTwo = () => {
    return(
        <div className="columns" >
            {lessonText(introTexts[2], introTexts[3])}
            {letterBoxes()}
        </div>
    )
}

export const partThree = () => {
    return(
        <div>
            <br/><br/>
            <p className="is-size-5 mb-6">
            This is the Atbash cipher! It came from Hebrew cryptographers, but
            we can use it in English too. Try it yourself!
            </p>
        </div>
    )
}