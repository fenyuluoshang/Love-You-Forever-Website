import React from 'react'
import { Link } from 'react-router-dom'

export default class NotFoundView extends React.Component {
    render() {
        return (
            <div className="Loading">
                <div className="textFrame">
                    <div className="title">404 Not Found</div>
                    <div className="text">
                        <Link to="/">页面不见了，点我返回首页</Link>
                    </div>
                </div>
            </div>
        )
    }
}