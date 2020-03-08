import React, { CSSProperties } from 'react'

const bottom_style: CSSProperties = {
    fontSize: '1rem',
    textAlign: 'center',
    userSelect: 'none',
    padding: '3px 0'
}

type props = {
    className?: string
    absoult?: boolean
}

export default class BottomComponment extends React.Component<props, any> {
    render() {
        return (
            <div className={this.props.className} style={this.props.absoult ? { position: "absolute", bottom: 0, width: "100%" } : {}}>
                <div style={bottom_style}>
                    Love You Forever Game
                </div>
                <div style={bottom_style}>
                    Made with ❤ by <a href="https://fenyu.club">FenYu</a>
                </div>
            </div>
        )
    }
}