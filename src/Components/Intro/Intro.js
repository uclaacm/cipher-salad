import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ciphers = [
    "atbash",
    "caesar",
    "vigenere"
]
const cipherPretty = [
    "Atbash",
    "Caesar",
    "Vigenere"
]

function Intro(props) {
    return (
        <div id="intro">
            <div className="container">
            <div className="columns is-vcentered container">
                <div className="column is-9">
                    <div className="columns is-vcentered container">
                        <br/>
                        <div className="is-size-4 content-custom column container">
                        
                        How does ZHOFRPH WR JUDYLWB IDOOV turn into WELCOME TO GRAVITY FALLS? 
                        And how is that related to computers??  
                        <br/><br/>
                        <span role="img" aria-label="key">🔑</span>   <span role="img" aria-label="computer">💻</span>   <span role="img" aria-label="keywithlock">🔐</span>
                        <br/><br/>
                        Computers use cryptography all the time. 
                        Humankind has encrypted messages since as early as 1500 B.C. 
                        Let’s start from the beginning... 
                        </div>
                    </div>
                </div>
                <div className="column"> 
                    {ciphers.map((cipher, i) => {
                        return(
                            <div>
                                <br/>
                                <AnchorLink offset={-5} href={"#"+cipher}>
                                    <button class="button is-static is-large is-family-secondary has-text-weight-bold">{cipherPretty[i]} Cipher</button>
                                </AnchorLink>
                                <br/><br/><br/>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Intro;
