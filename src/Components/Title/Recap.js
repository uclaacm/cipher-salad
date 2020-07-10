import React from "react";
import '../main.css';

class Recap extends React.Component {
    render() {
        return (
        <div>
            <div className="container">
                <div className="column">
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column container">
                        <br />
                        Today we learned about 3 different ciphers: 
                        <ul>
                          <li> Caesar cipher <u>shift</u> the input by an amount. </li>
                          <li> Atbash cipher <u>reverse</u> the input letters. </li>
                          <li> Vigenere cipher <u>encode</u> every input with a key. </li>
                        </ul>
                    </div>
                    </div>
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Computers are key to both encryption<span role="img" aria-label="lock">🔒</span> and decryption<span role="img" aria-label="unlock">🔓</span>. 
                        In addition to the 3 ciphers, many more are used today 
                        thanks to how fast<span role="img" aria-label="fast">⏱</span> computers can crunch the combinations. 
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Many ciphers, similar to the Vigenere cipher, 
                        use keys, but with even more complex math <span role="img" aria-label="math">➗</span><span role="img" aria-label="math">➖</span><span role="img" aria-label="math">✖️</span><span role="img" aria-label="math">➕</span>. 
                        That’s where ciphers start to turn in cryptography<span role="img" aria-label="cryptography">🔐</span>. 
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Today, you’ve made the first step in learning about them! 
                    </div>
                    </div>
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                      <span role="img" aria-label="congrats" className="congrats_emoji2">🎉</span> Congrats <span role="img" aria-label="congrats" className="congrats_emoji1">🎉</span>
                    </div>
                    </div>
                    <div className="vertical-spacing"></div>
                    <div className="vertical-spacing"></div>
                </div>
                </div>
                
                <div className="vertical-spacing"></div>
            </div>
        );
    }
}

export default Recap;
// Reference:
// https://react-popup.elazizi.com/react-tooltip/