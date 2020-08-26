import React from 'react'
import Anime from 'react-anime';
import './atbashIntro.css'
import { clickMe, partOne, partTwo, partThree} from './AtbashIntroSections.js'


class AtbashIntro extends React.Component {
    constructor(props) {
        super(props);
        this.timer = 0;
        this.timers = []
        this.state = {
            clicked: [true, false, false],
            finished: [true, false, false],
            show: [true, false, false]
        }
    }

    componentDidUnmount() {
        this.timer = clearTimeout()
    }

    handleClickAt = (i) => {
        let newClick = Array.from(this.state.clicked)
        newClick.splice(i-1, 1, true)
        this.setState({
            clicked: newClick
        })
    }

    showContent = (i) => {
        let newshow = Array.from(this.state.show)
        newshow.splice(i-1, 1, true)
        this.setState({
            show: newshow
        })
        this.timers.push(setTimeout(() => {this.finishAnime(i)}, 1000)) 
    }

    finishAnime = (i) => {
        let newFinish = Array.from(this.state.finished)
        newFinish.splice(i-1, 1, true)
        this.setState({
            finished: newFinish
        })
    }

    animateOnce = (stop) => {
        //if condition met, stop animating
        let animeProps = stop ? {opacity: [1, 1]} : {opacity: [0, 1],
            translateX: [-64, 0],
            delay: (el, i) => i * 500
        }
        return(animeProps)
    }

    render() {
        return(
            <section className="container mb-6">
                <Anime {...this.animateOnce(true)}>
                    {partOne()}
                </Anime>
                <div onMouseOver={() => this.handleClickAt(2)} onClick={() => this.showContent(2)}>
                    {this.state.show[1] ? <Anime {...this.animateOnce(this.state.finished[1])}>{partTwo()}</Anime> : clickMe("CLICK ME", this.state.clicked[1])}
                </div>
                <div onMouseOver={() => this.handleClickAt(3)} onClick={() => this.showContent(3)}>
                    {this.state.show[2] ? <Anime {...this.animateOnce(this.state.finished[2])}>{partThree()}</Anime> : clickMe("LOOK HERE", this.state.clicked[2])}
                </div>
            </section>
        )
    }

}

export default AtbashIntro;