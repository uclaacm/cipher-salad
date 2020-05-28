import React, { Component } from 'react'
import LetterBox from "../LetterBox.js"

class Atbash extends Component{
    state = {
        inputStr: null,
        outputStr: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
 
        var strOut = "";
        var str = this.state.inputStr;
        var atbashCode = 0;

        for(var i = 0; i < str.length; i++){
            var c = str[i];
            if (c.match(/[a-z]/i)) {
                let code = str.charCodeAt(i)
                if ((code >= 65) && (code <= 90)){
                    code = code - 65;
                    atbashCode = (26 - code + 25)%26 + 65;
                    c = String.fromCharCode(atbashCode);
                }
			    // Lowercase letters
			    else if ((code >= 97) && (code <= 122)){
                    code = code - 97;
                    atbashCode = (26 - code + 25)%26 + 97;
                    c = String.fromCharCode(atbashCode);
                }
            }
            strOut += c;
        }
        console.log("strOut is: " + strOut + "\n");
        this.setState({
            outputStr: strOut
        })
    }

    backwardsAlpha= () => {
        var i;
        let letters = ""
        for(i = 25; i >= 0; i--) {
            letters+=String.fromCharCode(i+65);
        }
        console.log(letters)
        return letters
    } 

    render(){
        return(
            <div className="container" id="atbash_cipher">
            <p className="title">Atbash Cipher: </p>
                <LetterBox default={true} offset={0}></LetterBox>
                <LetterBox default={false} offset={0} length={17} letters={this.backwardsAlpha()}></LetterBox>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="input">Input your plain text: </label>
                    <input type="text" id="inputStr" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <p>Your ciphered Atbash text is: {this.state.outputStr}</p>
            </div>
        )
    }
}
export default Atbash