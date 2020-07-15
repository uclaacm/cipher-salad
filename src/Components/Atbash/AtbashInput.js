import React, { Component } from 'react'
import LetterBox from "../LetterBox.js"
import {atbashEncode} from '../../atbashEncode.js'

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
 
        var str = this.state.inputStr;
        let strOut = atbashEncode(str);
        
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