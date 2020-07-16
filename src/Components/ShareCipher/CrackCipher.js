import React from 'react';
import Anime from 'react-anime';

function InputHash(props) {
    return (
        <form onSubmit={props.complete}>
            <h1>Input a friend's cipher link!</h1>
            <input type='text' name='hash' />
            <button type='submit'>Load the cipher!</button>

            {props.getFailed &&
            <Anime opacity={[0,1]}>
                <p>Failed to get the cipher...</p>
            </Anime>
            }
        </form>
    );
}

class CrackCipher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            currentHash: '',
            shamt: 0,
            plaintext: '',
            getFailed: false,
        };
    }

    handleGetCipher = (e) => {
        e.preventDefault();
        console.log(e.target.elements['hash'].value);
        // TODO: get the cipher. Right now just fails by default.
        this.setState({
            getFailed: true,
        });
        return;
    }

    render() {
        switch (this.state.step) {
        case 0:
            return <InputHash complete={this.handleGetCipher} getFailed={this.state.getFailed} />
        case 1:
            break;
        case 2:
            break;
        default:
            return (
                <div>
                    <h1>Let's get cracking!</h1>
                    <p>Input your guess for the shift amount...</p>
                    <input type='range' min='0' max='25' step='1' value={this.state.shamt} onChange={this.handleShamt} />
                    <label>{this.state.shamt}</label>
                    <button onClick={this.handleSubmit}>Now, share your cipher!</button>
                    {this.state.currentHash && <p>Share your cipher with the following code: <strong>{this.state.currentHash}</strong></p>}
                </div>
            );
        }
    }
}

export default CrackCipher;