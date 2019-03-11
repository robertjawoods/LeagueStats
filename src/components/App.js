import React,  { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Matches from "./Matches";
import Summoner from "./Summoner";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>League Stats</h1>
                    <ul className="navigation-bar">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/summoner">Summoner</NavLink></li>
                        <li><NavLink to="/matches">Matches</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/summoner" component={Summoner} />
                        <Route path="/matches" component={Matches} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;