import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
import GetInput from '../Input/Input.js';
import { atbashEncode } from '../../atbashEncode.js';
import Anime, {anime} from 'react-anime';

const messagesToDecode = [
  atbashEncode("[ Getting the hang of this? ]"),
  atbashEncode("[ I think you could use a challenge ]"),
  atbashEncode("[ Ready for more? ]")
]

class Atbash extends Component {
  state = {
    inputStr: null,
    outputStr: null,
  };

  constructor(props) {
    super(props);
    this.timeouts = [ 0 ]
    this.state = {
      animateDecrypt: [false, false, false],
      messages: [
        atbashEncode("[ Getting the hang of this? ]"),
        atbashEncode("[ I think you could use a challenge ]"),
        atbashEncode("[ Ready for more? ]")
      ]
    }
  }

  componentWillUnmount() {
    for(let i in this.timeouts) {
      i = clearTimeout()
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

  putCharsInSpans = (string) => {
    let map = Array.prototype.map;
    let spans = map.call(string, char => {
        if (char === " ") {
            return <span>&nbsp;</span>
        } else {
            return <span>{char}</span>;
        }
    });
    return spans;
  }


  decryptHelper = (i, index) => {
    let original = this.state.messages[i]
    original = atbashEncode( original.substring(0, index+1)) + original.substring(index + 1);
    //original = original.substring(0, index) + atbashEncode(original[index]) + original.substring(index + 1);
    let newmsgs = Array.from(this.state.messages)
    newmsgs.splice(i, 1, original)
    console.log(newmsgs[i])
    this.setState({
      messages: newmsgs
    });
  }

  decrypt = (i) => {
    let original = this.state.messages[i]
    for (let index = 0; index !== original.length; index++) {
      this.timeouts.push(setTimeout(this.decryptHelper(i, index), index * 900))
    }
  }

  Ez = (i) => {
    return <div className="is-size-4 my-5 is-inline-block" id={i} onClick={() => this.decrypt(i)}>{this.state.messages[i]}</div>
  }

  animateMsg = (message, final=false) => {
    console.log(message)
    return(
      <div className="is-size-4 overlay is-inline-flex">
          <Anime 
              rotateY={final ? [-90, 0] : [0, 45]} 
              opacity={final ? [0, 1] : [1,0]} 
              duration={final ? "400" : "200" }
              delay={anime.stagger(50)}
              easing="easeOutSine">
                  {this.putCharsInSpans(message)}
          </Anime>
      </div>
    )
  }

  animateAt = (index) => {
    let newAnimateState = Array.from(this.state.animateDecrypt)
    newAnimateState.splice(index, 1, true)
    this.setState({
      animateDecrypt: newAnimateState
    })
  }

  render() {

    let finalCiphertext = ["", "", ""];
    let finalPlaintext = ["", "", ""];
    this.state.messages.forEach((el, i) => {
      if (this.state.animateDecrypt[i]) {
        finalCiphertext.splice(i, 1, this.animateMsg(el))
        finalPlaintext.splice(i, 1, this.animateMsg(atbashEncode(el), true))
        
      } else {
        finalCiphertext.splice(i, 1, <div className="overlay">{el}</div>);
        finalPlaintext.splice(i, 1, null);
      }
      console.log(finalCiphertext)
    })

    let transition;
    if(this.state.animateDecrypt[0] && this.state.animateDecrypt[1] && this.state.animateDecrypt[2]) {
      transition = <Anime translateX={[40, 0]} delay={300}>
      <p class="is-size-5">Not too shabby! Any message in Atbash cipher is translated exactly the same... but is that secure?</p>
      <br />
      <p class="is-size-5">What's a different way you could transform one letter to another? </p>
      <p class="is-size-5">Let's visit the Roman empire and see what kind of ciphers they've come up with...</p>
    </Anime>
    }
    else { transition = <p class="is-size-5"></p> }
    

    return (
      <div className="container">
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
        <br />
        <br />
        <div class="container">
          <p class="is-size-3">
            Can you crack these messages?
          </p>
          <div class="columns">
            <div class="column is-half" display="flex">
              {finalCiphertext.map((v, i) => 
                <div className="column is-half">
                  <div className="is-size-4 my-5 is-inline-block" id={i} onClick={() => this.animateAt(i)}>{v}</div>
                  <div className="is-size-4 my-5 is-inline-block" key={"plaintext"+i}>{finalPlaintext[i]}</div> 
                </div>
               )}
               {/*this.state.messages.map((message) => this.Ez(this.state.messages.indexOf(message)))*/}
            </div>
              <div class="column is-half">
                <br />
                {transition}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Atbash;
