import React from 'react'

/**
 * page for loading
 * 
 * @author 纷羽
 */
export default class RouteLoadingComponent extends React.Component<any, any> {

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
        let loading = (<div className="text">
            routing
            <i style={{ color: this.state.loaditem === 1 ? '#eee' : '#bbb' }}>.</i>
            <i style={{ color: this.state.loaditem === 2 ? '#eee' : '#bbb' }}>.</i>
            <i style={{ color: this.state.loaditem === 3 ? '#eee' : '#bbb' }}>.</i>
        </div>)
        let error = (<div className="text">load failed , please refresh and try again</div>)
        return (
            <div className="Goto">
                <div className="textFrame">
                    <div className="title">Love You Forever</div>
                    <div className="text">
                        {this.props.isLoading ? loading : error}
                    </div>
                </div>
            </div>
        )
    }
}