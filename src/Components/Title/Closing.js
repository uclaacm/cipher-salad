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
          <div className="col">
              <div className="row_center">
                <img src="/enigma.png" alt="A picture of Enigma machine" className="image width30"/>
                <div className="mini_paragraph content">
                    Fun fact:
                    <br />
                    The Enigma machine in WW2 was actually just multiple layers of this type of cipher!
                </div>
              </div>
              <div className="row_center"></div>
              <div className="row_center">
                <div className="mini_paragraph content">
                    Other fun fact:
                    <br />
                    Any salad can be a caesar salad if you put it through the March of Ides!
                </div>
                <img src="/caesar_salad.jpg" alt="A picture of salad" className="image width30"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Closing;
