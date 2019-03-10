import { Component } from "react";

class App extends Component {
    render() {
        return (
            <div>
                <h1>League Stats</h1>
                <ul className="navigation-bar">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/summoner">Summoner</a></li>
                    <li><a href="/matches">Matches</a></li>
                </ul>

                <div className="content">

                </div>
            </div>
        );
    }
}

export default App;