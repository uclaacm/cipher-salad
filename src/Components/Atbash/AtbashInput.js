import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
//import LetterBoxesWithArrows from "../LetterBoxesWithArrows/LetterBoxesWithArrows.js";
import GetInput from '../Input/Input.js';
//import Anime, {anime} from 'react-anime';
import {atbashEncode} from '../../atbashEncode.js';
//import '../decoding.css';

class Atbash extends Component {
  state = {
    inputStr: null,
    outputStr: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      messages: [
        atbashEncode("[ Getting the hang of this? ]"),
        atbashEncode("[ I think you could use a challenge ]"),
        atbashEncode("[ Ready for more? ]")
      ]
    }
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

  decryptHelper = (i, index) => {
    let  original = this.state.messages[i]
    original = atbashEncode(original.substring(0, index+1)) + original.substring(index+1);
    let newmsgs = Array.from(this.state.messages)
    newmsgs.splice(i, 1, original)
    console.log(newmsgs[i])
    this.setState({
        messages: newmsgs
    });
  }

  decrypt = (i) => {
    let original = this.state.messages[i]
    for (let index = 0; index != original.length; index++) {
      setTimeout(this.decryptHelper(i, index), i*500)
    }
  }

  Ez = (i) => {
    return <div className="is-size-4 my-5 is-inline-block" id={i} onClick={() => this.decrypt(i)}>{this.state.messages[i]}</div>
  }

  render() {
    return (
      <div className="container">
        <p className="is-size-5 mb-6">
          This is the Atbash cipher! It came from Hebrew cryptographers, but
          we can use it in English too. Try it yourself!
        </p>
        <br></br>
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
        <br/>
        <br/>
        <div class="container">
          <p class="is-size-3">
            Can you crack these messages?
          </p>
          <div class="columns">
            <div class="column">
              {this.state.messages.map((message) => this.Ez(this.state.messages.indexOf(message)))} 
            </div>
            <div class="column">
              <br/>
              <p class="is-size-5">Not too shabby! Any message in Atbash cipher is translated exactly the same... but is that secure?</p>
              <br/>
              <p class="is-size-5">What's a different way you could transform one letter to another? </p>
              <p class="is-size-5">Let's visit the Roman empire and see what kind of ciphers they've come up with...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Atbash;
