import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";
import { ReactComponent as Straight } from "./straight.svg";

const divStyle = {
  padding: "40px",
};

class Atbash extends Component {
  state = {
    inputStr: null,
    outputStr: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    var strOut = "";
    var str = this.state.inputStr;
    var atbashCode = 0;

    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      if (c.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          code = code - 65;
          atbashCode = ((26 - code + 25) % 26) + 65;
          c = String.fromCharCode(atbashCode);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          code = code - 97;
          atbashCode = ((26 - code + 25) % 26) + 97;
          c = String.fromCharCode(atbashCode);
        }
      }
      strOut += c;
    }
    console.log("strOut is: " + strOut + "\n");
    this.setState({
      outputStr: strOut,
    });
  };

  backwardsAlpha = () => {
    var i;
    let letters = "";
    for (i = 25; i >= 0; i--) {
      letters += String.fromCharCode(i + 65);
    }
    console.log(letters);
    return letters;
  };

  render() {
    return (
      <div className="container">
        <div className="vertical-spacing">
          <p className="subtitle">
            So in Caesar cipher, each letter in the alphabet turned into the
            letter x places after it.
          </p>
          <LetterBox default={true} length={11} offset={0}></LetterBox>
          <div classname="row">
            <Arrow />
            <Arrow />
            <Arrow />
            <Arrow />
            <Arrow />
          </div>
          <LetterBox default={true} offset={0} length={17}></LetterBox>
          <br />
          <p className="subtitle">
            Some Hebrew guy thought he could do the Greeks one better, and
            flipped his alphabet so they could just do this:
          </p>
          <LetterBox default={true} offset={0} length={11}></LetterBox>
          <div>
            <Straight />
            <Straight />
            <Straight />
            <Straight />
            <Straight />
          </div>
          <LetterBox
            default={false}
            offset={0}
            length={17}
            letters={this.backwardsAlpha()}
          >
            {" "}
          </LetterBox>
          <p className="subtitle">
            {" "}
            This is the Atbash cipher! It came from Hebrew cryptographers, but
            we can use it in English too.
          </p>
          <p className="subtitle"> Try it yourself! </p>
        </div>
        <p class="title">ATBASH CIPHER: </p>
        <LetterBox default={true} offset={0}></LetterBox>
        <LetterBox
          default={false}
          offset={0}
          length={17}
          letters={this.backwardsAlpha()}
        ></LetterBox>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input">Input your plain text: </label>
          <input type="text" id="inputStr" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <p>Your ciphered Atbash text is: {this.state.outputStr}</p>
      </div>
    );
  }
}
export default Atbash;
