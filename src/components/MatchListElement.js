import React, { Component } from "react";
import _ from "underscore";
import { champions } from "./champions";



class MatchListElement extends Component {
    constructor(props) {
        super(props);

        var x = _.find(champions.data, (champ) => champ.key === `${props.match.champion}`);

        this.state = {
            champion: [x]
        };
    }

    onMatchView(e) {
        e.preventDefault();
    }

    render() {
        return (
            <li>
                <p>Champion: {this.state.champion.name}</p>
                <p>Lane: {this.props.match.lane}</p>
                <p>Role: {this.props.match.role}</p>
                <p>Match Type: {this.props.match.queue}</p>
                <p>Date: {new Date(this.props.match.timestamp).toLocaleString()}</p>
                <button type="button" onClick={(e) => this.onMatchView(e)}>View Match</button>
            </li>
        );
    }
}

export default MatchListElement; 