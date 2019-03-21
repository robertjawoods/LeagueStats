import React,  { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Matches from "./Matches";
import Summoner from "./Summoner";

class App extends Component {
<<<<<<< Updated upstream
=======
    state = {
        summoner: []
    }

    constructor(props){
        super(props);

        this.onSummonerSelected = this.onSummonerSelected.bind(this);
    }

    onSummonerSelected(summoner) {
        this.setState({
            summoner: summoner
        });
    }

>>>>>>> Stashed changes
    render() {
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <h1>League Stats</h1>
                    <ul className="navigation-bar">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/summoner">Summoner</NavLink></li>
                        <li><NavLink to="/matches">Matches</NavLink></li>
                    </ul>

                    <div className="content">
<<<<<<< Updated upstream
                        <Route exact path="/" component={Home} />
                        <Route path="/summoner" component={Summoner} />
                        <Route path="/matches" component={Matches} />
=======
                        <Route exact path="/" render={ <Home onValidSummoner={this.onSummonerSelected}/>}/>
                        <Route path="/matches" render={
                            (props) =>  <Matches encryptedAccountId={this.state.summoner.encryptedAccountId}/>
                        }/>
>>>>>>> Stashed changes
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;