import React, { Component } from "react";
import TextInput from "../TextInput.js";
import LetterBox from "../LetterBox.js";
import { string } from "prop-types";

const CAPITAL_A = 65;
const CAPITAL_Z = 90;

class Vigenere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputStr: "input",
            keyStr: "keyke",
            outputStr: "",
            cipherStr: ""
        }
    }

    handleSubmit = () => {

    }

    handleInputChange = e => {
        this.setState({
            inputStr: e.target.value.toUpperCase()
          });
    }

    handleKeyChange = e => {
        let plaintextlen = this.state.inputStr.length;
        console.log(e.target.value)
        let key = e.target.value.toUpperCase();
        let keylen = key.length+1;
        console.log(keylen)
        if(key === "") {
            this.setState({
                keyStr: ""
            });
            return
        }
        var i;
        for (i = 0; i < plaintextlen + 1; i++) {
            console.log(i)
            if(i > key.length) {
                console.log(key[(i - (keylen)) % keylen])
                key += key[(i - (keylen)) % keylen]
            }
        }
        console.log(key)
        this.setState({
            keyStr: key
        });
        console.log(this.state.keyStr)
    }

    vigenere = (input, key) => {
        console.log(key)
        let inCode = input.charCodeAt(0)
        let keyCode = key.charCodeAt(0) - CAPITAL_A + 1
        let outCode = inCode + keyCode
        let outchar = outCode > CAPITAL_Z ? String.fromCharCode(outCode - 26) : String.fromCharCode(outCode);
        return outchar
    }

    renderLetters = () => {
        console.log(this.state.inputStr)
        let plaintext = this.state.inputStr.toUpperCase();
        let key = this.state.keyStr.toUpperCase();
        let keylen = key.length+1;
        var i;
        console.log(plaintext.length)
        for (i = 0; i < plaintext.length + 1; i++) {
            console.log(i)
            if(i > key.length) {
                console.log(key[(i - (keylen)) % keylen])
                key += key[(i - (keylen)) % keylen]
            }
        }
        console.log(key)
        let ciphertext = ""
        for (i = 0; i < plaintext.length; i++) {
            ciphertext += this.vigenere(plaintext[i], key[i])
        }
        this.setState({
            cipherStr: ciphertext
        })
    }

    render() {
        return(
            <div className="container">
                <p class="title">Vigenere Cipher</p>
                <div className="columns">
                    <div className="column is-one-third">
                        <label htmlFor="inputStrr">Your message:</label>
                        <input class="input" name="inputStrr" placeholder="Your original message here" onChange={this.handleInputChange} />
                        <br/>
                        <label htmlFor="keyStr">Your key:</label>
                        <input class="input" name="keyStr" placeholder="Your key here" onChange={this.handleKeyChange} />
                        <p>Your cipher text is.... {}</p>
                        <button class="button" onClick={this.renderLetters}>Scramble it!</button>
                    </div>
                    <div className="column is-two-thirds">
                        <LetterBox default={false} length={11} offset={0} letters={this.state.inputStr}></LetterBox>
                        <LetterBox default={false} length={11} offset={0} letters={this.state.keyStr}></LetterBox>
                        <LetterBox default={false} length={11} offset={0} letters={this.state.cipherStr}></LetterBox>
                    </div>
                </div>
            </div>
        )
    }
}
export default Vigenere;
