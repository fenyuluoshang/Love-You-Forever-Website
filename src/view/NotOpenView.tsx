import React from 'react'
import {Link} from "react-router-dom";

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
export default class NotOpenView extends React.Component {

    public state = {
        loaditem: 1,
        loadinterval: 0
    }

    componentDidMount() {
        let interval = setInterval(() => {
            if (this.state.loaditem > 3)
                this.setState({loaditem: 1})
            else
                this.setState({loaditem: this.state.loaditem + 1})
        }, 500)
        this.setState({loadinterval: interval})
    }

    componentWillUnmount() {
        if (this.state.loadinterval)
            clearInterval(this.state.loadinterval)
    }

    render() {
        let loading = (<>
            this page has not open
            <i style={{color: this.state.loaditem === 1 ? '#eee' : '#bbb'}}>.</i>
            <i style={{color: this.state.loaditem === 2 ? '#eee' : '#bbb'}}>.</i>
            <i style={{color: this.state.loaditem === 3 ? '#eee' : '#bbb'}}>.</i>
        </>)
        return (
            <div className="Loading">
                <div className="textFrame">
                    <div className="title">Love You Forever</div>
                    <div className="text">
                        {loading}
                        <br/>
                        <Link style={{textDecoration: "underline"}} to="/about">know more about our project</Link>
                        &nbsp;or&nbsp;
                        <Link style={{textDecoration: "underline"}} to="/home">back to home</Link>
                    </div>
                </div>
            </div>
        )
    }
}