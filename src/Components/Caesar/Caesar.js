import React, { Component } from "react";
import GetInput from '../Input/Input.js'
import CaesarWheel from '../CaesarWheel/CaesarWheel.js'
import caesar from './caesar.svg'
import brutus from './brutus.svg'
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
            <div id="caesar_cipher">
                <div className="container mb-6">
                    <div className="columns is-centered">
                        <div className="column">
                            <p className="is-size-4">The Year is 39 B.C., and Roman general Julius Caesar wants to send a secret note to his friend Brutus.</p>
                        </div>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-one-quarter">
                            <img src={caesar} alt="Caesar"/>
                        </div>
                        <div className="column columns is-centered">
                            <div className="column is-four-fifths">
                                <p className="is-size-5">So, he writes a note in code. Each A is turned to D, B turned to E&mdash;every letter "shifts" to the letter 3 places after it in the alphabet.</p>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <img src={brutus} alt="Brutus"/>
                        </div>
                    </div> 
                    <div className="columns is-centered is-vcentered mb-6">
                        <button className="button message-button has-background-grey-light is-static">Brutus homie what is up</button>
                        <img src={arrow} alt="arrow"/>
                        <button className="button message-button has-background-grey-light is-static">EUXWXV KRPLH ZKDW LV XS</button>
                    </div>
                    <div className="columns mt-5">
                        <div className="column">
                            <div className="content is-size-5">
                                <p>The Caesar cipher came up when Julius Caesar wanted a method to send secret messages to his people.</p>
                                <p>He "shifted" each letter by 3 to throw unsuspecting readers off.</p>
                                <p>Now, we can encrypt letters by any number of shifts and use our own Caesar cipher. Try it yourself!</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="container">
                    <p className="title">Try it!</p>
                    <p className="subtitle is-6 has-text-weight-bold">Click and rotate the outer wheel to shift the letters!</p>
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