import React, { Component } from 'react'
import Anime, { anime } from 'react-anime'

    function LetterButton(props) {
        return (
            <div
                className="button button-height is-static has-text-weight-bold is-family-secondary px-4 is-size-2"
                style={props.shouldHandleMouseEnter ? {pointerEvents: "auto"} : {}}
                tabIndex={0}
                onMouseEnter={props.shouldHandleMouseEnter ? props.handleMouseEnter : null}
                onFocus={props.shouldHandleMouseEnter ? props.handleMouseEnter : null}
            >
                {props.children}
            </div>
        );
    }

class LetterEncoding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLetter: false
        };
    }

    handleMouseEnter = () => {
        if (!this.state.showLetter) {
            this.setState({
                showLetter: true
            });
            this.animateArrow();
        }
    }

    animateArrow = () => {
        anime({
            targets: [`#arrow${this.props.num}`],
            x2: '98%',
            duration: 800,
            easing: "easeOutCubic"
        });
    }

    render() {
        let initX2;
        let encodedLetter;
        let arrowHead = "url(#arrowhead)";
        if (this.props.hoverReveal) {
            initX2 = "0%";
            if (this.state.showLetter) {
                encodedLetter = <Anime opacity={[0,1]} duration="5000" delay={450}>{this.props.encodedLetter}</Anime>;
            } else {
                encodedLetter = '\u00A0';
                arrowHead = "";
            }
        } else {
            initX2 = "98%";
            encodedLetter = this.props.encodedLetter;
        }
        return (
            <div className="mb-5 is-flex center-content">
                <LetterButton 
                    shouldHandleMouseEnter={this.props.hoverReveal}
                    handleMouseEnter={this.handleMouseEnter}>
                    {this.props.decodedLetter}
                </LetterButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="25">
                    <defs>
                        <marker id="arrowhead" refX="10" refY="10" markerUnits="userSpaceOnUse" 
                            markerWidth="12" markerHeight="20" orient="auto">
                            <polyline points="0,0 10,10, 0,20" style={{fill:"none",stroke:"black",strokeWidth:3}} />
                        </marker>
                    </defs>
                    <line id={this.props.num ? `arrow${this.props.num}` : null} x1="0" y1="50%" x2={initX2} y2="50%" markerEnd={arrowHead} 
                        style={{fill:"none",stroke:"black",strokeWidth:3}} />
                </svg>
                <LetterButton 
                    shouldHandleMouseEnter={false}
                    handleMouseEnter={this.handleMouseEnter}>
                    {encodedLetter}
                </LetterButton>
            </div>
        );
    }
}

export default LetterEncoding;

