import React from 'react'
import Anime from 'react-anime';
import './atbashIntro.css'
import { clickMe, partOne, partTwo, partThree} from './AtbashIntroSections.js'

class AtbashIntro extends React.Component {
    constructor(props) {
        super(props);
        const firstPrompt = "click me"
        const secondPrompt = "click me next :o"
        this.state = {
            clickList: [clickMe(firstPrompt, false), clickMe(firstPrompt, true), partTwo()],
            clickList2: [clickMe(secondPrompt, false), clickMe(secondPrompt, true), partThree()],
            showIndex: [0, 0]
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

    handleShow = (index) => {
        let currIndex = this.state.showIndex[index]
        let newIndices = this.state.showIndex
        newIndices.splice(index, 1, currIndex+1) 
        if(currIndex < 2) {
            this.setState({showIndex: newIndices })
        }
    }

    render() {
        let { clickList } = this.state
        let { clickList2 } = this.state
        return(
            <section className="container mb-6">
                {partOne()}
                <div onClick={()=>this.handleShow(0)}>
                    {clickList.map((v, i) => (i === this.state.showIndex[0]) ? <Anime {...this.animate()} >{v}</Anime>: <div></div>)}
                </div>
                <div onClick={()=>this.handleShow(1)}>
                    {clickList2.map((v, i) => (i === this.state.showIndex[1]) ? <Anime {...this.animate()} >{v}</Anime>: <div></div>)}
                </div>
            </section>
        )
    }

}

export default AtbashIntro;