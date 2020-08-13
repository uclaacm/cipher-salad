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
            animateMessageOut: false,
            animateMessageIn: false,
        };
    } 

    handleOffsetChange = (n) => {
        let off = this.state.offset + n;
        this.setState({ offset: off });
      }

      handleOffsetChangeWheel = (n) => {
          this.setState({ offset: n });
      }
    /*
    handleMessageClick = () => {
        this.setState({message: "Brutus homie what is up"});
        if (this.timerID) {
            clearInterval(this.timerID);
        }
        this.curChar = 0;
        this.timerID = setInterval(() => {
            if (this.curChar < this.state.message.length) {
                let newMessage = this.replaceCharAt(this.state.message, this.curChar, "EUXWXV KRPLH ZKDW LV XS"[this.curChar]);
                this.setState({message: newMessage});
                this.curChar++;
            }
        }, 45);
    }

    replaceCharAt = (str, index, newChar) => {
        return str.substr(0, index) + newChar + str.substr(index + 1);
    }
    */
    putCharInSpan = (char) => {
        if (char === " ") {
            return <span>&nbsp;</span>
        } else {
            return <span>{char}</span>;
        }
    }
    
    render() {
        let message;
        if (this.state.animateMessageOut) {
            let map = Array.prototype.map;
            let chars = map.call("Brutus homie what is up", char => {

            });


            message = <Anime rotateY={[45]} delay={anime.stagger(50)} complete={(anim) => {this.setState({animateMessageOut: false, animateMessageIn: true})}}>{chars}</Anime>
        } else if (this.state.animateMessageIn) {
            let map = Array.prototype.map;
            let chars = map.call("EUXWXV KRPLH ZKDW LV XS", char => this.putCharInSpan(char));
            message = <Anime>{chars}</Anime>
        } else {
            message = <Anime>
                Brutus come on man
            </Anime>
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
                            <img src={caesar} alt="Caesar"/>
                        </div>
                        <div className="column columns is-centered">
                            <div className="column is-four-fifths">
                                <p className="is-size-5">
                                    So, he writes a note in code. Each A is turned to D, B turned to 
                                    E&mdash;every letter "shifts" to the letter 3 places after it in the 
                                    alphabet.
                                </p>
                                <button 
                                    className="button is-relative is-medium message-button has-background-grey-light has-text-black"
                                    onClick={() => {this.setState({animateMessageOut: true})}}>
                                    <div className="">Brutus homie what is up</div> {/*is-overlay*/}
                                </button>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <img src={brutus} alt="Brutus"/>
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