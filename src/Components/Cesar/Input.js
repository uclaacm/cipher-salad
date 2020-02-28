import React, { Component } from 'react'

class GetInput extends Component{
    state = {
        left: null,
        right: null,
        shiftAmount: null,
        inputStr: null,
        outputStr: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    toggleDirection = (e) => {
        if (e.target.id === 'left') {
            this.setState({
                left: 'on',
                right: 'off'
            })
        }
        else if (e.target.id === 'right') {
            this.setState({
                left: 'off',
                right: 'on'
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        var amount = parseInt(this.state.shiftAmount, 10);
        if(this.state.right === 'on') amount = -amount;
        var strOut = "";
        var str = this.state.inputStr;

        for(var i = 0; i < str.length; i++){
            var c = str[i];
            amount = amount % 26;
		    if (c.match(/[a-z]/i)) { //if is letter
                let code = str.charCodeAt(i); // Get its code
			    // Uppercase letters
			    if ((code >= 65) && (code <= 90)){
                    code += amount;
                    if(code < 65) code += 26;
                    if (code > 90) code -= 26;
                    c = String.fromCharCode(code);
                }
			    // Lowercase letters
			    else if ((code >= 97) && (code <= 122)){
                    code += amount;
                    if(code < 97) code += 26;
                    if (code > 122) code -= 26;
                    c = String.fromCharCode(code);
                }
		    }
		    strOut += c;
        }
        this.setState({
            outputStr: strOut
        })
    }
    render(){
        return(
            <div>
                <p>CESAR CIPHER:</p>
                <form onSubmit={this.handleSubmit}>
                    <p>~Shift Direction~</p>
                    <label htmlFor="leftShift">Left</label>
                    <input type="radio" name="shift" id="left" onChange={this.toggleDirection} />
                    <label htmlFor="rightShift">Right</label>
                    <input type="radio" name="shift" id="right" onChange={this.toggleDirection} />
                    <p>~Shift Amount (1 to 26)~</p>
                    <label htmlFor="amount">Amount: </label>
                    <input type="text" id="shiftAmount" onChange={this.handleChange} />
                    <p></p>
                    <label htmlFor="input">Input your plain text: </label>
                    <input type="text" id="inputStr" onChange={this.handleChange} />
                    <p></p>
                    <button>Submit</button>
                </form>
                <p>Your ciphered cesar text is: {this.state.outputStr}</p>
            </div>
        )
    }
}
export default GetInput