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
import Decoding from './Components/Decoding/Decoding.js';
import NameInput from './Components/NameInput/NameInput.js';
import Intro from './Components/Intro/Intro.js'
import AtbashIntro from './Components/AtbashIntro/AtbashIntro.js'
import VertNav from './Components/VertNav/VertNav.js';

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
      <VertNav navLinks={['title', 'intro', 'caesar', 'atbash', 'vigenere', 'recap', 'decoding', 'closing']} />
      
      <div id='title'>
        <Title />
      </div>
      <section id='intro' className="section">
        <Intro />
      </section>
      <section id='caesar' className="section">
        <Caesar />
      </section>
      <section id='atbash' className="section">
        <AtbashIntro />
        <AtbashInput />
      </section>
      <section id='vigenere' className="section">
        <Vigenere />
      </section>
      <section id='recap' className="section">
        <Typing strings={[
          'ciphers are cool',
          'xrksvih ziv xllo (atbash)',
          'DJQIFST BSF DPPM (caesar)', // shifted by one
          'mmnripc kvc msmv (vigenere)', // encoded by key "key"
          '******* *** ****'
        ]}/>
        <Recap />
        <Blackbox />
      </section>
      <section id='decoding' className="section">
        <NameInput handleSubmit={this.handleNameInputSubmit} />
        <Decoding name={this.state.name}/>
      </section>
      <section id='closing' className='section'>
        <Closing />
      </section>
    </div>
  );
  }
}

export default App;
