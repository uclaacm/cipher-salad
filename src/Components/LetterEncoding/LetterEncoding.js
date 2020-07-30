import React, { Component } from 'react'
import Anime from 'react-anime'

class LetterEncoding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLetter: false
        };
    }

    handleMouseEnter = () => {
        this.setState({
            showLetter: true
        });
    }

    render() {
        let boxStyle = {height: "2em"};
        let box = <button className="button is-static has-text-weight-bold is-family-secondary px-4 is-size-2" 
            style={boxStyle}>{this.props.encodedLetter}
        </button>;
        let finalBox = <Anime>{box}</Anime>;
        if (this.props.hoverReveal) {
            boxStyle = Object.assign(boxStyle, {color: 'rgba(0,0,0,0)'});
            if (this.state.showLetter) {
                finalBox = <Anime color={["rgba(0,0,0,0)","rgba(0,0,0,0.5)"]}>{box}</Anime>;
            } 
        }
        
        
        return (
            <div className="mb-5 is-flex" style={{justifyContent:"center"}}>
                <button className="button has-text-weight-bold is-family-secondary px-4 is-size-2" 
                    style={{height: "2em"}} onMouseEnter={this.handleMouseEnter}>{this.props.decodedLetter}
                </button>
                <svg width="110" height="80" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" refX="10" refY="10" markerUnits="userSpaceOnUse" 
                            markerWidth="12" markerHeight="20">
                            <polyline points="0,0 10,10, 0,20" style={{fill:"none",stroke:"black",strokeWidth:3}} />
                        </marker>
                    </defs>
                    <line x1="0" y1="40" x2="108" y2="40" markerEnd="url(#arrowhead)" 
                        style={{fill:"none",stroke:"black",strokeWidth:3}} />
                </svg>
                {finalBox}
            </div>
        );
    }
}

export default LetterEncoding;