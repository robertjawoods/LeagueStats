import React, { Component } from "react";
import MatchListElement from "./MatchListElement";
import { champions } from "../data/champions";
import _ from "underscore";



class MatchList extends Component {
    state = {
        championMap: {}
    };


    componentDidMount () {
        var x =_.indexBy(champions.data, "key");

        this.setState({championMap: x});
    }

    render() {
        if (this.props.list) {
            return (
                <div id="scrollArea">
                    <ul className="matchDetailsPane">{_.map(this.props.list, (match) => <MatchListElement match={match} champion={this.state.championMap[match.champion]} key={match.gameId} onMatchView={this.props.onMatchView} />)}</ul>
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