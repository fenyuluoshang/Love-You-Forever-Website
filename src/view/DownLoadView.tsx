import React from 'react'

export default class DownLoadView extends React.Component<any, any> {
    render() {
        this.props.history.push('/not_open');
        return (<div></div>)
    }
}