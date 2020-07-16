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
            <button className="button is-rounded is-light is-medium has-text-weight-bold" onClick={this._prev}> Go Back </button>
          )
        }
        return null;
    }
    
    nextButton(){
        var DELAY = 100;
        let currStep = this.state.currStep;
        if(currStep < 7 ){
          return(
            <button className="button is-rounded is-family-secondary is-medium has-text-weight-bold" onClick={this._next}>
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
              <div className="container">
                <Page1 currStep = {this.state.currStep} />
                <Page2 currStep = {this.state.currStep} />
                <Page3 currStep = {this.state.currStep} />
                <Page4 currStep = {this.state.currStep} />
                <Page5 currStep = {this.state.currStep} />
                <Page6 currStep = {this.state.currStep} />
                <Page7 currStep = {this.state.currStep} />
                <div style={{padding: '40px'}}>
                    {this.prevButton()}
                    {this.nextButton()}
                </div> 
              </div>                  
            </section>
            <div className="vertical-spacing"></div>
            <div className="vertical-spacing"></div>
        </React.Fragment>
      )
    }
}

function Page1(props){
    if(props.currStep !== 1){ return null; }
    return(
        <React.Fragment>
            <div className="blackbox_container">
              {/* <img src="/key.png" className="img_10" style={{position:'absolute',top:'230px',left:'250px'}} alt="Key"></img>
              <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'200px',left:'450px'}} alt="Black box"></img> */}
              <FontAwesomeIcon icon={faKey} size="6x" color="#FFB800" style={{position:'absolute', left:'200px', top:'100px', height: '600px',transform: 'rotate(225deg)'}} />
              <FontAwesomeIcon icon={faArchive} size="9x" color="#000000" style={{position:'absolute', left:'500px', top:'100px', height: '600px'}} />
              <div className="" style={{position:'absolute',top:'200px',left:'100px'}}>
                But how can ciphers get more complicated??
              </div>
              <div className="text_wide" style={{position:'absolute',top:'550px',left:'200px'}}>
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
        <div className="blackbox_container">
        <div className="text_narrow" style={{position:'absolute',top:'100px',left:'80px'}}>
          Our computers use ciphers, aka cryptography, every day.
          Their keys get much more complex, 
          and can go beyond just switching one letter to another. 
        </div>
        <div className="text_narrow" style={{position:'absolute',top:'430px',left:'510px'}}>
          They turn ciphers into cryptographic functions, like AES -- the US standard for 
          encryption today. It uses a long key and all sorts of mathematical transformations 
          (which we’ll just show as a black box) on the message, 
          and only the recipient who is given the original key can undo the math.  
        </div>
        <img src="/alice_bob.svg" className="img_alice_bob" style={{position:'absolute',top:'60px',left:'160px', width: '650px', height: 'auto'}} alt="Alice & Bob"></img>
        </div>
      </React.Fragment>
    )
}

function Page3(props){
    if(props.currStep !== 3){ return null; }
    return(
      <React.Fragment>
        <div className="blackbox_container">
          {/* <img src="/key.png" className="img_10" style={{position:'absolute',top:'150px',left:'200px',zIndex: '1'}} alt="Key"></img> */}
          {/* <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'250px',left:'600px'}} alt="Blackbox"></img> */}
          {/* <img src="/article.png" className="img_15" style={{position:'absolute',top:'350px',left:'200px'}} alt="Article"></img> */}
          <FontAwesomeIcon icon={faKey} size="6x" color="#FFB800" style={{position:'absolute', left:'180px', top:'0px', height: '600px',transform: 'rotate(225deg)'}} />
          <FontAwesomeIcon icon={faArchive} size="9x" color="#000000" style={{position:'absolute', left:'620px', top:'100px', height: '600px'}} />
          <FontAwesomeIcon icon={faEnvelopeOpen} size="6x" color="#00994C" style={{position:'absolute', left:'180px', top:'200px', height: '600px'}} />
          <div className="text_narrow" style={{position:'absolute',top:'150px',left:'250px'}}>
            The black box takes in our secret message and a secret key,
          </div>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="70px"
            translateX="200px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'330px', top:'290px', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
          </Anime>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="-70px"
            translateX="200px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'330px', top:'470px', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
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
          {/* <img src="/key.png" className="img_10" style={{position:'absolute',top:'150px',left:'80px'}} alt="Key"></img>
          <img src="/article.png" className="img_15" style={{position:'absolute',top:'350px',left:'80px'}} alt="Article"></img>
          <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'250px',left:'400px'}} alt="Blackbox"></img>
          <img src="/encrypted_msg.png" className="img_15" style={{position:'absolute',top:'250px',left:'750px'}} alt="Encrypted Message"></img> */}
          <FontAwesomeIcon icon={faKey} size="6x" color="#FFB800" style={{position:'absolute', left:'80px', top:'0px', height: '600px',transform: 'rotate(225deg)'}} />
          <FontAwesomeIcon icon={faArchive} size="9x" color="#000000" style={{position:'absolute', left:'420px', top:'100px', height: '600px'}} />
          <FontAwesomeIcon icon={faEnvelopeOpen} size="6x" color="#00994C" style={{position:'absolute', left:'80px', top:'200px', height: '600px'}} />
          <FontAwesomeIcon icon={faFileArchive} size="6x" color="#004C99" style={{position:'absolute', left:'780px', top:'100px', height: '600px'}} />
          <div className="text_narrow" style={{position:'absolute',top:'150px',left:'270px'}}>
            And spits out an encrypted message!
          </div>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="70px"
            translateX="160px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'290px', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
          </Anime>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="-70px"
            translateX="160px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'470px', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
          </Anime>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="0px"
            translateX="150px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'575px', top:'390px'}}></FontAwesomeIcon>             
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
      {/* <img src="/key.png" className="img_10" style={{position:'absolute',top:'150px',left:'80px'}} alt="Key"></img>
      <img src="/article.png" className="img_15" style={{position:'absolute',top:'250px',left:'700px'}} alt="Article"></img>
      <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'250px',left:'400px'}} alt="Blackbox"></img>
      <img src="/encrypted_msg.png" className="img_15" style={{position:'absolute',top:'350px',left:'80px'}} alt="Encrypted Message"></img> */}
      <FontAwesomeIcon icon={faKey} size="6x" color="#FFB800" style={{position:'absolute', left:'80px', top:'0px', height: '600px',transform: 'rotate(225deg)'}} />
      <FontAwesomeIcon icon={faArchive} size="9x" color="#000000" style={{position:'absolute', left:'420px', top:'100px', height: '600px'}} />
      <FontAwesomeIcon icon={faEnvelopeOpen} size="6x" color="#00994C" style={{position:'absolute', left:'780px', top:'100px', height: '600px'}} />
      <FontAwesomeIcon icon={faFileArchive} size="6x" color="#004C99" style={{position:'absolute', left:'80px', top:'200px', height: '600px'}} />      
      <div className="text_narrow" style={{position:'absolute',top:'150px',left:'270px'}}>
        The magic happens when you give the black box *the same key and the encrypted message* 
        -- That’s the only way to get the original message back!
      </div>
      <Anime easing="linear" duration="900"
        loop={true}
        translateY="70px"
        translateX="160px"
        opacity={['50%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'290px', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
      </Anime>
      <Anime easing="linear" duration="900"
        loop={true}
        translateY="-70px"
        translateX="160px"
        opacity={['50%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'470px', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
      </Anime>
      <Anime easing="linear" duration="900"
        loop={true}
        translateY="0px"
        translateX="150px"
        opacity={['50%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'575px', top:'390px'}}></FontAwesomeIcon>             
      </Anime>
      </div>
      </React.Fragment>
    )
}

function Page6(props){
    if(props.currStep !== 6){ return null; }
    return(
      <React.Fragment>
        {/* <img src="/key.png" className="img_5" style={{position:'absolute',top:'100px',left:'550px'}} alt="Key"></img>
        <img src="/key.png" className="img_5" style={{position:'absolute',top:'550px',left:'350px'}} alt="Key"></img>
        <img src="/encrypted_msg.png" className="img_10" style={{position:'absolute',top:'120px',left:'90px'}} alt="Encrypted Message"></img>
        <img src="/alice_bob.png" className="img_alice_bob" style={{position:'absolute',top:'20px',left:'20px'}} alt="Alice & Bob"></img> */}
        <img src="/alice_bob.svg" className="img_alice_bob" style={{position:'absolute',top:'90px',left:'160px', width: '650px', height: 'auto'}} alt="Alice & Bob"></img>
        <FontAwesomeIcon icon={faKey} size="3x" color="#FFB800" style={{position:'absolute', left:'120px', top:'80px', height: '600px',transform: 'rotate(225deg)'}} />
        <FontAwesomeIcon icon={faKey} size="3x" color="#FFB800" style={{position:'absolute', left:'810px', top:'60px', height: '600px',transform: 'rotate(225deg)'}} />
        <div className="blackbox_container">
        <div className="text_narrow" style={{position:'absolute',top:'130px',left:'80px'}}>
            So anyone without the key will just see
        </div>
        <div className="text_narrow" style={{position:'absolute',top:'500px',left:'510px'}}>
            But thanks to the black box, only people with the shared key can see the message! 
            Your computers encrypt messages in ways like these everyday.  
        </div>
        </div>
      </React.Fragment>
    )
}

function Page7(props){
  if(props.currStep !== 7){ return null; }
  return(
    <React.Fragment>
      <div className="blackbox_container">
        <div className="text_narrow" style={{position:'absolute',top:'180px',left:'250px'}}>
          In real life, the key used for encryption is simply a series of numbers!
        </div>
        <Anime easing="linear" duration="4000"
          loop={true}
          opacity={['0%','100%','100%','0%','0%','0%','0%','0%']}
        >
          <FontAwesomeIcon icon={faKey} size="10x" color="#FFB800" style={{position:'absolute', left:'390px', top:'350px',transform: 'rotate(225deg)'}}></FontAwesomeIcon>             
        </Anime>
        <Anime easing="linear" duration="4000"
          loop={true}
          opacity={['0%','0%','0%','0%','0%','100%','100%','0%']}
        >
          <p className="large_font" style={{position:'absolute', left:'240px', top:'400px', color: "#FFB800"}}>1001100010000011001010111</p>             
        </Anime>
      </div>
    </React.Fragment>
  )
}
  
export default Blackbox;