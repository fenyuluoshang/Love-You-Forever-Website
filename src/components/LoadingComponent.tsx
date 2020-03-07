import React from 'react'

interface LoadingComponentProps {
    isLoading: boolean;
    pastDelay: boolean;
    timedOut: boolean;
    error: any;
    retry: () => void;
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
        let loading = (<div className="text">
            loading
            <i style={{ color: this.state.loaditem === 1 ? '#eee' : '#bbb' }}>.</i>
            <i style={{ color: this.state.loaditem === 2 ? '#eee' : '#bbb' }}>.</i>
            <i style={{ color: this.state.loaditem === 3 ? '#eee' : '#bbb' }}>.</i>
        </div>)
        let error = (<div className="text">load failed , please refresh and try again</div>)
        return (
            <div className="Loading">
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