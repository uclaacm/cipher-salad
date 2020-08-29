import React, { Component } from 'react';
import Anime, {anime} from 'react-anime';

class DecodingOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animateOut: false,
            render: true
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.animateIn !== prevProps.animateIn) {
            if (this.props.animateIn) {
                this.setState({
                    render: true
                });
            }
        }
    }

    startCorrectDecodingClick = () => {
        this.props.onStartCorrectDecodingClick();
        this.setState({
            animateOut: true
        });
    }

    render() {
        if (!this.state.render) {
            return null;
        }

        let button2Text;
        if (this.props.button2Shift) {
            button2Text = `Caesar - ${this.props.button2Shift}`;
        } else {
            button2Text = "Atbash";
        }

        if (this.state.animateOut) {
            return (
                <Anime opacity={[1,0]} translateY='2em' delay={anime.stagger(100, {direction: 'reverse'})} complete={(anim) => {this.setState({render: false, animateOut: false}); this.props.startKeyBoxAnimation();}}> 
                    <p className="has-text-left hint mb-2 is-size-5">Here's a couple options you can try:</p>
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
                    <div className="buttons is-centered mt-2">
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold">refresh options</button>
                        </p>
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold">show ciphertext</button>
                        </p>
                    </div>
                    <p className="mt-large">
                        Hint &mdash; if you know what a particular part of the ciphertext looks like in plaintext, you can use that information to figure out the shift amount,
                        or crack the cipher altogether! (This is what was used to break the Enigma Machine's encryption in WWII!)
                    </p>
                    <p className="is-size-4 mt-5 mb-1">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    <button className="button is-large is-family-secondary has-text-weight-bold">Crack the message!</button>
                </Anime>
            );
        } else if (this.props.animateIn) {
            return (
                <div className="mt-medium">
                    <Anime opacity={[0,1]} translateY="-2rem" delay={anime.stagger(100)} complete={(anim) => {this.props.animateInComplete();}}>
                        <p className="has-text-left hint mb-2 is-size-5">Here's a couple options you can try:</p>
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
                        <div className="buttons is-centered mt-2">
                            <p className="control">
                                <button className="button is-family-secondary has-text-weight-bold">refresh options</button>
                            </p>
                            <p className="control">
                                <button className="button is-family-secondary has-text-weight-bold">show ciphertext</button>
                            </p>
                        </div>
                        <p className="mt-large">
                            Hint &mdash; if you know what a particular part of the ciphertext looks like in plaintext, you can use that information to figure out the shift amount,
                            or crack the cipher altogether! (This is what was used to break the Enigma Machine's encryption in WWII!)
                        </p>
                        <p className="is-size-4 mt-5 mb-1">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                        <button className="button is-large is-family-secondary has-text-weight-bold">Crack the message!</button>
                    </Anime>
                </div>
            );
        } else {
            return (
                <Anime>
                    <p className="has-text-left hint mb-2 is-size-5">Here's a couple options you can try:</p>
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
                    <div className="buttons is-centered mt-2">
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold" onClick={this.props.onRefreshOptions}>refresh options</button>
                        </p>
                        <p className="control">
                            <button className="button is-family-secondary has-text-weight-bold" onClick={this.props.onShowCiphertext}>show ciphertext</button>
                        </p>
                    </div>
                    <p className="mt-large">
                        Hint &mdash; if you know what a particular part of the ciphertext looks like in plaintext, you can use that information to figure out the shift amount,
                        or crack the cipher altogether! (This is what was used to break the Enigma Machine's encryption in WWII!)
                    </p>
                    <p className="is-size-4 mt-5 mb-1">It might be tedious to decode messages on your own, but watch how fast a computer can crack this!</p>
                    <button className="button button-hover-border is-large is-family-secondary has-text-weight-bold" onClick={this.startCorrectDecodingClick}>Crack the message!</button>
                </Anime>
            );
        }
    }
}

export default DecodingOptions;