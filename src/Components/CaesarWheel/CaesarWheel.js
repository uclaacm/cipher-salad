import React, { Component } from "react";
import outerwheel from './outercipherwheel.png';
import innerwheel from './innercipherwheel.png';
import './caesarwheel.css'

class CaesarWheel extends Component {
    constructor(props) {
        super(props);

        this.angle = 0;

        let offset = this.props.offset * 360/26;
        this.state = {
            offset: offset
        };
    }

    dragMouseDown = e => {
        e.preventDefault();

        let coords = this.adjustCoords(e.clientX, e.clientY);
        this.angle = this.atanDegrees(coords.adjustedX, coords.adjustedY);
        
        let section = document.getElementById('caesar_cipher');
        section.onmouseup = this.dragMouseUp;
        section.onmousemove = this.dragMouseMove;
    }

    dragMouseMove = e => {
        let newCoords = this.adjustCoords(e.clientX, e.clientY);
        let newAngle  = this.atanDegrees(newCoords.adjustedX, newCoords.adjustedY);
        let newOffset = this.state.offset + (newAngle - this.angle);
        this.angle = newAngle;
        this.setState({offset: newOffset}); 
        
        let caesarOffset = newOffset * 26/360;
        caesarOffset = Math.round(caesarOffset);
        this.props.onOffsetChange(caesarOffset);
    }

    dragMouseUp = () => {
        let section = document.getElementById('caesar_cipher');
        section.onmouseup = null;
        section.onmousemove = null;
    }
    
    innerHandleMouseDown = e => {
        e.preventDefault();
    }

    adjustCoords = (x, y) => {
        //return client coordinates relative to the center of the wheel, which are used for calculating offset angle of wheel
        let wheel = document.getElementById('wheel');
        let rect = wheel.getBoundingClientRect();
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
                <img className="center round" id="wheel" src={outerwheel} alt="Outer wheel of the decoder; click and rotate to change the offset used in the Caesar cipher."
                    style={{transform: 'rotate(' + this.state.offset + 'deg)'}} onMouseDown={this.dragMouseDown} />
                <img className="is-overlay center round move-up" src={innerwheel} alt="Inner wheel of the decoder." onMouseDown={this.innerHandleMouseDown}/>
            </div>
        );
    }
}

export default CaesarWheel;