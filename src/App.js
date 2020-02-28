import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Components/Title/Title";
import GetInput from './Components/Cesar/Input.js'
import AtbashInput from './Components/Atbash/AtbashInput.js'

class App extends React.Component {
  handleInput = e => {};
  submitted = e => {};
  render = () => {
  return (
    <div className="App">
      <Title />
      <GetInput />
      <AtbashInput />
    </div>
  );
  }
}

export default App;
