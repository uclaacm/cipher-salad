import React, { Component } from 'react';
import {caesarShift} from '../../caesarShift.js'
import {atbashEncode} from '../../atbashEncode.js'
import DecodingOptions from '../DecodingOptions/DecodingOptions.js'
import Anime, {anime} from 'react-anime'
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
        this.correctInterval = 1000/this.correctKey;

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
            guessAnimationComplete: false,
            correctAnimationComplete: false,
            showFinalInfo: false
        };
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
                    correctAnimationComplete: true
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

    button1OnClick = () => {
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

    button2OnClick = () => {
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

    button3OnClick = () => {
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

    startCorrectDecodingAnimation = () => {
        this.animating = true;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        this.timerID = setInterval(this.correctDecodingAnimation, this.correctInterval);
    }

    handleStartCorrectDecodingClick = () => {
        this.setState({
            message: this.encodedMessage,
            guessAnimationComplete: false
        });
    }

    replaceCharAt = (str, index, newChar) => {
        return str.substr(0, index) + newChar + str.substr(index + 1);
    }

    render() {
        let message = (<div className="is-size-3 vertical-spacing">{this.state.message}</div>);
        let finalmessage;
        if (this.state.guessAnimationComplete) {
            finalmessage = <Anime color="#c00" direction="alternate" duration="500" easing="easeInOutExpo">
                {message}
            </Anime>
        } else if (this.state.correctAnimationComplete){
            finalmessage = <Anime color="#6aa84f" direction="alternate" duration="500" easing="easeInOutExpo" complete={(anim) => {this.setState({showFinalInfo: true});}}>
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
                    <DecodingOptions startCorrectDecodingAnimation={this.startCorrectDecodingAnimation} onStartCorrectDecodingClick={this.handleStartCorrectDecodingClick}
                        button1Shift={button1} button3Shift={button3} 
                        button1OnClick={this.button1OnClick} button2OnClick={this.button2OnClick} button3OnClick={this.button3OnClick}/>
                    {this.state.showFinalInfo && 
                        <Anime opacity={[0,1]} translateY="-2em">
                            <div className="is-size-4" style={{padding: '1.5em'}}>Crazy fast right?</div>
                        </Anime>
                    }
                </div>
            </div>
        );
    }
}

export default Decoding;