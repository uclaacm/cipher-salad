import React, { Component } from "react";
import LetterBox from "../LetterBox.js";
import Anime, {anime} from 'react-anime';

class LetterBoxesWithArrows extends Component {
    constructor(props){
        super(props);
        this.box = null;
        this.state = {

        };
    }

    handleClick = () => {
        this.box.style.backgroundColor = '#4CAF50';
    }

    render() {
        return(
            <div>
                <LetterBox default={true} offset={0} boxRef={el => {this.box = el}}></LetterBox>
                <div style={{height: "90px"}}></div>
                <LetterBox default={true} offset={0}></LetterBox>
                <button onClick={this.handleClick}>hmmm</button>
            </div>
        );
    }
}

export default LetterBoxesWithArrows;

/*
<div className="is-relative" style={{height:"90px", width: "960px", textAlign: "left"}}>
                <svg width={document.body.clientWidth} height={document.body.clientHeight} xmlns="http://www.w3.org/2000/svg" style={{position: "absolute",  zIndex:1}}>
                        <defs>
                            <marker id="arrowhead" refX="10" refY="10" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="20" orient="auto">
                                <polyline points="0,0 10,10, 0,20" style={{fill:"none",stroke:"black",strokeWidth:3}} />
                            </marker>
                        </defs>
                            <line x1="0" y1="0" x2="180" y2="80" markerEnd="url(#arrowhead)" style={{fill:"none",stroke:"black",strokeWidth:3}} />
                    </svg>
                </div>
*/