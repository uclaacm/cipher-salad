import React from "react";
import Anime from 'react-anime';
import { faArrowRight, faKey, faArchive, faEnvelopeOpen, faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './title.css';

class Blackbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          currStep: 1,
          key: Math.floor(Math.random()*1000001)
        }
    }
    
    _next = () => {
        let currStep = this.state.currStep;
        currStep = currStep >= 8? 8: currStep + 1
        this.setState({
          currStep: currStep
        })
    }
 
    _prev = () => {
        let currStep = this.state.currStep;
        currStep = currStep <= 1? 1: currStep - 1
        this.setState({
          currStep: currStep
        })
    }
    
    prevButton() {
        let currStep = this.state.currStep;
        if(currStep !== 1){
          return (
            <button className="button button-hover-border is-rounded is-light is-medium has-text-weight-bold" onClick={this._prev}> Go Back </button>
          )
        }
        return null;
    }
    
    nextButton(){
        var DELAY = 100;
        let currStep = this.state.currStep;
        if(currStep < 7 ){
          return(
            <button className="button button-hover-border is-rounded is-family-secondary is-medium has-text-weight-bold" onClick={this._next}>
            <Anime easing="linear" delay={DELAY} loop={true} direction="alternate" opacity={['100%', '20%']}>
              Next
            </Anime>
            </button>
            
          )
        }
    }

    render(){
      return(          
        <React.Fragment>
            <section className="hero is-large" > 
                <Page1 currStep = {this.state.currStep} />
                <Page2 currStep = {this.state.currStep} />
                <Page3 currStep = {this.state.currStep} />
                <Page4 currStep = {this.state.currStep} />
                <Page5 currStep = {this.state.currStep} />
                <Page6 currStep = {this.state.currStep} />
                <Page7 currStep = {this.state.currStep} />
                <div>
                    {this.prevButton()}
                    {this.nextButton()}
                </div> 
            </section>
        </React.Fragment>
      )
    }
}


function Page1(props){
  if(props.currStep !== 1){ return null; }
  return(
      <React.Fragment>
          <div className="blackbox_container">
            <FontAwesomeIcon icon={faKey} alt='key' size="6x" color="#FFB800" style={{position:'absolute', left:'25vw', top:'32vh', transform: 'rotate(225deg)'}} />
            <FontAwesomeIcon icon={faArchive} alt='banker box' size="9x" color="#000000" style={{position:'absolute', left:'40vw', top:'32vh'}} />
            <div className="mid_font" style={{position:'absolute',top:'20vh',left:'15vw'}}>
              But how can ciphers get more complicated??
            </div>
            <div className="text_wide mid_font" style={{position:'absolute',top:'60vh',left:'15vw'}}>
              Let's find out with our black box...
            </div>
          </div>
      </React.Fragment>
  )
}

function Page2(props){
  if(props.currStep !== 2){ return null; }
  return(
    <React.Fragment>
      <div className="blackbox_container_with_img center-img">
      <div className="text_narrow text_narrow_with_img offset-responsive" style={{fontSize: '1.1rem'}}>
        Our computers use ciphers, aka cryptography, every day.
        Their keys get much more complex, 
        and can go beyond just switching one letter to another. 
      </div>
      <div className="text_narrow_with_img text_narrow_big_paragraph" style={{fontSize: '1.1rem'}}>
        They turn ciphers into cryptographic functions, like AES -- the US standard for 
        encryption today. It uses a long key and all sorts of mathematical transformations 
        (which we’ll just show as a black box) on the message, 
        and only the recipient who is given the original key can undo the math.  
      </div>
      <img src="/alice_bob.svg" className="img_alice_bob" style={{width: '650px', height: 'auto'}} alt="people sending messages over the internet"></img>
      </div>
    </React.Fragment>
  )
}

function Page3(props){
  if(props.currStep !== 3){ return null; }
  return(
    <React.Fragment>
      <div className="blackbox_container">
        <FontAwesomeIcon icon={faKey} alt='key' size="6x" color="#FFB800" style={{position:'absolute', left:'30%', top:'27vh',transform: 'rotate(225deg)'}} />
        <FontAwesomeIcon icon={faArchive} alt='banker box' size="9x" color="#000000" style={{position:'absolute', left:'60%', top:'43vh'}} />
        <FontAwesomeIcon icon={faEnvelopeOpen} alt='open envelope' size="6x" color="#FFB800" style={{position:'absolute', left:'30%', top:'65vh'}} />
        <div className="text_narrow small_font" style={{position:'absolute',top:'10vh',left:'0',right:'0',margin:'auto'}}>
          The black box takes in our secret message and a secret key,
        </div>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="10vh"
          translateX="16vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'40%', top:'35vh', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
        </Anime>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="-10vh"
          translateX="16vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'40%', top:'67vh', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
        </Anime>
      </div>
    </React.Fragment>
  )
}

function Page4(props){
  if(props.currStep !== 4){ return null; }
  return(
      <React.Fragment>
      <div className="blackbox_container">
        <FontAwesomeIcon icon={faKey} alt='key' size="6x" color="#FFB800" style={{position:'absolute', left:'20%', top:'27vh', transform: 'rotate(225deg)'}} />
        <FontAwesomeIcon icon={faArchive} alt='bankers box' size="9x" color="#000000" style={{position:'absolute', left:'45%', top:'43vh'}} />
        <FontAwesomeIcon icon={faEnvelopeOpen} alt='open envelope' size="6x" color="#FFB800" style={{position:'absolute', left:'20%', top:'65vh'}} />
        <FontAwesomeIcon icon={faFileArchive} alt='zipped file' size="6x" color="#FFB800" style={{position:'absolute', left:'72%', top:'46vh'}} />
        <div className="text_narrow small_font" style={{position:'absolute',top:'10vh',left:'0',right:'0',margin:'auto'}}>
          And spits out an encrypted message!
        </div>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="10vh"
          translateX="13vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'29%', top:'35vh', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
        </Anime>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="-10vh"
          translateX="13vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'29%', top:'67vh', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
        </Anime>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="0px"
          translateX="13vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'56%', top:'50vh'}}></FontAwesomeIcon>             
        </Anime>
      </div>
      </React.Fragment>
  )
}

function Page5(props){
  if(props.currStep !== 5){ return null; }
  return(
    <React.Fragment>
    <div className="blackbox_container">
    <FontAwesomeIcon icon={faKey} alt='key' size="6x" color="#FFB800" style={{position:'absolute', left:'20%', top:'27vh', transform: 'rotate(225deg)'}} />
        <FontAwesomeIcon icon={faArchive} alt='zipped file'  size="9x" color="#000000" style={{position:'absolute', left:'45%', top:'43vh'}} />
        <FontAwesomeIcon icon={faFileArchive} alt='zipped file' size="6x" color="#FFB800" style={{position:'absolute', left:'20%', top:'65vh'}} />
        <FontAwesomeIcon icon={faEnvelopeOpen} alt='open envelope' size="6x" color="#FFB800" style={{position:'absolute', left:'72%', top:'46vh'}} />  
    <div className="text_narrow small_font" style={{position:'absolute',top:'10vh',left:'0',right:'0',margin:'auto'}}>
      The magic happens when you give the black box *the same key and the encrypted message* 
      -- That’s the only way to get the original message back!
    </div>
    <Anime easing="linear" duration="900"
          loop={true}
          translateY="10vh"
          translateX="13vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'29%', top:'35vh', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
        </Anime>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="-10vh"
          translateX="13vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'29%', top:'67vh', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
        </Anime>
        <Anime easing="linear" duration="900"
          loop={true}
          translateY="0px"
          translateX="13vw"
          opacity={['50%','100%', '0%']}
        >
          <FontAwesomeIcon icon={faArrowRight} alt='right arrow' size="2x" color="#0" style={{position:'absolute', left:'56%', top:'50vh'}}></FontAwesomeIcon>             
        </Anime>
    </div>
    </React.Fragment>
  )
}

function Page6(props){
  if(props.currStep !== 6){ return null; }
  return(
    <React.Fragment>
      <div className="blackbox_container_with_img center-img">
      <div className="text_narrow text_narrow_with_img offset-responsive small_font">
          So anyone without the key will just see
      </div>
      <div className="text_narrow_with_img text_narrow_big_paragraph small_font">
          But thanks to the black box, only people with the shared key can see the message! 
          Your computers encrypt messages in ways like these everyday.  
      </div>
      <img src="/alice_bob_keys.svg" className="img_alice_bob" style={{width: '650px', height: 'auto'}} alt="people with keys sending messages over the internet"></img>
      </div>
    </React.Fragment>
  )
}

function Page7(props){
if(props.currStep !== 7){ return null; }
return(
  <React.Fragment>
    <div className="blackbox_container">
      <div className="text_narrow small_font" style={{position:'absolute',top:'20vh',left:'0',right:'0',margin:'auto'}}>
        In real life, the key used for encryption is simply a series of numbers!
      </div>
      <Anime easing="linear" duration="6000"
        loop={true}
        opacity={['0%','100%','100%','0%','0%','0%','0%','0%']}
      >
        <FontAwesomeIcon icon={faKey} alt='key' size="10x" color="#FFB800" style={{position:'absolute', left:'0', right:'0', margin:'auto',top:'40vh',transform: 'rotate(225deg)'}}></FontAwesomeIcon>             
      </Anime>
      <Anime easing="linear" duration="6000"
        loop={true}
        opacity={['0%','0%','0%','0%','0%','100%','100%','0%']}
      >
        <p className="large_font" style={{position:'absolute', left:'0',right:'0',margin:'auto', top:'45vh', color: "#FFB800"}}>1001100010000011001010111</p>             
      </Anime>
    </div>
  </React.Fragment>
)
}
  
export default Blackbox;