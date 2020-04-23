import React, { Component } from "react";
import TextInput from "../TextInput.js";
import LetterBox from "../LetterBox.js";
import { findByLabelText } from "@testing-library/react";
import './input.css';

class GetInput extends Component {
  constructor(props) {
    super(props);
    
    this.inputClicked = false; 
    let offset = Math.floor(Math.random() * 25) + 1;
    let inputStr = 'Click here to type!';
    let outputStr = this.caesarShift(inputStr.toUpperCase(), offset);
    
    this.state = {
      //left: null,
      //right: null,
      //shiftAmount: 0,
      offset: offset,
      inputStr: inputStr,
      outputStr: outputStr
    };
  }

  caesarShift = (plaintext, offset) => {
    var c;
    let cipher = ""
    let char;
    for (var p = 0; p < plaintext.length; p++) {
      char = plaintext[p];
      if (char.match(/[a-z]/i)) {
        c = (plaintext.charCodeAt(p) + offset)
        if (c < 65) c += 26;
        if (c > 90) c -= 26;
        char = String.fromCharCode(c)
      }
      cipher += char;
    }
    return cipher;
  }

  handleChange = e => {
    let value = e.target.value;
    let plaintext = value.toUpperCase();
    let ciphertext = this.caesarShift(plaintext, this.state.offset);
    this.setState({
      inputStr: value,
      outputStr: ciphertext
    });
  };

  handleClick = () => {
    if (!this.inputClicked) {
      this.inputClicked = true;
      this.setState({inputStr: '', outputStr: null});
    }
  }

  /*
  toggleDirection = e => {
    if (e.target.id === "left") {
      this.setState({
        left: "on",
        right: "off"
      });
    } else if (e.target.id === "right") {
      this.setState({
        left: "off",
        right: "on"
      });
    }
    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    var amount = parseInt(this.state.shiftAmount, 10);
    if (this.state.right === "on") amount = -amount;
    console.log("Shift amount: " + amount + "\n");
    var strOut = "";
    var str = this.state.inputStr;

    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      amount = amount % 26;
      if (c.match(/[a-z]/i)) {
        //if is letter
        let code = str.charCodeAt(i); // Get its code
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          console.log("before adding: ", code);
          code += amount;
          console.log("after: ", code);
          if (code < 65) code += 26;
          if (code > 90) code -= 26;
          console.log("after: ", code);
          c = String.fromCharCode(code);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          console.log("before adding: ", code);
          code += amount;
          if (code < 97) code += 26;
          if (code > 122) code -= 26;
          console.log("after: ", code);
          c = String.fromCharCode(code);
        }
      }
      strOut += c;
    }
    console.log("strOut is: " + strOut + "\n");
    this.setState({
      outputStr: strOut
    });
  };

  updatePlaintext = (plaintext) => {
    if (plaintext.length === 0)
      return
    this.setState({ inputStr: plaintext });
  }

  renderLetterBox = () => {
    let inp = true
    if(this.state.inputStr !== null && this.state.inputStr.length > 0) {
      inp = false
    }
    console.log(inp)
    return(
      <LetterBox default={inp} letters={this.state.inputStr}> </LetterBox>
    )
  }
*/
  incOffset = (n) => {
    let off = this.state.offset + n;
    let plaintext = document.getElementById('inputStr').value.toUpperCase();
    let ciphertext = this.caesarShift(plaintext, off); 
    this.setState({ outputStr: ciphertext, offset: off });
  }

  leftShift = () => {
    this.incOffset(-1)
  }

  rightShift = () => {
    this.incOffset(1)
  }

  // considering caesar cipher component to constantly track offset and input

  render() {
    /*
    let inputElement;
    if (this.inputClicked) {
      console.log('hi');
      inputElement = <input class="input" type="text" id="inputStr" onChange={this.handleChange}/>;
    }
    else {
      console.log('hello');
      inputElement = <input class="input" type="text" id="inputStr" value="Click here to type!" onChange={this.handleChange} onClick={this.handleClick}/>;
    }
    */

    return (
      <div class="container center-content">
        <p class="title">Caesar Cipher</p>
        <LetterBox default={true} offset={0}></LetterBox>
        <div class="field is-grouped">
            <button class="button is-light" onClick={this.leftShift}>
              <span class="icon is-small">
                <i class="fa fa-arrow-left"></i>
              </span>
            </button>
          <LetterBox default={true} offset={this.state.offset} debug={true}></LetterBox>
          <button class="button is-light" onClick={this.rightShift}>
            <span class="icon is-small">
              <i class="fa fa-arrow-right"></i>
            </span>
            </button>
        </div>
        <div class="columns increase-width">
          <div class="column is-half">
            <label htmlFor="input">Input your plain text: </label>
            <input class="input" type="text" id="inputStr" value={this.state.inputStr} onChange={this.handleChange} onClick={this.handleClick}/>
          </div>
          <div class="column is-half">
            <p>Your ciphered text is:</p>
            <p class= "has-text-weight-semibold is-size-4">{this.state.outputStr}</p>
          </div>
        </div>
        {/*
        <form onSubmit={this.handleSubmit}>
          <p class="subtitle">~Shift Direction~</p>
          <div class="field">
            <div class="control">
              <label htmlFor="leftShift">Left</label>
                <input
                  type="radio"
                  name="shift"
                  id="left"
                  onChange={this.toggleDirection}
                />
              <label htmlFor="rightShift">Right</label>
              <input 
                type="radio"
                name="shift"
                id="right"
                onChange={this.toggleDirection}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <p>~Shift Amount (1 to 26)~</p>
              <label htmlFor="amount">Amount: </label>
              <input class="input" type="text" id="shiftAmount" onChange={this.handleChange} />
            </div>
          </div>
          <p></p>
          <label htmlFor="input">Input your plain text: </label>
          <input class="input" type="text" id="inputStrR" onChange={this.handleChange} />
          <p></p>
          <button class="button is-primary">Submit</button>
        </form>
        <p>Your ciphered text is: {this.state.outputStr}</p>
        */}
      </div>
    );
  }
}
export default GetInput;
