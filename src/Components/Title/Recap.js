import React from "react";
import Popup from "reactjs-popup";
import '../main.css';

const Base64 = () => (
    <Popup
      trigger={open => (
        <button className="button is-large is-family-secondary has-text-weight-bold">Base64</button>
      )}
      on="hover"
    >
      <span> if the alphabet contained numbers and symbols... </span>
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
                        Today we learned about three different ciphers: 
                        Caesar cipher shift the input by a certain amount; 
                        Atbash cipher reverse the letters; 
                        and Vigenere cipher encode every input with a specific key. 
                    </div>
                    </div>
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Computers are key to both encryption and decryption. 
                        In addition to the 3 ciphers, many more are used today 
                        thanks to how fast computers can crunch the combinations. 
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Many ciphers, similar to the Vigenere cipher, 
                        use keys, but with even more complex math. 
                        That’s where ciphers start to turn in cryptography. 
                    </div>
                    </div> 
                    <div className="columns is-vcentered container">
                    <div className="mid_font content column">
                        Today, you’ve made the first step in learning about them :)
                    </div>
                    </div> 
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