import React,  { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Matches from "./Matches";

class App extends Component {
    state = {
        encryptedAccountId: ""
    }

    constructor(props){
        super(props);

        this.onSummonerSelected = this.onSummonerSelected.bind(this);
    }

    onSummonerSelected(summoner) {
        this.setState({
            encryptedAccountId: summoner.accountId
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
                        <Route exact path="/" render={ 
                            (props) => <Home onValidSummoner={this.onSummonerSelected}/>
                        }/>
                        <Route path="/matches" render={
                            (props) =>  <Matches encryptedAccountId={this.state.encryptedAccountId}/>
                        }/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;