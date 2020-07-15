import React, { Component } from "react";

const CAPITAL_A = 65;
const CAPITAL_Z = 90;

// want in state:
// - offset that can wrap around
// - alpha option
// - string that is to be mapped

// - if offset string index > length, - length
// - if offst string index < length, + length

function Letter ({ key, char }) {
    return(
    <div className="control" key={key}>
    <button className="button is-static is-medium" style={{width:58+'px'}}>
        <p>{char}</p>
    </button>
    </div>
    )
}

class LetterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: this.props.default,
            letters: this.props.default ? "" : this.props.letters,
            length: this.props.default ? 17 : this.props.length,
            offset: this.props.offset,
            debug: this.props.debug
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.default !== prevProps.default) {
            this.setState({ default: this.props.default })
        }
        if(this.props.letters !== prevProps.letters) {
            this.setState({ letters: this.props.default ? "" : this.props.letters})
        }
        if(this.props.offset !== prevProps.offset) { 
            this.setState({ offset: this.props.offset })
        }
    }

    adjustOffset(index, upper, lower) {
        if ( index > upper ) { index = index-26 }
        if ( index < lower ) { index = index+26 }
        return index
    } 

    writeLetters = () => {
        var i;
        let letterboxes = []
        if(this.state.default === true && !this.props.letters) {
            for (i = 0; i < this.state.length; i++) {
                let ascii = (i+(this.state.offset%26)+CAPITAL_A)
                ascii = this.adjustOffset(ascii, CAPITAL_Z, CAPITAL_A)
                letterboxes.push(<Letter key={i} char={String.fromCharCode(ascii)}></Letter>) 
            }
        }
        else {
            let letters = this.state.letters;
            while (letters.length < this.state.length && !this.state.repeat) {
                letters += " "
            }
            for (i = 0; i < this.state.length; i++) {
                let index = (i + this.state.offset) % (letters.length) 
                index = this.adjustOffset(index, letters.length, 0)
                let char = letters[index]
                letterboxes.push(<Letter key={i} char={char}></Letter>)
            }
        }
        return letterboxes
    }

    render() {
        console.log("letterbox offset: " + this.state.offset);
        return(
            <div className="field has-addons" style={{justifyContent: "space-evenly"}}> 
                {this.writeLetters()}
            </div>
        )
    }

}
export default LetterBox;