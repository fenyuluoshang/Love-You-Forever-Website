import React from 'react'

export default class AboutView extends React.Component<any, any> {
    render() {
        this.props.history.push('/404');
        return (<div></div>)
    }
}