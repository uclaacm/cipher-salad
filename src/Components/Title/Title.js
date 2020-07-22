import React from "react";
import '../main.css';

function Title(props) {
    return (
      <div>
        <div className="hero is-fullheight title_img">
          <div className="hero-body">
            <div className="container">
              <p className="title is-spaced is-family-secondary has-text-weight-bold has-text-white title_design">What is Cryptography?</p>
              <p className="title is-size-3 is-family-secondary has-text-weight-normal has-text-white desc container">
                The art of writing messages with a hidden meaning, or of writing and solving code
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="column">
              <div className="columns is-vcentered container">
                <div className="large_font content column container">
                  <br />
                  What is encryption? 
                  How does ZHOFRPH WR JUDYLWB IDOOV turn into WELCOME TO GRAVITY FALLS? 
                  And how is that related to computers??  
                </div>
              </div>
              <div className="columns is-vcentered container">
                <div className="large_font content column container">
                  Computers use cryptography all the time. 
                  Humankind has encrypted messages since as early as 1500 B.C. 
                  Let’s start from the beginning... 
                  <br /><br />
                 </div>
              </div> 
          </div>
        </div>
        <div className="row_space">
          <a href="#caesar_cipher">
            <button className="button is-large is-family-secondary has-text-weight-bold">Caesar Cipher</button>
          </a>
          <a href="#atbash_cipher">
            <button className="button is-large is-family-secondary has-text-weight-bold">Atbash Cipher</button>
          </a>
          <a href="#vigenere_cipher">
            <button className="button is-large is-family-secondary has-text-weight-bold">Vigenere Cipher</button>
          </a>
        </div>
      </div>
    );
}

export default Title;