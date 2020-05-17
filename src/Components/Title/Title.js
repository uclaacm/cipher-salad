import React from "react";
import '../main.css';

class Title extends React.Component {
  render() {
    return (
      <div>
        <div className="page_wrap title_img">
          <div className="title_design"> What is Cryptography? </div>
          <div className="desc">
            The art of writing messages with a hidden meaning, or of writing and
            solving code
          </div>
        </div>
        <div className="page_wrap">
          <div className="paragraph"> 
              <div>
                What is encryption? 
                How does ZHOFRPH WR JUDYLWB IDOOV turn into WELCOME TO GRAVITY FALLS? 
                And how is that related to computers??  
              </div>
              <br />
              <div>
                Computers use cryptography all the time. 
                Humankind has encrypted messages since as early as 1500 B.C. 
                Let’s start from the beginning...
              </div>
          </div>
        </div>
        <div className="row_space">
          <a href="#caesar_cipher">
            <button class="button is-static is-large button-font">Caesar Cipher</button>
          </a>
          <a href="#atbash_cipher">
            <button class="button is-static is-large button-font">Atbash Cipher</button>
          </a>
          <a href="#vigenere_cipher">
            <button class="button is-static is-large button-font">Vigenere Cipher</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Title;
