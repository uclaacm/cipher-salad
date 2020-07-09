import React, { Component } from 'react';

class NameInput extends Component {
    constructor(props) {
        super (props);

        this.state = {
            name: ""
        };
    }

    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 class="title">
                            Enter your name
                        </h1>
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default NameInput;