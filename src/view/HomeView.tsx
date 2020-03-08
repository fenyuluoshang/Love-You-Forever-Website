import React from 'react'
import '../style/HomeView.scss'
import { Link } from 'react-router-dom'
import BottomComponment from '../components/Bottom'
import HomeBackgroundCanvas from '../components/HomeBackgroundCanvas'
import Header from '../components/Header'

type viewState = {
    "frame-text": string,
    show: number,
    interval?: number
}

export default class HomeView extends React.Component<any, viewState> {

    constructor(props: any) {
        super(props);
        this.state = {
            "frame-text": "如果  晚点遇见你",
            show: -1,
            interval: undefined
        }

    }

    componentWillMount() {
        let interval: any = setInterval(() => {
            if (this.state.show <= this.state["frame-text"].length)
                this.setState({
                    show: this.state.show + 1
                })
            else {
                clearInterval(this.state.interval)
                this.setState({
                    interval: undefined
                })
            }
        }, 500)
        this.setState({
            interval
        })
    }

    componentWillUnmount() {
        if (this.state.interval !== undefined) {
            clearInterval(this.state.interval)
        }
    }

    render() {
        let text_inner = []
        for (let i = 0; i < this.state["frame-text"].length; i++) {
            if (this.state.show < i)
                text_inner.push((<div style={{ transform: "translateY(-10vh)", opacity: 0 }} key={i}
                    dangerouslySetInnerHTML={{ __html: this.state["frame-text"][i] === " " ? "&nbsp;" : this.state["frame-text"][i] }} />))
            else
                text_inner.push((<div style={{ opacity: 1 }} key={i}
                    dangerouslySetInnerHTML={{ __html: this.state["frame-text"][i] === " " ? "&nbsp;" : this.state["frame-text"][i] }} />))
        }
        return (
            <div className="Home">
                <div className="frame frame1">
                    <div className="frame-main">
                        <Header action="/home" />
                        <div className="center">
                            <div className="text">
                                {text_inner}
                            </div>
                            <div className="download-frame">
                                <Link className="_btn__sourend download" to="/download">Play for free</Link>
                            </div>
                        </div>
                    </div>
                    <div className="background-model2">
                        <div>
                            LOVE YOU<br />FORERVER
                        </div>
                    </div>
                    <div className="background-model" />
                    <div className="background">
                        <HomeBackgroundCanvas />
                    </div>
                    <BottomComponment className="bottom" absoult={true} />
                </div>
            </div>
        )
    }
}