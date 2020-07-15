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
        this.messages = ["CONGRATS!", "WELCOME!", "ACCESS GRANTED!", "YOU'RE IN!", "NICE WORK!"]

        this.correctKey = (Math.floor(Math.random() * 25) + 1);
        console.log("correct key: "+this.correctKey);
        this.chooseMessage = (Math.floor(Math.random() * this.messages.length));
        let decodedMessage = this.messages[this.chooseMessage];
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
            showKeyBox: false,
            animateInKeyBox: false,
            wrongKey1: wrongKey1,
            wrongKey2: wrongKey2,
            wrongKey3: wrongKey3,
            correctDecodingAnimationKey: "A",
            animateOutFinalInfo: false,
            animateInDecodingOptions: false
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            let decodedMessage;
            let message = this.messages[this.chooseMessage];
            if (this.props.name) {
                decodedMessage = `${message.substr(0, message.length-1)}, ${this.props.name.toUpperCase()}!`;
            } else {
                decodedMessage = message;
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
                let key = this.state.correctDecodingAnimationKey;
                let newKey = String.fromCharCode(key.charCodeAt(0) + 1);
                this.setState({
                    message: shifted,
                    correctDecodingAnimationKey: newKey
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

    startKeyBoxAnimation = () => {
        this.setState({
            showKeyBox: true,
            animateInKeyBox: true
        }); 
    }

    startCorrectDecodingAnimation = () => {
        this.animating = true;
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        this.timerID = setInterval(this.correctDecodingAnimation, this.correctInterval);
        this.setState({animateInKeyBox: false});
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

    handleTryAnotherClick = () => {
        this.offset = 0;
        let prevCorrectKey = this.correctKey;
        let newCorrectKey = (Math.floor(Math.random() * 25) + 1);
        while (newCorrectKey === prevCorrectKey) {
            newCorrectKey = (Math.floor(Math.random() * 25) + 1);
        }
        this.correctKey = newCorrectKey;
        let prevMessage = this.chooseMessage;
        let newMessage = (Math.floor(Math.random() * this.messages.length));
        while (newMessage === prevMessage) {
            newMessage = (Math.floor(Math.random() * this.messages.length));
        }
        this.chooseMessage = newMessage;
        
        let message = this.messages[this.chooseMessage];
        let decodedMessage;
        if (this.props.name) {
            decodedMessage = `${message.substr(0, message.length-1)}, ${this.props.name.toUpperCase()}!`;
        } else {
            decodedMessage = message;
        }
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
        this.setState({
            animateOutFinalInfo: true,
            message: this.encodedMessage, 
            guessAnimationComplete: false,
            correctAnimationComplete: false,
            showKeyBox: false,
            animateInKeyBox: false,
            wrongKey1: wrongKey1,
            wrongKey2: wrongKey2,
            wrongKey3: wrongKey3
        });
    }

    animateInDecodingOptionsComplete = () => {
        this.setState({
            animateInDecodingOptions: false,
            correctDecodingAnimationKey: "A"
        });
    }

    replaceCharAt = (str, index, newChar) => {
        return str.substr(0, index) + newChar + str.substr(index + 1);
    }

    render() {
        let message = (<div className="is-size-3 my-5 is-inline-block">{this.state.message}</div>);
        let finalmessage;
        if (this.state.guessAnimationComplete) {
            finalmessage = <Anime color="#c00" direction="alternate" duration="500" easing="easeInOutExpo">
                {message}
            </Anime>;
        } else if (this.state.correctAnimationComplete){
            finalmessage = <Anime color="#6aa84f" direction="alternate" duration="500" easing="easeInOutExpo">
                {message}
            </Anime>;
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

        let keyBox = <div className="key-box is-inline-block px-3 py-1 is-size-5">{`key: ${this.state.correctDecodingAnimationKey}`}</div>;
        let finalKeyBox = null;
        if (this.state.animateInKeyBox) {
            finalKeyBox = <Anime opacity={[0,1]} translateY="-1em" complete={(anim) => {this.startCorrectDecodingAnimation();}}>
                {keyBox}
            </Anime>;
        } else if (this.state.showKeyBox) {
            finalKeyBox = <Anime>
                {keyBox}
            </Anime>
        } else if (this.state.animateOutFinalInfo) {
            finalKeyBox = <Anime opacity={[1,0]} translateY="2em" delay={300}>
                {keyBox}
            </Anime>
        }

        let finalInfo = null;
        if (this.state.animateOutFinalInfo) {
            finalInfo = <Anime opacity={[1,0]} translateY='2em' delay={anime.stagger(100, {direction: 'reverse'})} complete={(anim) => {this.setState({animateInDecodingOptions: true, animateOutFinalInfo: false})}}>
                <div className="is-size-4 pt-6">Crazy fast right?</div> 
                <div className="is-size-4 mt-4">And that was slowed down for demonstration; modern computers can run through all 25 shifts of the Ceasar Cipher ridiculously fast. That's why it's important to use a good cipher!</div>
                <button className="button is-medium is-family-secondary has-text-weight-bold mt-5">Try another message!</button>
            </Anime>
        } else if (this.state.correctAnimationComplete) {
            finalInfo = <Anime opacity={[0,1]} translateY="-2em" delay={anime.stagger(1000, {start: 1250})}>
                <div className="is-size-4 pt-6">Crazy fast right?</div> 
                <div className="is-size-4 mt-4">And that was slowed down for demonstration; modern computers can run through all 25 shifts of the Ceasar Cipher ridiculously fast. That's why it's important to use a good cipher!</div>
                <button className="button is-medium is-family-secondary has-text-weight-bold mt-5" onClick={this.handleTryAnotherClick}>Try another message!</button>
            </Anime>
        }

        return (
            <div className="container container-min-height">
                <p className="is-size-4">{`So, ${name} you've learned 3 types of ciphers today! Can you decode what this message means?`}</p>
                {finalmessage}
                <DecodingOptions startKeyBoxAnimation={this.startKeyBoxAnimation} onStartCorrectDecodingClick={this.handleStartCorrectDecodingClick}
                    button1Shift={button1Shift} button2Shift={button2Shift} button3Shift={button3Shift} 
                    onRefreshOptions={this.handleRefreshOptions} onShowCiphertext={this.handleShowCiphertext} guessButtonOnClick={this.handleGuessButtonClick}
                    startCorrectDecodingAnimation={this.startCorrectDecodingAnimation} animateIn={this.state.animateInDecodingOptions} animateInComplete={this.animateInDecodingOptionsComplete}/>
                {finalKeyBox}
                {finalInfo}
            </div>
        );
    }
}

export default Decoding;