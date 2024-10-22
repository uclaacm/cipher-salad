import React from "react";
import '../main.css';
import Anime from 'react-anime';

class Closing extends React.Component {

  animeProps() {
    let hoppy = {
      opacity: [0, 1],
      translateY: [0, 90],
      delay: (el, i) => i * 800
    }
    return (this.props.startAnimation) ? hoppy : { opacity: [0,0]}
  }

  render() {
    return (
      <div>
        <div className="container">
            <div className="column">
              <Anime {...this.animeProps()} >
                <div className="columns is-vcentered container">
                  <div className="is-size-3 content-custom column container">
                    Yay you’re a cipher chef now!
                  </div>
                </div>
                
                <div className="columns is-vcentered container">
                  <div className="is-size-3 content-custom column">
                  Ciphers are a key ingredient in the cryptography kitchen. 
                  Stay tuned to learn how ciphers turned into cryptography :OOO
                    <br /><br />
                  </div>
                </div> 
                </Anime>
            </div>
          </div>
          <div className="my-5"></div>
          <div className="container">
            <div className="column">
                <div className="columns is-vcenterd container">
                  <div className="column is-one-third">
                    <img src="/enigma.png" alt="enigma machine" className="img"/>
                  </div>
                  <div className="subtitle is-size-4 content-custom column is-two-thirds container">
                      Fun fact:
                      <br />
                      The Enigma machine in WW2 was actually just multiple layers of this type of Vigenere cipher!
                  </div>
                </div>
                <div className="columns is-vcentered my-5">
                  <div className="subtitle is-size-4 content-custom column is-two-thirds">
                      Other fun fact:
                      <br />
                      Any salad can be a caesar salad if you put it through the March of Ides!
                  </div>
                  <div className="column is-one-third">
                    <img src="/caesar_salad.jpg" alt="caesar salad" className="img" />
                  </div>
                </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Closing;
