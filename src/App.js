import React from 'react';
import './App.css';
import './App.sass';
import Title from "./Components/Title/Title.js";
import Closing from "./Components/Title/Closing.js";
import AtbashInput from './Components/Atbash/AtbashInput.js'
import Vigenere from './Components/Vigenere/Vigenere.js'
import Caesar from './Components/Caesar/Caesar.js'
import Recap from "./Components/Title/Recap.js";
import Typing from "./Components/Title/Typing.js";
import Blackbox from "./Components/Title/Blackbox.js";

class App extends React.Component {
  handleInput = e => {};
  submitted = e => {};
  render = () => {
  return (
    <div className="App">
      <Title />
      <section className="section">
        <Caesar />
      </section>
      <section className="section">
        <AtbashInput />
      </section>
      <section className="section">
        <Vigenere />
      </section>
      <Typing strings={[
        'ciphers are cool',
        'xrksvih ziv xllo (atbash)',
        'DJQIFST BSF DPPM (caesar)', // shifted by one
        'mmnripc kvc msmv (vigenere)', // encoded by key "key"
        '******* *** ****'
      ]}/>
      <Recap />
      <Blackbox />
      <Closing />
    </div>
  );
  }
}

export default App;
