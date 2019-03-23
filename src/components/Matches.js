import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../data/constants";
import MatchList from "./MatchList";

class Matches extends Component {

    state = {
        matchData: []
    }

    onMatchView(e) {
        console.log(e);
    }

    componentDidMount() {
        if (this.props.encryptedAccountId) {
            axios.get(API_URL + `api/match/matchlist/${this.props.encryptedAccountId}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
                    matchData: response.data
                });
            });
        }
    }

    render() {
        return (
            <div>
                <MatchList list={this.state.matchData.matches} onMatchView={this.onMatchView}/>
            </div>
        );
    }
}

export default Matches;