import React from 'react'

interface LoadingComponentProps {
    total: number,
    ready: number,
    error: boolean
}

/**
 * page for loading
 * 
 * @author 纷羽
 */
export default class LoadingComponent extends React.Component<LoadingComponentProps> {

    public state = {
        loaditem: 1,
        loadinterval: 0
    }

    componentDidMount() {
        let interval = setInterval(() => {
            if (this.state.loaditem > 3)
                this.setState({ loaditem: 1 })
            else
                this.setState({ loaditem: this.state.loaditem + 1 })
        }, 500)
        this.setState({ loadinterval: interval })
    }

    componentWillUnmount() {
        if (this.state.loadinterval)
            clearInterval(this.state.loadinterval)
    }

    render() {
        if (this.props.error) {
            return (
                <div className="Loading">
                    <div className="textFrame">
                        <div className="title">Love You Forever</div>
                        <div className="text" dangerouslySetInnerHTML={{
                            __html: "load failed with something error , pleasa <a href=\"javascript:window.location.reload();\" class=\"line\">refresh</a> and try again"
                        }} />
                    </div>
                </div>
            )
        }
        let loading = (<div className="text">
            loading
            <i style={{ color: this.state.loaditem === 1 ? '#eee' : '#bbb' }}>.</i>
            <i style={{ color: this.state.loaditem === 2 ? '#eee' : '#bbb' }}>.</i>
            <i style={{ color: this.state.loaditem === 3 ? '#eee' : '#bbb' }}>.</i>
        </div>)
        return (
            <div className="Loading">
                <div className="textFrame">
                    <div className="title">Love You Forever</div>
                    <div className="text">
                        {loading}
                    </div>
                </div>
            </div>
        )
    }
}