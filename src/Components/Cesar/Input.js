import React, { Component } from "react";
import TextInput from "../TextInput.js";
import LetterBox from "../LetterBox.js";

class GetInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: null,
      right: null,
      shiftAmount: 0,
      offset: 0,
      inputStr: null,
      outputStr: null
    };
  }

  caesarShift = (plaintext) => {
    var c;
    let cipher = ""
    console.log(plaintext)
    for (var p = 0; p < plaintext.length; p++) {
      c = (plaintext.charCodeAt(p) + this.state.offset)
      if (c < 65) c += 26;
      if (c > 90) c -= 26;
      cipher += String.fromCharCode(c)
    }
    console.log(cipher)
    this.setState({ outputStr: cipher })
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value.toUpperCase()
    });
    this.caesarShift(e.target.value.toUpperCase())
  };
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

  incOffset = (n) => {
    var off = this.state.offset + n
    this.setState({ offset: off })
  }

  leftShift = () => {
    this.incOffset(-1)
  }

  rightShift = () => {
    this.incOffset(1)
  }

  // considering caesar cipher component to constantly track offset and input

  render() {
    return (
      <div class="container">
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
        <label htmlFor="input">Input your plain text: </label>
          <input class="input" type="text" id="inputStr" onChange={this.handleChange} />
        <br/>
        <p>Your ciphered text is: {this.state.outputStr}</p> 

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
