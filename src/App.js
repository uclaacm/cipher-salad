import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
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

// Wrap around items to create a "slide deck".
function SlideDeck(props) {
  // props used to control the "bumping" of the slide deck
  // left and right buttons.
  const bumpDuration = 1000;
  const bumpAmount = 5;

  let slides = props.children.map((e, i) => (
    <Route path={`/${i === 0 ? '/' : i}`} key={i}>
      <div className='my-6'></div>

      <div className='slide-progress'>
        {
          i - 1 < 0 ?
          '' :
          <Anime translateX={[-1 * bumpAmount, 0]} duration={bumpDuration} direction={'alternate'} loop>
            <Link to={i - 1 === 0 ? '/' : `/${i - 1}`}>
              <FontAwesomeIcon icon={faChevronCircleLeft} size='3x' />
            </Link>
          </Anime>
        }

        {Array(i).fill(
          <FontAwesomeIcon icon={faCircle} size='2x' />
        )}
        <FontAwesomeIcon icon={faDotCircle} size='2x' />
        {Array(props.children.length - i - 1).fill(
          <FontAwesomeIcon icon={faCircle} size='2x' />
        )}

        {
          props.children.length === i + 1 ?
          '' :
          <Anime translateX={[bumpAmount, 0]} duration={bumpDuration} direction={'alternate'} loop>
            <Link to={`/${i + 1}`}>
              <FontAwesomeIcon icon={faChevronCircleRight} size='3x' />
            </Link>
          </Anime>
        }
      </div>

      <div className='my-6'></div>

      {e}
    </Route>
  ));

  return (
    <Router>
      <Switch>
        {slides}
      </Switch>
    </Router>
  );
}

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
        <SlideDeck>
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

            <Closing />
            <Title />
        </SlideDeck>
      </div>
    );
  }
}

export default App;
