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
                <div className="column">
                    <div className="columns is-vcentered container">
                        <div className="is-size-3 content-custom column container">
                        <br />
                        What is encryption? 
                        How does ZHOFRPH WR JUDYLWB IDOOV turn into WELCOME TO GRAVITY FALLS? 
                        And how is that related to computers??  
                        </div>
                    </div>
                    <div className="columns is-vcentered container">
                        <div className="is-size-3 content-custom column container">
                        Computers use cryptography all the time. 
                        Humankind has encrypted messages since as early as 1500 B.C. 
                        Let’s start from the beginning... 
                        <br /><br />
                        </div>
                    </div> 
                </div>
            </div>
            <div className="row_space">
                {ciphers.map((cipher, i) => {
                    return(
                        <AnchorLink offset={-5} href={"#"+cipher}>
                            <button class="button is-static is-large is-family-secondary has-text-weight-bold">{cipherPretty[i]} Cipher</button>
                        </AnchorLink>
                    )
                })}
            </div>
        </div>
    );
}

export default Intro;
