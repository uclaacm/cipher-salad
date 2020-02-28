import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetInput from './Components/Cesar/Input.js'
import AtbashInput from './Components/Atbash/AtbashInput.js'

class App extends React.Component{
  
  handleInput = (e) => {

  }
  submitted =(e) => {

  }
  render = () => {
  return (
    <div className="App">
      <GetInput />
      <AtbashInput />
    </div>
  );
  }
}

export default App;
