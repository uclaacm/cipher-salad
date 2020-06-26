import React, { Component } from 'react';
import Anime from 'react-anime'
import input from '../Input/Input.js'

class DecodingAnimation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0, 
            shiftedText: "DEF", //props.ciphertext
            shiftComplete: false
        };
    }

    componentDidMount() {
        let interval = 1/15 * 1000; // 1/this.props.finalOffset
        this.timerID = setInterval(this.shift, interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    shift = () => {
        if (this.state.offset < 15) { //this.props.finalOffset
            let shifted = input.caesarShift(this.state.shiftedText.toUpperCase(), -1);
            this.setState((state, props) => ({
                shiftedText: shifted,
                offset: state.offset + 1
            }));
        }
        else {
            this.setState({
                shiftComplete: true
            });
        }
    }

    render() {

        let shiftedText;
        if (this.state.shiftComplete) {
            shiftedText = <Anime color="red" direction="alternate">
                <div>{this.state.shiftedText}</div>
            </Anime>
        } else {
            shiftedText = (<div>{this.state.shiftedText}</div>);
        }
        
        return (
             shiftedText
         );
    }
}

export default DecodingAnimation;

/*
<Anime translateX="25" direction="alternate">
             <div>{this.state.shiftedText}</div>
         </Anime>
*/