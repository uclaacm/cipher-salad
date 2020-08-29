import React, { Component } from "react";
import '../main.css';
import './title.css'
import laptop from './laptop.svg';

class Title extends Component {
  constructor(props) {
    super(props);
    
    this.curCiphertext = 0;
    this.ciphertexts = ["C VGCEJ NC NGCTPKPI NCD", "Z GVZXS OZ OVZIMRMT OZY", "K XCKGF VE JOEPXMLQ PYL"];

    this.state = {
      subtitle: this.ciphertexts[0],
    };
  }

  //change subtitle text so that every other message displayed is the plaintext,
  //and the ciphertext alternates between the three ciphers (caesar w/ key="C", atbash, vigenere w/ key="key")
  componentDidMount() {
    setTimeout(() => {
      this.timerIDSetPlaintext = setInterval(() => {
        this.curCiphertext = (this.curCiphertext + 1) % 3;
        this.setState({subtitle: this.ciphertexts[this.curCiphertext]})
      }, 8000);
    }, 2500);
    setTimeout(() => {
      this.setState({subtitle: "a Teach LA learning lab"});
      this.timerIDSetCiphertext = setInterval(() => {
        this.setState({subtitle: "a Teach LA learning lab"});
      }, 8000);
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.timerIDSetPlaintext);
    clearInterval(this.timerIDSetCiphertext);
  }

  render() {
    return (
      <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className= "columns is-vcentered">
                <div className="column is-relative">
                  <img src={laptop} alt="Laptop displaying title"/>
                  <div className="is-overlay is-family-monospace position-text">
                    <div className="is-inline-block">
                      <div className="typing-animation typing-title">
                        <h1 className="title-size has-text-weight-bold title-color">cipher salad</h1>
                      </div>
                    </div>
                    <br/>
                    <div className="is-inline-block">
                      <div className="typing-animation typing-subtitle">
                        <h2 className="is-size-5 has-text-weight-bold has-text-white">{this.state.subtitle}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column has-text-right">
                  <h3 className="title is-spaced is-family-secondary has-text-weight-bold">what is <span className="underline">cryptography</span>?</h3>  
                  <h4 className="subtitle is-family-secondary">
                      To answer this question, we'll explore the history of sending secret messages and why things get funky when you introduce computers!
                  </h4>
                  <a href="#intro" className="button is-large">Let's Go</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Title;