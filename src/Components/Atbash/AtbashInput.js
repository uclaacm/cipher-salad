import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
import LetterBoxesWithArrows from "../LetterBoxesWithArrows/LetterBoxesWithArrows.js"
import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";
import { ReactComponent as Straight } from "./straight.svg";
import {atbashEncode} from '../../atbashEncode.js'

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
    console.log(this.state)

    var str = this.state.inputStr;
    let strOut = atbashEncode(str);
      
    console.log("strOut is: " + strOut + "\n");
    this.setState({
      outputStr: strOut
    });
  }

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
          <p className="subtitle">
            So in Caesar cipher, each letter in the alphabet turned into the
            letter x places after it.
          </p>
          <LetterBoxesWithArrows />
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
