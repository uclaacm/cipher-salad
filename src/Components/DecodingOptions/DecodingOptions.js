import React, { Component } from 'react';
import Anime, {anime} from 'react-anime';

class DecodingOptions extends Component {
    constructor(props) {
        super(props);

        this.showDecodingOptions = true;

        this.state = {
            startCorrectDecoding: false
        };
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

        let button2Text;
        if (this.props.button2Shift) {
            button2Text = `Caesar - ${this.props.button2Shift}`;
        } else {
            button2Text = "Atbash";
        }

        if (this.state.startCorrectDecoding) {
            return (
                <Anime opacity={[1,0]} translateY='2em' delay={anime.stagger(100, {direction: 'reverse'})} complete={(anim) => {this.props.startCorrectDecodingAnimation(); this.showDecodingOptions = false;}}> 
                    <p className="has-text-left hint">Hint &mdash; here's a couple options you can try:</p>
                    <div className="buttons is-centered">
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold">{`Caesar - ${this.props.button1Shift}`}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" id="button2">{button2Text}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold">{`Caesar - ${this.props.button3Shift}`}</button>
                        </p>
                    </div>
                    <div className="buttons is-centered">
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold">refresh options</button>
                        </p>
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold">show ciphertext</button>
                        </p>
                    </div>
                    <p className="is-size-4 vertical-spacing-less-on-bottom">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    <button className="button is-large is-family-secondary has-text-weight-bold">Go</button>
                </Anime>
            );
        } 
        else {
            return (
                <Anime>
                    <p className="has-text-left hint">Hint &mdash; here's a couple options you can try:</p>
                    <div className="buttons is-centered">
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={e => {this.props.guessButtonOnClick(e);}} id="button1">{`Caesar - ${this.props.button1Shift}`}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={e => {this.props.guessButtonOnClick(e);}} id="button2">{button2Text}</button>
                        </p>
                        <p className="control">
                            <button className="button is-large is-family-secondary has-text-weight-bold" onClick={e => {this.props.guessButtonOnClick(e);}} id="button3">{`Caesar - ${this.props.button3Shift}`}</button>
                        </p>
                    </div>
                    <div className="buttons is-centered">
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold" onClick={this.props.onRefreshOptions}>refresh options</button>
                        </p>
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold" onClick={this.props.onShowCiphertext}>show ciphertext</button>
                        </p>
                    </div>
                    <p className="is-size-4 vertical-spacing-less-on-bottom">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    <button className="button is-large is-family-secondary has-text-weight-bold" onClick={this.startCorrectDecodingClick}>Go</button>
                </Anime>
            );
        }
    }
}

export default DecodingOptions;