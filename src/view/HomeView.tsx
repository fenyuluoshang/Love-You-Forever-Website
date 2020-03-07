import React from 'react'
import '../style/HomeView.scss'
import Logo from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'

type viewState = {
    "frame-text": string
}

export default class HomeView extends React.Component<any, viewState> {

    constructor(props: any) {
        super(props);
        this.state = {
            "frame-text": "如果 晚点遇见你"
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="frame frame1">
                    <div className="frame-main">
                        <div className="header">
                            <img className="icon" src={Logo} alt="logo" />
                            <ul>
                                <Link className="link action" to="/home"><li>HOME</li></Link>
                                <Link className="link" to="/about"><li>ABOUT</li></Link>
                                <Link className="link" to="/news"><li>NEWS</li></Link>
                            </ul>
                        </div>
                        <div className="center">
                            <div className="text">
                                {this.state["frame-text"]}
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
                    <div className="background-model"></div>
                    <div className="background"></div>
                </div>
            </div>
        )
    }
}