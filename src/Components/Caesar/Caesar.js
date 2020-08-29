import React, { Component } from "react";
import GetInput from '../Input/Input.js'
import CaesarWheel from '../CaesarWheel/CaesarWheel.js'
import caesar from './caesar.svg'
import brutus from './brutus.svg'
import "./caesar.css"
import Anime, {anime} from 'react-anime'

class Caesar extends Component {
    constructor(props) {
        super(props);

        let offset = Math.floor(Math.random() * 25) + 1;
        this.state = {
            offset: offset,
            animateMessage: false,
        };
    } 

    handleOffsetChange = (n) => {
        let off = this.state.offset + n;
        this.setState({ offset: off });
      }

      handleOffsetChangeWheel = (n) => {
          this.setState({ offset: n });
      }
      
    putCharsInSpans = (string) => {
        let map = Array.prototype.map;
        let spans = map.call(string, char => {
            if (char === " ") {
                return <span>&nbsp;</span>
            } else {
                return <span>{char}</span>;
            }
        });
        return spans;
    }
    
    render() {
        let plaintext = "Brutus homie what is up";
        let ciphertext = "EUXWXV KRPLH ZKDW LV XS";
        let finalPlaintext, finalCiphertext;
        if (this.state.animateMessage) {
            finalPlaintext = <div className="overlay is-inline-flex">
                <Anime 
                    rotateY={[0,45]} 
                    opacity={[1,0]} 
                    duration="200" 
                    delay={anime.stagger(50)}
                    easing="easeOutSine">
                        {this.putCharsInSpans(plaintext)}
                </Anime>
            </div>
            finalCiphertext = <div className="overlay is-inline-flex">
                <Anime 
                    rotateY={[-90,0]} 
                    opacity={[0,1]} 
                    duration="400" 
                    delay={anime.stagger(50)}
                    easing="easeOutSine">
                        {this.putCharsInSpans(ciphertext)}
                </Anime>
            </div>
        } else {
            finalPlaintext = <div className="overlay">{plaintext}</div>;
            finalCiphertext = null;
        }
    
        return (
            <div id="caesar_cipher">
                <div className="container mb-6">
                    <div className="columns is-centered">
                        <div className="column">
                            <p className="is-size-4">
                                The Year is 39 B.C., and Roman general Julius Caesar 
                                wants to send a secret note to his friend Brutus.
                            </p>
                        </div>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-one-quarter">
                            <img src={caesar} alt="Caesar" className="img-size"/>
                        </div>
                        <div className="column columns is-centered">
                            <div className="column is-four-fifths">
                                <p className="is-size-5">
                                    So, he writes a note in code. Each A is turned to D, B turned to 
                                    E&mdash;every letter "shifts" to the letter 3 places after it in the 
                                    alphabet.
                                </p>
                                <button 
                                    className="button is-relative is-medium message-button has-background-grey-light has-text-black is-family-secondary"
                                    onClick={() => {this.setState({animateMessage: true})}}>
                                    {finalPlaintext}
                                    {finalCiphertext}
                                </button>
                                <p className="has-text-weight-normal mt-3">click to see the caesar encoding!</p>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <img src={brutus} alt="Brutus" className="img-size"/>
                        </div>
                    </div> 
                    
                    <div className="">
                        <div className="content is-size-5">
                            <p>
                                The Caesar cipher came up when Julius Caesar wanted a method to send 
                                secret messages to his people.
                            </p>
                            <p>He "shifted" each letter by 3 to throw unsuspecting readers off.</p>
                            <p>
                                Now, we can encrypt letters by any number of shifts and use our own 
                                Caesar cipher. Try it yourself!
                            </p>
                        </div>
                    </div> 
                </div>
                <div className="container">
                    <p className="title">Try it!</p>
                    <p className="subtitle is-6 has-text-weight-medium">Click and rotate the outer wheel to shift the letters!</p>
                    <CaesarWheel
                        onOffsetChange={this.handleOffsetChangeWheel} 
                        offset = {this.state.offset} />
                    <GetInput
                        offset={this.state.offset}
                        cipher="ceasar" />
                </div>
            </div>
        );
    }
}

export default Caesar;