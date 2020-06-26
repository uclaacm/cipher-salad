import React, { Component } from "react";
import GetInput from '../Input/Input.js'
import CaesarWheel from '../CaesarWheel/CaesarWheel.js'
import CaesarButtons from '../CaesarButtons/CaesarButtons.js'
import caesar from './caesar.png'
import brutus from './brutus.png'
import arrow from './arrow.png'
import "./caesar.css"

class Caesar extends Component {
    constructor(props) {
        super(props);

        let offset = Math.floor(Math.random() * 25) + 1;
        this.state = {
            offset: offset
        };
    }
    
    handleOffsetChange = (n) => {
        let off = this.state.offset + n;
        this.setState({ offset: off });
      }

      handleOffsetChangeWheel = (n) => {
          this.setState({ offset: n });
      }

    render() {
        return (
            <div className="section" id="caesar_cipher">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <p className="content is-size-4">The Year is 39 B.C., and Roman general Julius Caesar wants to send a secret note to his friend Brutus.</p>
                        </div>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-one-quarter">
                            <img src={caesar} alt="Caesar"/>
                        </div>
                        <div className="column columns is-centered">
                            <div className="column is-four-fifths">
                                <p className="content is-size-4">So, he writes a note in code. Each A is turned to D, B turned to E&mdash;every letter is turned to the letter 3 places after it in the alphabet.</p>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <img src={brutus} alt="Brutus"/>
                        </div>
                    </div> 
                    <div className="columns is-centered is-vcentered vertical-spacing">
                        <button className="button message-button has-background-grey-light is-static">Brutus homie what is up</button>
                        <img src={arrow} alt="arrow"/>
                        <button className="button message-button has-background-grey-light is-static">EUXWXV KRPLH ZKDW LV XS</button>
                    </div>
                    <div className="columns">
                        <div className="subtitle is-size-4 content column">
                            The Caesar cipher came up when Julius Caesar wanted a method to send secret messages to his people.
                            <div className="vertical-spacing"></div>
                            He "shifted" each letter by 3 to throw unsuspecting readers off.
                            <div className="vertical-spacing"></div>
                            Now, we can encrypt letters by any number of shifts and use our own Caesar cipher. Try it yourself!
                        </div>
                    </div> 
                    <div className="vertical-spacing is-size-4">
                        
                    </div>
                </div>
                <div className="container">
                    <p className="title">Try it!</p>
                    <p className="subtitle is-6">Click and rotate the outer wheel to shift the letters!</p>
                    <CaesarWheel
                        onOffsetChange={this.handleOffsetChangeWheel} 
                        offset = {this.state.offset} />
                    <GetInput
                        offset={this.state.offset} />
                </div>
            </div>
        );
    }
}

export default Caesar;