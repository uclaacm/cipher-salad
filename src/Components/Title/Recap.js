import React from "react";
import Anime, {anime} from 'react-anime';
import '../main.css';

class Recap extends React.Component {

    animate = () => {
        return (this.props.startAnimation) ? {opacity: [0,1], delay: anime.stagger(10000) } : { opacity: [0,0]}
    }



    congratsEmoji = () => {
        return(
            <div class="column congrats_emoji">
            <Anime easing="linear" duration="900"
                loop={true}
                rotate='-30deg'
                direction='alternate'
            >
                <span role="img" aria-label="congrats" className="congrats_emoji">🎉</span> 
            </Anime>
            </div>
        )
    }

    // TODO: Make fit into one screen length, where new text replaces the old text

    render() {
        return (
        <div>
            <div className="container">
                <div className="column">
                    <Anime {...this.animate()}>
                    <div className="columns is-vcentered container">
                    <div className="mid_font content-custom column container">
                        <br />
                        <ul>
                            <Anime opacity={(this.props.startAnimation) ? [0,1] : [0,0]} delay={anime.stagger(3000)} translateX={[-20,20]} >
                                <li> Today, we learned 3 different ciphers: </li>
                                <li> Atbash cipher <u>reverses</u> the input letters. </li>
                                <li> Caesar cipher <u>shifts</u> the input by an amount. </li>
                                <li> Vigenere cipher <u>encodes</u> input with a key. </li>
                            </Anime>
                        </ul>
                        
                    </div>
                    </div>
                    
                
                    <div className="columns is-vcentered container">
                    <div className="mid_font content-custom column">
                        Many ciphers, like the Vigenere cipher, use keys, <br/> but with even more complex math 
                        
                         <span role="img" aria-label="math">➗</span><span role="img" aria-label="math">➖</span><span role="img" aria-label="math">✖️</span><span role="img" aria-label="math">➕</span>. 
                        <br/>
                        Transforming them with a key encrypts <span role="img" aria-label="keywithlock">🔐</span> them, and transforming them back decrypts <span role="img" aria-label="key">🔑</span> them
                    </div>
                    </div> 

                    <div className="columns is-vcentered container">
                    <div className="mid_font content-custom column">
                        Computers are key to both encryption<span role="img" aria-label="lock">🔒</span> and decryption<span role="img" aria-label="unlock">🔓</span>. 
                        Thanks to how fast<span role="img" aria-label="fast">⏱</span> computers can crunch the combinations, ciphers can turn into cryptography.<span role="img" aria-label="keywithlock">🔐</span>
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content-custom column">
                        Today, you’ve made the first step in learning about them! 
                    </div>
                    </div>
                    </Anime>
                    <div className="columns is-vcentered container">
                    <div class="column"></div>
                    <div class="column"></div>
                    <div class="column"></div>
                        {this.congratsEmoji()}
                        <div class="column large_font">
                            Congrats 
                        </div>
                        {this.congratsEmoji()}
                    <div class="column"></div>
                    <div class="column"></div>
                    <div class="column"></div>
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