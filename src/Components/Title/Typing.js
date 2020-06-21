import React from "react";
import Typed from 'typed.js';
import './typed.css';

class Typing extends React.Component {
    componentDidMount() {
        const options = {
            strings: [
                'Ciphers', 
                'are',
                'very',
                'super',
                'extremely',
                'fun',
                'and',
                'amazing!',
                '**********'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
        };

        this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        this.typed.destroy();
    }
  
    render() {
        return (
            <div className="wrap">
            <div className="vertical-spacing"></div>
            <div className="vertical-spacing"></div>
                <div className="type-wrap">
                <span
                    className="mid_font container"
                    style={{ whiteSpace: 'pre' }}
                    ref={(el) => { this.el = el; }}
                />
                </div>
            </div>
        );
    }
}
  
export default Typing;
// Reference:
// https://jsfiddle.net/mattboldt/ovat9jmp/