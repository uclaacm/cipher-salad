import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
import LetterBoxesWithArrows from "../LetterBoxesWithArrows/LetterBoxesWithArrows.js"
import GetInput from '../Input/Input.js'

class Atbash extends Component {
  state = {
    inputStr: null,
    outputStr: null,
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
        <div className="columns is-vcentered is-variable is-8 mb-5">
          <div className="column is-two-thirds">
            <LetterBoxesWithArrows 
              numArrows={5} 
              shift={3}
              letterboxLength={11} 
              bottomLetters={"ABCDEF"}/>
          </div>
          <div className="column">
            <p className="is-size-5">
              So in Caesar cipher, each letter in the alphabet turned into the
              letter x places after it.
            </p>
          </div>
        </div>
        <div className="columns is-vcentered is-variable is-8 mb-5">
          <div className="column">
              <p className="is-size-5">
                A group of Hebrew people thought they could do the Greeks one better, and
                flipped their alphabet so they could just do this:
              </p>
            </div>
          <div className="column is-two-thirds">
            <LetterBoxesWithArrows 
              numArrows={6} 
              shift={0} 
              letterboxLength={11}
              bottomLetters={"ZYXWVU"}/>
          </div>
        </div>
          <p className="is-size-5 mb-6">
            This is the Atbash cipher! It came from Hebrew cryptographers, but
            we can use it in English too. Try it yourself!
          </p>
        <p class="title">Atbash Cipher: </p>
        <LetterBox default={true} 
          offset={0}></LetterBox>
        <LetterBox
          default={false}
          offset={0}
          length={17}
          letters={this.backwardsAlpha()}
        ></LetterBox>
        <GetInput
            cipher="atbash" />
        
      </div>
    );
  }
}
export default Atbash;
