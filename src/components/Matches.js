import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../data/constants";
import MatchList from "./MatchList";
import MatchDetails from "./MatchDetails";

class Matches extends Component {

    constructor (props) {
        super(props);        

        this.onMatchView = this.onMatchView.bind(this);
    }

    state = {
        matchListData: [],
        selectedMatchId: ""
    }

    onMatchView(e) {
        this.setState({selectedMatchId: e});
    }

    componentDidMount() {
        if (this.props.encryptedAccountId) {
            axios.get(API_URL + `api/match/matchlist/${this.props.encryptedAccountId}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
                    matchListData: response.data
                });
            });
        }
    }

    render() {
        return (
            <div>
                <MatchList list={this.state.matchListData.matches} onMatchView={this.onMatchView}/>
            </div>
        );
    }
}

export default Matches;