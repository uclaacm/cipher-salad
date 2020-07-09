import React from "react";
import '../main.css';

function Title(props) {
    return (
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
    );
}

export default Title;