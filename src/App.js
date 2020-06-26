import React from 'react';
import './App.css';
import './App.sass';
import Title from "./Components/Title/Title.js";
import Closing from "./Components/Title/Closing.js";
import AtbashInput from './Components/Atbash/AtbashInput.js'
import Vigenere from './Components/Vigenere/Vigenere.js'
import Caesar from './Components/Caesar/Caesar.js'
import Decoding from './Components/Decoding/Decoding.js'

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
      <section>
        <Decoding />
      </section>
      <Closing />
    </div>
  );
  }
}

export default App;
