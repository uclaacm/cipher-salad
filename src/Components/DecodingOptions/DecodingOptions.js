import React, { Component } from 'react';
import Anime, {anime} from 'react-anime'

class DecodingOptions extends Component {
    constructor(props) {
        super(props);

        this.showDecodingOptions = true;

        this.state = {
            startCorrectDecoding: false
        }
    }

    startCorrectDecodingClick = () => {
        this.props.onStartCorrectDecodingClick();
        this.setState({
            startCorrectDecoding: true
        });
    }

    render() {
        if (!this.showDecodingOptions) {
            return null;
        }

        if (this.state.startCorrectDecoding) {
            return (
                <Anime opacity={[1,0]} translateY='2em' delay={anime.stagger(100, {direction: 'reverse'})} complete={(anim) => {this.props.startCorrectDecodingAnimation(); this.showDecodingOptions = false;}}> 
                    <p className="has-text-left hint">Hint &mdash; here's a couple options you can try:</p>
                    <div className="buttons is-centered">
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.props.button1OnClick}>{`Caesar - ${this.props.button1Shift}`}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.props.button2OnClick}>Atbash</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.props.button3OnClick}>{`Caesar - ${this.props.button3Shift}`}</button>
                        </p>
                    </div>
                    <p className="is-size-4 vertical-spacing-less-on-bottom">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.startCorrectDecodingClick}>Go</button>
                </Anime>
            );
        } 
        else {
            return (
                <div>
                    <p className="has-text-left hint">Hint &mdash; here's a couple options you can try:</p>
                    <div className="buttons is-centered">
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.props.button1OnClick}>{`Caesar - ${this.props.button1Shift}`}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.props.button2OnClick}>Atbash</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.props.button3OnClick}>{`Caesar - ${this.props.button3Shift}`}</button>
                        </p>
                    </div>
                    <p className="is-size-4 vertical-spacing-less-on-bottom">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.startCorrectDecodingClick}>Go</button>
                </div>
            );
        }
    }
}

export default DecodingOptions;