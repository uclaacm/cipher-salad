import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
import AtbashIntro from './Components/AtbashIntro/AtbashIntro.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleNameInputSubmit = (name) => {
    this.setState({
      name: name,
    });
  }

  render = () => {
    return (
      <Router>
        <Switch>
          <Route path='/game' component={ShareCipher} />

          <Route path='/'>
            <div className="App">
              <Title />
              <Intro />
              <section className="section">
                <Caesar />
              </section>
              <section className="section">
                <AtbashIntro />
                <AtbashInput />
              </section>
              <section className="section">
                <Vigenere />
              </section>
              <Typing strings={[
                'ciphers are cool',
                'xrksvih ziv xllo (atbash)',
                'DJQIFST BSF DPPM (caesar)', // shifted by one
                'mmnripc kvc msmv (vigenere)', // encoded by key "key"
                '******* *** ****'
              ]}/>
              <Recap />
              <Blackbox />
              <NameInput handleSubmit={this.handleNameInputSubmit} />
              <section className="section">
                <Decoding name={this.state.name}/>
              </section>
              <section className="section">
                <h1>Now, let's play a game!</h1>
                <Link to='/game/'>
                  Let's go!
                </Link>
              </section>
              <Closing />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
