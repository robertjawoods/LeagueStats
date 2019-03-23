import React, { Component } from "react";
import CHAMPION_IMAGE from "../data/constants";

class MatchListElement extends Component {
    render() {
        if (this.props.champion)
            return (
                <li>
                    <p>Champion: {this.props.champion.name}</p>
                    <p>Lane: {this.props.match.lane}</p>
                    <p>Role: {this.props.match.role}</p>
                    <p>Match Type: {this.props.match.queue}</p>
                    <p>Date: {new Date(this.props.match.timestamp).toLocaleString()}</p>
                    <img class="champion-image"src={`${CHAMPION_IMAGE}/${this.props.champion.image.full}`} alt={`${this.props.champion.name}`} />
                    <button type="button" onClick={() => this.props.onMatchView(this.props.match.gameId)}>View Match</button>
                </li>
            );

        return null;
    }
}

export default MatchListElement; 