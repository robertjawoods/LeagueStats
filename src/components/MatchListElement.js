import React, { Component } from "react";
import CHAMPION_IMAGE from "../data/constants";

class MatchListElement extends Component {
    render() {
        if (this.props.champion)
            return (
                <li>
                    <img className="championImage" src={`${CHAMPION_IMAGE}/${this.props.champion.image.full}`} alt={`${this.props.champion.name}`} />
                    <div className="matchDetails">
                        <p>Champion: {this.props.champion.name}</p>
                        <p>Lane: {this.props.match.lane}</p>
                        <p>Role: {this.props.match.role}</p>
                        <p>Match Type: {this.props.match.queue}</p>
                        <p>Date: {new Date(this.props.match.timestamp).toLocaleString()}</p>
                    </div>                    
                    <button className="selectMatchButton" type="button" onClick={() => this.props.onMatchView(this.props.match.gameId)}>View Match</button>
                </li>
            );

        return null;
    }
}

export default MatchListElement; 