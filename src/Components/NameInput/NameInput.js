import React, { Component } from 'react';

class NameInput extends Component {
    constructor(props) {
        super (props);

        this.state = {
            name: ""
        };
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.name)
    }

    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 class="title is-4">
                            Now that we've seen a few ciphers, let's take a look at how we can crack one!
                        </h1>
                        <h1 class="title is-4">
                            First, enter your name: 
                        </h1>
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="buttons is-centered">
                            <button className="button button-hover-border is-medium is-family-secondary has-text-weight-bold" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default NameInput;