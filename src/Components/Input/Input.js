import React, { Component } from "react";

class GetInput extends Component {
  constructor(props) {
    super(props);
    
    this.firstClick = true;     
    this.state = {
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