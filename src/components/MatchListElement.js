import React, { Component } from "react";
import _ from "underscore";
import { champions } from "../data/champions";
import CHAMPION_IMAGE from "../data/constants";

class MatchListElement extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            champion: _.find(champions.data, (champ) => champ.key === `${this.props.match.champion}`)
        };      
    }

    render() {
        if (this.state.champion)
            return (
                <li>
                    <p>Champion: {this.state.champion.name}</p>
                    <p>Lane: {this.props.match.lane}</p>
                    <p>Role: {this.props.match.role}</p>
                    <p>Match Type: {this.props.match.queue}</p>
                    <p>Date: {new Date(this.props.match.timestamp).toLocaleString()}</p>
                    <img src={`${CHAMPION_IMAGE}/${this.state.champion.image.full}`} alt={`${this.state.champion.name}`} />
                    <button type="button" onClick={this.props.onMatchView(this.props.match.gameId)}>View Match</button>
                </li>
            );

        return null;
    }
}

export default MatchListElement; 