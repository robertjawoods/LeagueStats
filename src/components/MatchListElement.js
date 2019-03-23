import React, { Component } from "react";
import _ from "underscore";
import  champions from "lol-champions";



class MatchListElement extends Component {
    champion = {};

    componentDidMount(){
        var matchChamp = _.find(champions, (champ) => champ.key === this.props.match.champion);

        this.champion =  matchChamp;

        console.log(this.champion);
    }
    
    onMatchView(e) {
        e.preventDefault();
    }
    
    render() {
        return(
            <li>
                <p>Champion: {this.props.match.champion}</p> 
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