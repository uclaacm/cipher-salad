import React, { Component } from 'react';
//import DecodingAnimation from '../DecodingAnimation/DecodingAnimation.js'
import {caesarShift} from '../../caesarShift.js'
import Anime from 'react-anime'
import './decoding.css'

class Decoding extends Component {
    constructor(props) {
        super(props);

        this.offset = 0;
        this.curKey = 0;
        this.shifting = false;
        this.timerID = 0;

        this.key = Math.floor(Math.random() * 25) + 1;
        let decodedMessage = "CONGRATS, NAME!"; //get name!!!
        this.encodedMessage = caesarShift(decodedMessage, this.key);

        this.key1 = Math.floor(Math.random() * 25) + 1;
        this.key2 = Math.floor(Math.random() * 25) + 1;
        while (this.key1 === this.key) {
            this.key1 = Math.floor(Math.random() * 25) + 1;
        }
        while (this.key2 === this.key || this.key2 === this.key1) {
            this.key2 = Math.floor(Math.random() * 25) + 1;
        }

        this.state = { 
            shiftedText: this.encodedMessage, 
            shiftComplete: false
        };
    }

    shift = () => {
        if (this.shifting) {
            if (this.offset < this.curKey) { 
                let shifted = caesarShift(this.state.shiftedText.toUpperCase(), -1);
                this.setState({
                    shiftedText: shifted
                });
                this.offset++;
            }
            else {
                this.setState({
                    shiftComplete: true
                });
                this.shifting = false;
            }
        }
    }

    button1Click = () => {
        this.shifting = true;
        this.curKey = this.key1;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        let interval = 1/this.key1 * 1000;
        this.timerID = setInterval(this.shift, interval);
    }

    button2Click = () => {
        
    }

    button3Click = () => {
        this.shifting = true;
        this.curKey = this.key2;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        let interval = 1/this.key2 * 1000;
        this.timerID = setInterval(this.shift, interval);
    }

    render() {
        let shiftedText = (<div className="is-size-3 vertical-spacing">{this.state.shiftedText}</div>);
        let finalShiftedText;
        if (this.state.shiftComplete) {
            finalShiftedText = <Anime color="red" direction="alternate">
                {shiftedText}
            </Anime>
        } else {
            finalShiftedText = shiftedText;
        }

        let button1 = String.fromCharCode(this.key1 + 65);
        let button3 = String.fromCharCode(this.key2 + 65);

        return (
            <div className="section">
                <div className="container">
                    <p className="is-size-4">So, *need to get name*, you've learned 3 types of ciphers today! Can you decode what this message means?</p>
                    {finalShiftedText}
                    <p className="has-text-left hint">Hint &mdash; here's a couple options you can try:</p>
                    <div className="buttons is-centered">
                        <p className="control">
                        <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.button1Click}>{`Caesar - ${button1}`}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.button2Click}>Atbash</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.button3Click}>{`Caesar - ${button3}`}</button>
                        </p>
                    </div>
                    <p className="is-size-4 vertical-spacing">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    
                </div>
            </div>
        );
    }
}

export default Decoding;