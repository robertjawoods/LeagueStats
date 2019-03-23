import React, { Component } from "react";
import MatchListElement from "./MatchListElement";
import _ from "underscore";


class MatchList extends Component {
    render() {
        if (this.props.list) {
            return (
                <div>
                    <ul>{_.map(this.props.list, (match) => <MatchListElement match={match} key={match.gameId} />)}</ul>
                </div>
            );
        }
        else {
            return (
                <h1>Please select a summoner</h1>
            );
        }
    }
}

export default MatchList;