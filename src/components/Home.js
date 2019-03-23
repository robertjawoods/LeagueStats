import React, { Component } from "react";
import Search from "./Search";
import Summoner from "./Summoner";

class Home extends Component {
    state = {
        summoner: [],
        status: ""
    }

    constructor(props) {
        super(props);

        this.setResponse = this.setResponse.bind(this);
    }

    componentDidMount() {
        this.setState({
            summoner: this.props.selectedSummoner
        });
    }

    setResponse(response) {
        this.setState({
            summoner: response.data,
            status: response.status
        });
        
        if (this.state.status === 200) {
            this.props.onValidSummoner(this.state.summoner);
        }
    }

    render() {
        return (
            <div>
                <Search onSummonerChange={this.setResponse} />
                <Summoner summoner={this.state.summoner} />
            </div>
        );
    }
}

export default Home;