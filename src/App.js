import React from 'react';
import './App.css';
import './App.sass';
import Title from "./Components/Title/Title.js";
import Closing from "./Components/Title/Closing.js";
import AtbashInput from './Components/Atbash/AtbashInput.js';
import Vigenere from './Components/Vigenere/Vigenere.js';
import Caesar from './Components/Caesar/Caesar.js';
import Decoding from './Components/Decoding/Decoding.js';
import NameInput from './Components/NameInput/NameInput.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  handleNameInputSubmit = (name) => {
    this.setState({
      name: name
    });
  }

  render = () => {
  return (
    <div className="App">
      <Title />
      <NameInput handleSubmit={this.handleNameInputSubmit} />
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
        <Decoding name={this.state.name}/>
      </section>
      <Closing />
    </div>
  );
  }
}

export default App;
