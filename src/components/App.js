import React, { Component } from "react";
import Home from "./Home";
import Matches from "./Matches";

class App extends Component {
    state = {
        summoner: {}
    }

    constructor(props) {
        super(props);

        this.onSummonerSelected = this.onSummonerSelected.bind(this);
    }

    onSummonerSelected(summoner) {
        this.setState({
            summoner: summoner
        });
    }

    render() {
        return (

            <div className="content">
                <Home onValidSummoner={this.onSummonerSelected} selectedSummoner={this.state.summoner} />
                {this.state.summoner.accountId &&
                    <Matches encryptedAccountId={this.state.summoner.accountId} />
                }
            </div>      
        );
    }
}

export default App;