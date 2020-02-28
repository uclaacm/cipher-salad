<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetInput from './Components/Cesar/Input.js'
import AtbashInput from './Components/Atbash/AtbashInput.js'
=======
import React from "react";
import "./App.css";
import Title from "./Components/Title/Title";
import GetInput from "./Components/Cesar/Input.js";
>>>>>>> e0fc5191d5e071e6146413d69d1db3b06fe5c865

class App extends React.Component {
  handleInput = e => {};
  submitted = e => {};
  render = () => {
<<<<<<< HEAD
  return (
    <div className="App">
      <GetInput />
      <AtbashInput />
    </div>
  );
  }
=======
    return (
      <div className="App">
        <Title />
        <GetInput />
      </div>
    );
  };
>>>>>>> e0fc5191d5e071e6146413d69d1db3b06fe5c865
}

export default App;
