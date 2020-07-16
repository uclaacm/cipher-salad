import React from 'react';
import Anime from 'react-anime';
import CreateCipher from './CreateCipher';
import CrackCipher from './CrackCipher';

class ShareCipher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            otherHash: '',
            otherplain: 'Type here to guess your answer!',
            mode: '',
        };
    }

    goto = (mode) => {
        return () => {
            this.setState({
                mode: mode,
            });
        }
    }

    render() {
        if (this.state.mode === 'create') {
            return (
                <Anime opacity={[0,1]}>
                    <CreateCipher />
                    <button class='button is-large is-family-secondary has-text-weight-bold' onClick={this.goto('home')}>Go back</button>
                </Anime>
            );
        }
        if (this.state.mode === 'crack') {
            return (
                <Anime opacity={[0,1]}>
                    <CrackCipher />
                    <button class='button is-large is-family-secondary has-text-weight-bold' onClick={this.goto('home')}>Go back</button>
                </Anime>
            );
        }

        return (
            <>
                <h1 class='title'>Now then, let's play a game...</h1>
                <div class='row_space'>
                    <button class='button is-large is-family-secondary has-text-weight-bold' onClick={this.goto('create')}>Create a cipher!</button>
                    <button class='button is-large is-family-secondary has-text-weight-bold' onClick={this.goto('crack')}>Crack a cipher!</button>
                </div>
            </>
        );
    }
}

export default ShareCipher;