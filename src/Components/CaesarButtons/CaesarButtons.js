import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
import './caesarbuttons.css'

class CaesarButtons extends Component {
    
    leftShift = () => {
        this.props.onOffsetChange(-1)
    }
    
    rightShift = () => {
        this.props.onOffsetChange(1)
    }

    render() {
        return (
            <div className="container center-content">
                <LetterBox default={true} offset={0}></LetterBox>
                <div className="field is-grouped">
                    <button className="button is-light" onClick={this.leftShift}>
                        <span className="icon is-small">
                            <i className="fa fa-arrow-left"></i>
                        </span>
                    </button>
                    <LetterBox default={true} offset={this.props.offset} debug={true}></LetterBox>
                    <button className="button is-light" onClick={this.rightShift}>
                        <span className="icon is-small">
                            <i className="fa fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}

export default CaesarButtons;