import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./constants";
import MatchList from "./MatchList";

class Matches extends Component {

    state = {
        matchData: []
    }

    componentDidMount() {
        if (this.props.encryptedAccountId) {
            axios.get(API_URL + `api/match/matchlist/${this.props.encryptedAccountId}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
                    matchData: response.data
                })
            });
        }
    }

    render() {
        return (
            <div>
                <MatchList list={this.state.matchData.matches} />
            </div>
        );
    }
}

export default Matches;