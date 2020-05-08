import React from 'react';
import './App.css';
import './App.sass';
import Title from "./Components/Title/Title.js";
import Closing from "./Components/Title/Closing.js";
import GetInput from './Components/Cesar/Input.js'
import AtbashInput from './Components/Atbash/AtbashInput.js'
import Vigenere from './Components/Vigenere/Vigenere.js'

class App extends React.Component {
  handleInput = e => {};
  submitted = e => {};
  render = () => {
  return (
    <div className="App">
      <Title />
      <section class="section">
        <GetInput />
      </section>
      <section class="section">
        <AtbashInput />
      </section>
      <section class="section">
        <Vigenere />
      </section>
      <Closing />
    </div>
  );
  }
}

export default App;
