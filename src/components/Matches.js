import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./constants";

class Matches extends Component {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> master
    state = {
        matchData: []
    }

    componentDidMount() {
        if (this.props.encryptedAccountId) {
            axios.get(API_URL + `api/match/matchlist/${this.props.encryptedAccountId}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
<<<<<<< HEAD
                    matchData: response.data
=======
                    matchList: response.data
>>>>>>> master
                })
            });
        }
    }

<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> master
    render() {
        return (
            <div>
                <MatchList list={this.state.matchData} />
            </div>
        );
    }
}

export default Matches;