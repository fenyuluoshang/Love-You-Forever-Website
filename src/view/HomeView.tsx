import React from 'react'
import '../style/HomeView.scss'
import { Link } from 'react-router-dom'
import BottomComponment from '../components/Bottom'
import Header from '../components/Header'

import bgImage from '../assets/wallhaven-13m9z9-size1280.jpg'
import LoadingComponent from '../components/LoadingComponent'

type viewState = {
    "frame-text": string,
    show: number,
    interval?: number,
    init: boolean,
    init_failed: boolean,
    bg1_ok: boolean,
    bg1_total: number,
    bg1_ready: number
}

export default class HomeView extends React.Component<any, viewState> {

    constructor(props: any) {
        super(props);
        this.state = {
            "frame-text": "如果  晚点遇见你",
            show: -1,
            interval: undefined,
            init: false,
            init_failed: false,
            bg1_ok: false,
            bg1_total: 0,
            bg1_ready: 0
        }
        this.pageShow = this.pageShow.bind(this)
        this.bg1_progress = this.bg1_progress.bind(this)
        this.bg1_ready = this.bg1_ready.bind(this)
    }

    pageShow() {
        if (!this.state.bg1_ok)
            return
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
            interval,
            init: true
        })
    }

    bg1_progress(event: ProgressEvent) {
        this.setState({
            bg1_total: event.total,
            bg1_ready: event.loaded
        })
    }

    bg1_ready() {
        this.setState({
            bg1_ok: true
        }, () => this.pageShow())
    }

    componentDidMount() {
        let render = new XMLHttpRequest()
        // let render = new Image()
        render.addEventListener('progress', this.bg1_progress)
        render.open('get', bgImage)
        render.send(null)

        render.addEventListener("progress", this.bg1_progress)
        render.addEventListener("load", this.bg1_ready)
        render.addEventListener('error', (event) => { this.setState({ init_failed: true }); console.log(event); })
    }

    componentWillUnmount() {
        if (this.state.interval !== undefined) {
            clearInterval(this.state.interval)
        }
    }

    render() {
        if (!this.state.init || this.state.init_failed)
            return <LoadingComponent error={this.state.init_failed} ready={0} total={0} />
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
                    <div className="background" style={{ backgroundImage: "url(" + bgImage + ")" }} >
                    </div>
                    <BottomComponment className="bottom" absoult={true} />
                </div>
            </div>
        )
    }
}