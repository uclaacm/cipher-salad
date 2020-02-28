import React, { Component } from "react";

class GetInput extends Component {
  state = {
    left: null,
    right: null,
    shiftAmount: null,
    inputStr: null,
    outputStr: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>~Shift Direction~</p>
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
          <p>~Shift Amount (1 to 26)~</p>
          <label htmlFor="amount">Amount: </label>
          <input type="text" id="shiftAmount" onChange={this.handleChange} />
          <p></p>
          <label htmlFor="input">Input your plain text: </label>
          <input type="text" id="inputStr" onChange={this.handleChange} />
          <p></p>
          <button>Submit</button>
        </form>
        <p>Your ciphered text is: {this.state.outputStr}</p>
      </div>
    );
  }
}
export default GetInput;
