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
            inputStr: "INPUT",
            keyStr: "KEYKE",
            cipherStr: "SRNEX"
        }
    }

    vigenere = (input, key) => {
        let inCode = input.charCodeAt(0)
        let keyCode = key.charCodeAt(0) - CAPITAL_A
        let outCode = inCode + keyCode
        let outchar = outCode > CAPITAL_Z ? String.fromCharCode(outCode - 26) : String.fromCharCode(outCode);
        return outchar
    }

    renderLetters = () => {
        let plaintext = this.state.inputStr.toUpperCase();
        let key = this.state.keyStr.toUpperCase();
        let keylen = key.length+1;
        var i;

        for (i = 0; i < plaintext.length + 1; i++) {
            if(i > key.length) {
                key += key[(i - (keylen)) % keylen]
            }
        }
        let ciphertext = ""
        for (i = 0; i < plaintext.length; i++) {
            ciphertext += this.vigenere(plaintext[i], key[i])
        }
        this.setState({
            cipherStr: ciphertext
        })
    }

    updateState = (inputid, keyid) =>{
        let plaintextlen = inputid.length;
        let key = keyid.toUpperCase();
        let keylen = key.length;
        if(key === "") {
            this.setState({
                inputStr: inputid.toUpperCase(),
                keyStr: this.state.keyStr,
            }, function(){this.renderLetters();}); // 
            return
        }
        if(inputid === "") {
            this.setState({
                inputStr: this.state.inputStr,
                keyStr: key,
            }, function(){this.renderLetters();});
            return
        }
        if(keylen < plaintextlen){ //make keys wrap around itself
            var j = 0;
            for (var i = 0; i < plaintextlen+1; i++) {
                if(i > key.length) {
                    if(j === keylen){j = 0;}
                    key += key[j];
                    j +=1;
                }
            }
            console.log("key: " + this.state.keyStr);
            console.log(plaintextlen+" "+keylen);
        }
        if(keylen > plaintextlen) { key = key.slice(0, plaintextlen);} 
        this.setState({
            keyStr: key,
            inputStr: inputid.toUpperCase(),
        }, function(){
            this.renderLetters();
        });
    }

    update = () =>{
        let inputid = document.getElementById('inputID').value
        let keyid = document.getElementById('keyID').value
        if(inputid !== this.state.inputStr || keyid !== this.state.keyStr){
            this.updateState(inputid, keyid);
        }
    }

    render() {
        return(
            <div className="container" id="vigenere_cipher">
                <p className="title">Vigenere Cipher</p>
                <div className="columns">
                    <div className="column is-one-third">
                        <label htmlFor="inputStrr">Your message:</label>
                        <input className="input" name="inputStrr" id="inputID" placeholder="Your original message here" onChange={this.update} />
                        <br/>
                        <label htmlFor="keyStr">Your key:</label>
                        <input className="input" name="keyStr" id="keyID" placeholder="Your key here" onChange={this.update} />
                        <br/>
                        <br/>
                        <p>Your cipher text is.... {}</p>
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
