import React, { Component } from 'react';
//import DecodingAnimation from '../DecodingAnimation/DecodingAnimation.js'
import {caesarShift} from '../../caesarShift.js'
import {atbashEncode} from '../../atbashEncode.js'
import Anime from 'react-anime'
import './decoding.css'

class Decoding extends Component {
    constructor(props) {
        super(props);

        this.animating = false;
        this.timerID = 0
        this.curAnimation = 0;
        this.curLetter = 0;
        this.offset = 0;

        this.correctKey = Math.floor(Math.random() * 25) + 1;
        let decodedMessage = "CONGRATS, NAME!"; //get name!!!
        this.encodedMessage = caesarShift(decodedMessage, this.correctKey);
        this.wrongInterval = 500/this.encodedMessage.length;
        this.rightInterval = 1000/this.correctKey;

        this.wrongKey1 = Math.floor(Math.random() * 25) + 1;
        this.wrongKey2 = Math.floor(Math.random() * 25) + 1;
        while (this.wrongKey1 === this.correctKey) {
            this.wrongKey1 = Math.floor(Math.random() * 25) + 1;
        }
        while (this.wrongKey2 === this.correctKey || this.wrongKey2 === this.wrongKey1) {
            this.wrongKey2 = Math.floor(Math.random() * 25) + 1;
        }

        this.wrongMessage1 = caesarShift(this.encodedMessage, -this.wrongKey1);
        this.wrongMessage2 = atbashEncode(this.encodedMessage);
        this.wrongMessage3 = caesarShift(this.encodedMessage, -this.wrongKey2);
        
        this.state = { 
            message: this.encodedMessage, 
            guessAnimationComplete: false
        };

        console.log("key1: "+this.wrongKey1);
        console.log("key2: "+this.wrongKey2);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    correctDecodingAnimation = () => {
        if (this.animating) {
            if (this.offset < this.correctKey) { 
                let shifted = caesarShift(this.state.message.toUpperCase(), -1);
                this.setState({
                    message: shifted
                });
                this.offset++;
            }
            else {
                this.setState({
                    guessAnimationComplete: true
                });
                this.animating = false;
            }
        }
    }

    wrongDecodingAnimation = () => {
        if (this.animating) {
            if (this.curLetter < this.encodedMessage.length) {
                let decoded;
                if (this.curAnimation === 1) {
                    decoded = this.replaceCharAt(this.state.message, this.curLetter, this.wrongMessage1[this.curLetter]);
                } else if (this.curAnimation === 2) {
                    decoded = this.replaceCharAt(this.state.message, this.curLetter, this.wrongMessage2[this.curLetter]);
                } else if (this.curAnimation === 3) {
                    decoded = this.replaceCharAt(this.state.message, this.curLetter, this.wrongMessage3[this.curLetter]);
                }
                this.setState({
                    message: decoded
                });
                this.curLetter++;
            }
            else {
                this.setState({
                    guessAnimationComplete: true
                });
                this.animating = false;
            }
        }
    }

    button1Click = () => {
        this.setState({
            message: this.encodedMessage
        });
        this.animating = true;
        this.curAnimation = 1;
        this.curLetter = 0;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        this.timerID = setInterval(this.wrongDecodingAnimation, this.wrongInterval);
    }

    button2Click = () => {
        this.setState({
            message: this.encodedMessage
        });
        this.animating = true;
        this.curAnimation = 2;
        this.curLetter = 0;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        this.timerID = setInterval(this.wrongDecodingAnimation, this.wrongInterval);
    }

    button3Click = () => {
        this.setState({
            message: this.encodedMessage
        });
        this.animating = true;
        this.curAnimation = 3;
        this.curLetter = 0;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        this.timerID = setInterval(this.wrongDecodingAnimation, this.wrongInterval);
    }

    replaceCharAt = (str, index, newChar) => {
        return str.substr(0, index) + newChar + str.substr(index + 1);
    }

    render() {
        let message = (<div className="is-size-3 vertical-spacing">{this.state.message}</div>);
        let finalmessage;
        if (this.state.guessAnimationComplete) {
            finalmessage = <Anime color="red" direction="alternate">
                {message}
            </Anime>
        } else {
            finalmessage = message;
        }

        let button1 = String.fromCharCode(this.wrongKey1 + 65);
        let button3 = String.fromCharCode(this.wrongKey2 + 65);

        return (
            <div className="section">
                <div className="container">
                    <p className="is-size-4">So, *need to get name*, you've learned 3 types of ciphers today! Can you decode what this message means?</p>
                    {finalmessage}
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