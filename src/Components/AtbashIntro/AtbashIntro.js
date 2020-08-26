import React from 'react'
import Anime from 'react-anime';
import './atbashIntro.css'
import { clickMe, partOne, partTwo, partThree} from './AtbashIntroSections.js'


class AtbashIntro extends React.Component {
    constructor(props) {
        super(props);
        this.timer = 0;
        this.state = {
            showTwo: false,
            showThree: false,
            twoFinished: false,
            showFinished: false,
            clickedTwo: false,
            clickedThree: false,
        }
    }

    componentDidUnmount() {
        this.timer = clearTimeout()
    }

    handleClick = () => {
        this.setState({
            clickedTwo: true
        })
    }

    handleClick2 = () => {
        this.setState({
            clickedThree: true
        })
    }

    revealTextTwo = (index) => {
        this.setState({showTwo: true})
        this.timer = setTimeout(() => {this.setState({twoFinished: true})}, 1000)
    }

    revealTextThree = (index) => {
        clearTimeout(this.timer)
        this.setState({showThree: true})
        this.setState({showFinished: true})
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
                <div onMouseOver={() => this.handleClick()} onClick={() => this.revealTextTwo()}>
                    {this.state.showTwo ? <Anime {...this.animateOnce(this.state.twoFinished)}>{partTwo()}</Anime> : clickMe("CLICK ME", this.state.clickedTwo)}
                </div>
                <div onMouseOver={() => this.handleClick2()} onClick={() => this.revealTextThree()}>
                    {this.state.showThree ? <Anime {...this.animateOnce(this.state.showFinished)}>{partThree()}</Anime> : clickMe("LOOK HERE", this.state.clickedThree)}
                </div>
            </section>
        )
    }

}

export default AtbashIntro;