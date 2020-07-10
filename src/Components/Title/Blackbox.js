import React from "react";
import Anime from 'react-anime';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './title.css';

class Blackbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          currStep: 1
        }
    }
    
    _next = () => {
        let currStep = this.state.currStep;
        currStep = currStep >= 7? 7: currStep + 1
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
            <a className="button is-rounded is-light is-medium" onClick={this._prev}> Go Back </a>
          )
        }
        return null;
    }
    
    nextButton(){
        var DELAY = 100;
        let currStep = this.state.currStep;
        if(currStep < 6 ){
          return(
            <a className="button is-rounded is-family-secondary is-medium" onClick={this._next}>
            <Anime easing="linear" delay={DELAY} loop={true} direction="alternate" opacity={['100%', '20%']}>
              Next
            </Anime>
            </a>
            
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
              <div className="" style={{position:'absolute',top:'100px',left:'100px'}}>
                But how can ciphers get more complicated??
              </div>
              <img src="/key.png" className="img_10" style={{position:'absolute',top:'230px',left:'250px'}}></img>
              <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'200px',left:'450px'}}></img>
              <div className="text_wide" style={{position:'absolute',top:'500px',left:'200px'}}>
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
        <div className="text_narrow" style={{position:'absolute',top:'70px',left:'80px'}}>
          Our computers use ciphers, aka cryptography, every day.
          Their keys get much more complex, 
          and can go beyond just switching one letter to another. 
        </div>
        <div className="text_narrow" style={{position:'absolute',top:'400px',left:'550px'}}>
          They turn ciphers into cryptographic functions, like AES -- the US standard for 
          encryption today. It uses a long key and all sorts of mathematical transformations 
          (which we’ll just show as a black box) on the message, 
          and only the recipient who is given the original key can undo the math.  
        </div>
        <img src="/alice_bob.png" className="img_alice_bob" style={{position:'absolute',top:'20px',left:'20px'}}></img>
        </div>
      </React.Fragment>
    )
}

function Page3(props){
    if(props.currStep !== 3){ return null; }
    return(
      <React.Fragment>
        <div className="blackbox_container">
          <img src="/key.png" className="img_10" style={{position:'absolute',top:'150px',left:'200px'}}></img>
          <img src="/article.png" className="img_15" style={{position:'absolute',top:'350px',left:'200px'}}></img>
          <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'250px',left:'600px'}}></img>
          <div className="text_narrow" style={{position:'absolute',top:'100px',left:'300px'}}>
            The black box takes in our secret message and a secret key,
          </div>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="70px"
            translateX="200px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'330px', top:'190px', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
          </Anime>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="-70px"
            translateX="200px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'330px', top:'370px', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
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
          <img src="/key.png" className="img_10" style={{position:'absolute',top:'150px',left:'80px'}}></img>
          <img src="/article.png" className="img_15" style={{position:'absolute',top:'350px',left:'80px'}}></img>
          <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'250px',left:'400px'}}></img>
          <img src="/encrypted_msg.png" className="img_15" style={{position:'absolute',top:'250px',left:'750px'}}></img>
          <div className="text_narrow" style={{position:'absolute',top:'100px',left:'300px'}}>
            And spits out an encrypted message!
          </div>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="70px"
            translateX="160px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'190px', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
          </Anime>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="-70px"
            translateX="160px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'370px', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
          </Anime>
          <Anime easing="linear" duration="900"
            loop={true}
            translateY="0px"
            translateX="150px"
            opacity={['50%','100%', '0%']}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'575px', top:'290px'}}></FontAwesomeIcon>             
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
      <img src="/key.png" className="img_10" style={{position:'absolute',top:'150px',left:'80px'}}></img>
          <img src="/article.png" className="img_15" style={{position:'absolute',top:'250px',left:'700px'}}></img>
          <img src="/black_box.png" className="img_15" style={{position:'absolute',top:'250px',left:'400px'}}></img>
          <img src="/encrypted_msg.png" className="img_15" style={{position:'absolute',top:'350px',left:'80px'}}></img>
      
      <div className="text_narrow" style={{position:'absolute',top:'100px',left:'300px'}}>
        The magic happens when you give the black box *the same key and the encrypted message* 
        -- That’s the only way to get the original message back!
      </div>
      <Anime easing="linear" duration="900"
        loop={true}
        translateY="70px"
        translateX="160px"
        opacity={['50%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'190px', transform: 'rotate(30deg)'}}></FontAwesomeIcon>             
      </Anime>
      <Anime easing="linear" duration="900"
        loop={true}
        translateY="-70px"
        translateX="160px"
        opacity={['50%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'200px', top:'370px', transform: 'rotate(-30deg)'}}></FontAwesomeIcon>             
      </Anime>
      <Anime easing="linear" duration="900"
        loop={true}
        translateY="0px"
        translateX="150px"
        opacity={['50%','100%', '0%']}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="#0" style={{position:'absolute', left:'575px', top:'290px'}}></FontAwesomeIcon>             
      </Anime>
      </div>
      </React.Fragment>
    )
}

function Page6(props){
    if(props.currStep !== 6){ return null; }
    return(
      <React.Fragment>
        <div className="blackbox_container">
          <div className="text_narrow" style={{position:'absolute',top:'80px',left:'150px'}}>
            So anyone without the key will just see
          </div>
          <div className="text_narrow" style={{position:'absolute',top:'450px',left:'500px'}}>
            But thanks to the black box, only people with the shared key can see the message! 
            Your computers encrypt messages in ways like these everyday. 
          </div>
          <img src="/key.png" className="img_5" style={{position:'absolute',top:'100px',left:'750px'}}></img>
          <img src="/key.png" className="img_5" style={{position:'absolute',top:'550px',left:'10px'}}></img>
          <img src="/encrypted_msg.png" className="img_15" style={{position:'absolute',top:'120px',left:'40px'}}></img>
          <img src="/alice_bob.png" className="img_alice_bob" style={{position:'absolute',top:'25px',left:'25px'}}></img>
        </div>
      </React.Fragment>
    )
}
  
export default Blackbox;