import React, { Component } from "react";
import {caesarShift} from '../../caesarShift.js'

class GetInput extends Component {
  constructor(props) {
    super(props);
    
    this.firstClick = true;     
    this.state = {
      inputStr: 'Click here to type!'
    };
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
    let ciphertext = caesarShift(plaintext, this.props.offset);

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