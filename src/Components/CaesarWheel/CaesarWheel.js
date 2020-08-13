import React, { Component } from "react";
import ReactDOM from 'react-dom';
import outerwheel from './outercipherwheel.png';
import innerwheel from './innercipherwheel.png';
import './caesarwheel.css'

class CaesarWheel extends Component {
    constructor(props) {
        super(props);

        this.angle = 0;
        let initOffset = this.props.offset ? this.props.offset * 360/26 : 0;
        this.state = {
            offset: initOffset,
        };
    }

    dragMouseDown = e => {
        e.preventDefault();
        e.target.style.cursor = "grabbing";

        let coords = this.adjustCoords(e.clientX, e.clientY);
        this.angle = this.atanDegrees(coords.adjustedX, coords.adjustedY);
        
        let section = ReactDOM.findDOMNode(this);
        section.onmouseup = this.dragMouseUp;
        section.onmousemove = this.dragMouseMove;
    }

    dragMouseMove = e => {
        let newCoords = this.adjustCoords(e.clientX, e.clientY);
        let newAngle  = this.atanDegrees(newCoords.adjustedX, newCoords.adjustedY);
        let newOffset = this.state.offset + (newAngle - this.angle);
        this.angle = newAngle;
        this.setState({offset: newOffset}); 
        
        if (this.props.onOffsetChange) {
            let caesarOffset = newOffset * 26/360;
            caesarOffset = Math.round(caesarOffset);
            this.props.onOffsetChange(caesarOffset);    
        }
    }

    dragMouseUp = () => {
        document.getElementById('outerwheel').style.cursor = "grab";
        let section = ReactDOM.findDOMNode(this);
        section.onmouseup = null;
        section.onmousemove = null;
    }
    
    //return client coordinates relative to the center of the wheel, which are used for calculating offset angle of wheel
    adjustCoords = (x, y) => {
        let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        let centerX = rect.left + rect.width/2;
        let centerY = rect.top + rect.height/2;
        let adjustedX = x - centerX;
        let adjustedY = y - centerY;
        return { adjustedX, adjustedY };
     }

    atanDegrees = (x, y) => {
        return Math.atan2(y, x)*180/Math.PI;
    }

    render() {
        return (
            <div className="container">
                <img
                    className="is-block center round cursor"
                    src={outerwheel}
                    alt="Outer wheel of the caesar cipher decoder."
                    style={{transform: 'rotate(' + this.state.offset + 'deg)'}}
                    onMouseDown={this.dragMouseDown}
                    id="outerwheel"
                />
                <img
                    className="is-overlay is-block center round"
                    src={innerwheel}
                    alt="Inner wheel of the caesar cipher decoder."
                    onMouseDown={e => e.preventDefault()}
                />
            </div>
        );
    }
}

export default CaesarWheel;