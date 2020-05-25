import React from "react";
import '../main.css';

class Closing extends React.Component {
  render() {
    return (
      <div>
        <div className="page_wrap">
          <div className="paragraph content"> 
              <div>
                Yay you’re a cipher chef now!
              </div>
              <br />
              <div>
                Ciphers are a key ingredient in the cryptography kitchen. 
                Stay tuned to learn how ciphers turned into cryptography :OOO
              </div>
          </div>
          <div className="vertical-spacing"></div>
          <div className="vertical-spacing"></div>
          <div className="container">
            <div className="column">
                <div className="columns is-vcenterd">
                  <div className="column is-one-third">
                    <img src="/enigma.png" alt="A picture of Enigma machine" className="img"/>
                  </div>
                  <div className="subtitle mid_font content column is-two-thirds">
                      Fun fact:
                      <br />
                      The Enigma machine in WW2 was actually just multiple layers of this type of Vigenere cipher!
                  </div>
                </div>
                <div className="vertical-spacing"></div>
                <div className="columns is-vcentered">
                  <div className="subtitle mid_font content column is-two-thirds">
                      Other fun fact:
                      <br />
                      Any salad can be a caesar salad if you put it through the March of Ides!
                  </div>
                  <div className="column is-one-third">
                    <img src="/caesar_salad.jpg" alt="A picture of salad" className="img"/>
                  </div>
                </div>
                <div className="vertical-spacing"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Closing;
