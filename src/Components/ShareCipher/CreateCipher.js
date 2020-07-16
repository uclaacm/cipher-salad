import React from 'react';

class CreateCipher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentHash: '',
            shamt: 0,
            plaintext: 'Type here to create a cipher!',
        };
    }

    handleShamt = (e) => {
        e.preventDefault();
        this.setState({
            shamt: Number(e.target.value),
        });
    }

    handleTextChange = (e) => {
        e.preventDefault();
        this.setState({
            plaintext: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8081/cipher', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              shamt: this.state.shamt,
              plaintext: this.state.plaintext,
          }),
        })
        .then( resp => resp.text() )
        .then( t => {
          this.setState({
            currentHash: t,
          })
        })
        .catch( () => console.log('whoops') );
    }

    render() {
        return (
            <div>
                <h1>Create a cipher!</h1>
                <p>Input your plaintext...</p>
                <input type='text' value={this.state.plaintext} onChange={this.handleTextChange} />
                <p>...then, choose your shift amount!</p>
                <input type='range' min='0' max='25' step='1' value={this.state.shamt} onChange={this.handleShamt} />
                <label>{this.state.shamt}</label>
                <button onClick={this.handleSubmit}>Create my cipher code!</button>
                {this.state.currentHash && <p>Share your cipher with the following code: <strong>{this.state.currentHash}</strong></p>}
            </div>
        );
    }
}

export default CreateCipher;