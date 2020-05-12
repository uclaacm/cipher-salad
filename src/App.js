import React from 'react';
import './App.css';
import './App.sass';
import Title from "./Components/Title/Title.js";
import Closing from "./Components/Title/Closing.js";
import GetInput from './Components/Cesar/Input.js'
import AtbashInput from './Components/Atbash/AtbashInput.js'
import Vigenere from './Components/Vigenere/Vigenere.js'
import Caesar from './Components/Caesar/Caesar.js'

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
      <Closing />
    </div>
  );
  }
}

export default App;
