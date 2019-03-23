import React,  { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Matches from "./Matches";

class App extends Component {
    state = {
        summoner: {}    }

    constructor(props){
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
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <h1>League Stats</h1>
                    <ul className="navigation-bar">
                        <li><NavLink to="/">Home</NavLink></li> 
                        <li><NavLink to="/matches">Matches</NavLink></li>
                    </ul>

                    <div className="content">

                        <Route exact path="/" render= { (props) =>  <Home onValidSummoner={this.onSummonerSelected} selectedSummoner={this.state.summoner}/> }/>
                        <Route path="/matches" render={
                            (props) =>  <Matches encryptedAccountId={this.state.summoner.accountId}/>
                        }/>

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;