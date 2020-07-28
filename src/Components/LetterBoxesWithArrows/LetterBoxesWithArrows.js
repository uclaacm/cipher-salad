import React, { Component } from "react";
import LetterBox from "../LetterBox.js";

function LetterBoxesWithArrows(props) {
    let arrows = [];
    for (let i = 0; i < props.numArrows; i++) {
        arrows.push(<line x1={24+56.75*i} y1="5" x2={24+56.75*props.shift+56.75*i} y2="80" markerEnd="url(#arrowhead)" style={{fill:"none",stroke:"black",strokeWidth:3}} />);
    }

    return(
        <div>
            <LetterBox length={props.letterboxLength} letters={"ABCDEF"} offset={0} top={true}></LetterBox>
            <svg width="100%" height="90" xmlns="http://www.w3.org/2000/svg" style={{position: "relative", top: "16px", zIndex:1}}>
                <defs>
                    <marker id="arrowhead" refX="10" refY="10" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="20" orient="auto">
                        <polyline points="0,0 10,10, 0,20" style={{fill:"none",stroke:"black",strokeWidth:3}} />
                    </marker>
                </defs>
                {arrows}
            </svg>
            <LetterBox length={props.letterboxLength} letters={props.bottomLetters} offset={0}></LetterBox>
        </div>
    );
    }

export default LetterBoxesWithArrows;