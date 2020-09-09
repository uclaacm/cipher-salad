import React, { useState } from 'react'
import Anime from 'react-anime';
import './atbashIntro.css'
import { clickMe, partOne, partTwo, partThree} from './AtbashIntroSections.js'

const ClickFunc = (props) => {
    const [show, setShow] = useState(0);
    return (
        <div onClick={()=> {setShow(show < 2 ? show+1 : show); console.log(show)} }>
            <Anime {...props.animate} >{props.clickList[show]}</Anime>
        </div>  
    );
}

class AtbashIntro extends React.Component {
    constructor(props) {
        super(props);
        const firstPrompt = "click me"
        const secondPrompt = "click me next :o"
        this.state = {
            clickList: [clickMe(firstPrompt, true), clickMe(firstPrompt, false), partTwo()],
            clickList2: [clickMe(secondPrompt, true), clickMe(secondPrompt, false), partThree()]
        }
    }

    animate = () => {
        let animeProps = {
            opacity: [1, 1],
            translateX: [-64, 0],
            delay: (el, i) => i * 500
        }
        return(animeProps)
    }

    render() {
        let { clickList } = this.state
        let { clickList2 } = this.state
        return(
            <section className="container mb-6">
                {partOne()}
                <ClickFunc clickList={clickList} animate={this.animate()} />
                <ClickFunc clickList={clickList2} animate={this.animate()} />
            </section>
        )
    }

}

export default AtbashIntro;