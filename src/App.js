import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './App.sass';
import Title from "./Components/Title/Title";
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
    </div>
  );
  }
}

export default App;
