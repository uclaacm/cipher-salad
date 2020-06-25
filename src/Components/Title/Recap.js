import React from "react";
import Popup from "reactjs-popup";
import '../main.css';

const Base64demo = () => (
  <Popup
    trigger={open => (
      <button className="is-large is-family-secondary has-text-weight-bold">example</button>
    )}
    on="hover"
  >
  <span> 
    Base64 takes 6 digits binary input and convert it to a letter. 
    For example, 100110 will be converted to number 38: 
    1*2<sup>5</sup>  + 0*2<sup>4</sup> + 0*2<sup>3</sup> + 1*2<sup>2</sup> + 1*2<sup>1</sup> + 0*2<sup>0</sup>
     = 32+0+0+4+3+0.
    Then, based on Base64 encoding table, 38 is equivalent to the letter 'm'.
  </span>
  </Popup>
);

const Base64 = () => (
    <Popup
      trigger={open => (
        <button className="button is-large is-family-secondary has-text-weight-bold">Base64</button>
      )}
      on="hover"
    >
      <span> if the alphabet contained numbers and symbols... </span>
      <Base64demo />
    </Popup>
);

const Hash = () => (
    <Popup
      trigger={open => (
        <button className="button is-large is-family-secondary has-text-weight-bold">Hash</button>
      )}
      on="hover"
    >
      <span> a type of crypto “function” like vigenere cipher, using a random key </span>
    </Popup>
);

const Aes = () => (
    <Popup
      trigger={open => (
        <button className="button is-large is-family-secondary has-text-weight-bold">AES</button>
      )}
      on="hover"
    >
      <span> the US standard of crypto today! </span>
    </Popup>
);

class Recap extends React.Component {
    render() {
        return (
        <div>
            <div className="container">
                <div className="column">
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column container">
                        <br />
                        Today we learned about 3 different ciphers: 
                        1️⃣ Caesar cipher shift the input by a certain amount; 
                        2️⃣ Atbash cipher reverse the letters; 
                        and 3️⃣ Vigenere cipher encode every input with a specific key🔑. 
                    </div>
                    </div>
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Computers💻 are key to both encryption🔒 and decryption🔓. 
                        In addition to the 3 ciphers, many more are used today 
                        thanks to how fast⏱ computers can crunch the combinations. 
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Many ciphers, similar to the Vigenere cipher, 
                        use keys🔑, but with even more complex math ➗➖✖️➕. 
                        That’s where ciphers start to turn in cryptography🔐. 
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Today, you’ve made the first step in learning about them! 🎉 Congrats 🎉
                    </div>
                    </div>
                    <div className="subtitle is-6"> ~ Hover to learn more ~ </div> 
                </div>
                </div>
                <div className="row_space">
                    <Base64 />
                    <Hash />
                    <Aes />
                </div>
                <div className="vertical-spacing"></div>
            </div>
        );
    }
}

export default Recap;
// Reference:
// https://react-popup.elazizi.com/react-tooltip/