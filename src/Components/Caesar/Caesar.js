import React, { Component } from "react";
import GetInput from '../Input/Input.js'
import CaesarWheel from '../CaesarWheel/CaesarWheel.js'
import CaesarButtons from '../CaesarButtons/CaesarButtons.js'
import caesar from './caesar.png'
import brutus from './brutus.png'
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
            <div className="section">
                <p className="title" id="caesar_cipher">Caesar Cipher</p>
                <br />
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <p className="subtitle content mid_font">The Year is 39 B.C., and Roman general Julius Caesar wants to send a secret note to his friend Brutus.</p>
                        </div>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-one-quarter">
                            <img src={caesar} alt="Caesar"/>
                        </div>
                        <div className="column columns is-centered">
                            <div className="column is-four-fifths">
                                <p className="content mid_font">So, he writes a note in code. Each A is turned to D, B turned to E&mdash;every letter is turned to the letter 3 places after it in the alphabet.</p>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <img src={brutus} alt="Brutus"/>
                        </div>
                    </div> 
                    <div className="vertical-spacing">
                        <button className="button message-button has-background-grey-light is-static">Brutus homie what is up</button>
                        <span className="icon is-medium">
                            <i className="fa fa-long-arrow-right fa-2x"></i>
                        </span>
                        <button className="button message-button has-background-grey-light is-static">EUXWXV KRPLH ZKDW LV XS</button>
                    </div>
                    <div className="row_center">
                        <div className="wide_paragraph content">
                        The Caesar cipher came up when Julius Caesar wanted a method to send secret messages to his people.
                        <br />
                        <br />
                        He "shifted" each letter by 3 to throw unsuspecting readers off.
                        <br />
                        <br />
                        Now, we can encrypt letters by any number of shifts and use our own Caesar cipher. Try it yourself!
                        </div>
                    </div> 
                    <div className="vertical-spacing content mid_font">
                        
                    </div>
                </div>
                <div className="container">
                    <p className="title">Try it!</p>
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

// <CaesarButtons offset={this.state.offset} onOffsetChange={this.handleOffsetChange} />