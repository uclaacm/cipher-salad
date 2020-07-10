import React, { Component } from 'react';
import {caesarShift} from '../../caesarShift.js'
import {atbashEncode} from '../../atbashEncode.js'
import DecodingOptions from '../DecodingOptions/DecodingOptions.js'
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
        let decodedMessage = "CONGRATS!";
        this.encodedMessage = caesarShift(decodedMessage, this.correctKey);
        this.wrongInterval = 500/this.encodedMessage.length;
        this.correctInterval = 1000/this.correctKey;

        let wrongKey2 = "Atbash"
        let wrongKey1 = Math.floor(Math.random() * 25) + 1;
        let wrongKey3 = Math.floor(Math.random() * 25) + 1;
        while (wrongKey1 === this.correctKey) {
            wrongKey1 = Math.floor(Math.random() * 25) + 1;
        }
        while (wrongKey3 === this.correctKey || wrongKey3 === wrongKey1) {
            wrongKey3 = Math.floor(Math.random() * 25) + 1;
        }

        this.wrongMessage1 = caesarShift(this.encodedMessage, -wrongKey1);
        this.wrongMessage2 = atbashEncode(this.encodedMessage);
        this.wrongMessage3 = caesarShift(this.encodedMessage, -wrongKey3);
        
        this.state = { 
            message: this.encodedMessage, 
            guessAnimationComplete: false,
            correctAnimationComplete: false,
            showFinalInfo: false,
            wrongKey1: wrongKey1,
            wrongKey2: wrongKey2,
            wrongKey3: wrongKey3
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            let decodedMessage;
            if (this.props.name) {
                decodedMessage = `CONGRATS, ${this.props.name.toUpperCase()}!`;
            } else {
                decodedMessage = "CONGRATS!";
            }
            let newMessage;
            if (this.state.correctAnimationComplete) {
                newMessage = decodedMessage;
            } else {
                this.encodedMessage = caesarShift(decodedMessage, this.correctKey);
                this.wrongMessage1 = caesarShift(this.encodedMessage, -this.state.wrongKey1);
                this.wrongMessage3 = caesarShift(this.encodedMessage, -this.state.wrongKey3);
                if (this.state.wrongKey2 === "Atbash") {
                    this.wrongMessage2 = atbashEncode(this.encodedMessage);
                } else {
                    this.wrongMessage2 = caesarShift(this.encodedMessage, -this.state.wrongKey2);
                }
                this.wrongInterval = 500/this.encodedMessage.length;
                newMessage = this.encodedMessage;
            }
            this.animating = false;
            this.setState ({
                message: newMessage,
                guessAnimationComplete: false
            });
        }
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

    handleGuessButtonClick = (e) => {
        this.setState({
            message: this.encodedMessage,
            guessAnimationComplete: false
        });
        if (e.target.id === "button1") {
            this.curAnimation = 1;
        } else if (e.target.id === "button2") {
            this.curAnimation = 2;
        } else {
            this.curAnimation = 3;
        }
        this.animating = true;
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
        this.animating = false;
        this.setState({
            message: this.encodedMessage,
            guessAnimationComplete: false
        });
    }

    handleShowCiphertext = () => {
        this.animating = false;
        this.setState ({
            message: this.encodedMessage,
            guessAnimationComplete: false
        });
    }

    handleRefreshOptions = () => {
        this.animating = false;
        let prevAndCurKeys = new Set([this.correctKey, this.state.wrongKey1, this.state.wrongKey2, this.state.wrongKey3]);
        let wrongKey1 = Math.floor(Math.random() * 25) + 1;
        let wrongKey2 = Math.floor(Math.random() * 25) + 1;
        let wrongKey3 = Math.floor(Math.random() * 25) + 1;
        while (prevAndCurKeys.has(wrongKey1)) {
            wrongKey1 = Math.floor(Math.random() * 25) + 1;
        }
        prevAndCurKeys.add(wrongKey1);
        while (prevAndCurKeys.has(wrongKey2)) {
            wrongKey2 = Math.floor(Math.random() * 25) + 1;
        }
        prevAndCurKeys.add(wrongKey2);
        while (prevAndCurKeys.has(wrongKey3)) {
            wrongKey3 = Math.floor(Math.random() * 25) + 1;
        }
        this.wrongMessage1 = caesarShift(this.encodedMessage, -wrongKey1);
        this.wrongMessage2 = caesarShift(this.encodedMessage, -wrongKey2);
        this.wrongMessage3 = caesarShift(this.encodedMessage, -wrongKey3);
        this.setState({
            wrongKey1: wrongKey1,
            wrongKey2: wrongKey2,
            wrongKey3: wrongKey3,
            guessAnimationComplete: false,
            message: this.encodedMessage

        });
    }

    replaceCharAt = (str, index, newChar) => {
        return str.substr(0, index) + newChar + str.substr(index + 1);
    }

    render() {
        let message = (<div className="is-size-3 my-5">{this.state.message}</div>);
        let finalmessage;
        if (this.state.guessAnimationComplete) {
            finalmessage = <Anime color="#c00" direction="alternate" duration="500" easing="easeInOutExpo">
                {message}
            </Anime>
        } else if (this.state.correctAnimationComplete){
            finalmessage = <Anime color="#6aa84f" direction="alternate" duration="500" easing="easeInOutExpo">
                {message}
            </Anime>
        } else {
            finalmessage = message;
        }

        let button1Shift = String.fromCharCode(this.state.wrongKey1 + 65);
        let button2Shift;
        if (this.state.wrongKey2 !== "Atbash") {
            button2Shift = String.fromCharCode(this.state.wrongKey2 + 65);
        } else {
            button2Shift = '';
        }
        let button3Shift = String.fromCharCode(this.state.wrongKey3 + 65);

        let name;
        if (this.props.name) {
            name = `${this.props.name},`;
        } else {
            name = '';
        }

        return (
            <div className="container container-min-height">
                <p className="is-size-4">{`So, ${name} you've learned 3 types of ciphers today! Can you decode what this message means?`}</p>
                {finalmessage}
                <DecodingOptions startCorrectDecodingAnimation={this.startCorrectDecodingAnimation} onStartCorrectDecodingClick={this.handleStartCorrectDecodingClick}
                    button1Shift={button1Shift} button2Shift={button2Shift} button3Shift={button3Shift} 
                    onRefreshOptions={this.handleRefreshOptions} onShowCiphertext={this.handleShowCiphertext} guessButtonOnClick={this.handleGuessButtonClick}/>
                {this.state.correctAnimationComplete && 
                    <Anime opacity={[0,1]} translateY="-2em" delay="1250">
                        <div className="is-size-4" style={{padding: '1.5em'}}>Crazy fast right?</div>
                    </Anime>
                }
            </div>
        );
    }
}

export default Decoding;