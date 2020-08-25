import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
import ShareCipher from './Components/ShareCipher/ShareCipher.js';
import AtbashIntro from './Components/AtbashIntro/AtbashIntro.js'
import VertNav from './Components/VertNav/VertNav.js';

function App() {
  const [name, setName] = useState("");

  return (
    <Router>
      <Switch>
        <Route path='/game' component={ShareCipher} />

        <Route path='/'>
          <div className="App">
            <VertNav navLinks={['intro', 'caesar', 'atbash', 'vigenere', 'recap', 'decoding', 'game-link', 'closing']} />
              
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
              <NameInput handleSubmit={n => setName(n)} />
              <Decoding name={name}/>
            </section>
            <section id='game-link' className='section'>
              <div className='container'>
                <p className='title is-size-3'>
                  Now that we've learned about a few ciphers and how our computers can crack them easily, let's try making and solving ciphers from our friends!
                </p>
                <Link
                  to='/game'
                  className='button is-large is-family-secondary has-text-weight-bold'
                >
                  Let's get started!
                </Link>
              </div>
            </section>
            <section id='closing' className='section'>
              <Closing />
            </section>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
