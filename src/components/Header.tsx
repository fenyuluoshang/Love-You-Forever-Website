import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.scss'
import Logo from '../assets/logo-white.svg'

type props = {
    action: string
}

export default class Header extends React.Component<props> {
    render() {
        return (
            <div className="header">
                <img className="icon" src={Logo} alt="logo" />
                <ul>
                    <Link className={(this.props.action === '/home' ? 'action ' : '') + 'link'} to="/home">
                        <li>HOME</li>
                    </Link>
                    <Link className={(this.props.action === '/about' ? 'action ' : '') + 'link'} to="/about">
                        <li>ABOUT</li>
                    </Link>
                    <Link className={(this.props.action === '/news' ? 'action ' : '') + 'link'} to="/news">
                        <li>NEWS</li>
                    </Link>
                </ul>
            </div>
        )
    }
}