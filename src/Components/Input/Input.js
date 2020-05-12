import React, { Component } from "react";
//import TextInput from "../TextInput.js";
//import { findByLabelText } from "@testing-library/react";

class GetInput extends Component {
  constructor(props) {
    super(props);
    
    this.firstClick = true;     
    this.state = {
      //left: null,
      //right: null,
      //shiftAmount: 0,
      inputStr: 'Click here to type!'
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
        while (c < 65) c += 26;
        while (c > 90) c -= 26;
        char = String.fromCharCode(c)
      }
      cipher += char;
    }
    return cipher;
  }

  handleChange = e => {
    this.setState({
      inputStr: e.target.value
    });
  }

  handleClick = () => {
    if (this.firstClick) {
      this.firstClick = false;
      this.setState({inputStr: ''});
      document.getElementById('output').textContent = '';
    }
  }

  render() {
    let plaintext = this.state.inputStr.toUpperCase();
    let ciphertext = this.caesarShift(plaintext, this.props.offset);

    return (
      <div className="columns" style={{width: '100%'}}>
        <div className="column is-half">
          <label htmlFor="input">Input your plain text: </label>
          <input className="input" type="text" id="inputStr" value={this.state.inputStr} onChange={this.handleChange} onClick={this.handleClick}/>
        </div>
        <div className="column is-half">
          <p>Your ciphered text is:</p>
          <p className= "has-text-weight-semibold is-size-4" id="output">{ciphertext}</p>
        </div>    
      </div>
    );
  }
}
export default GetInput;

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
 
  // considering caesar cipher component to constantly track offset and input