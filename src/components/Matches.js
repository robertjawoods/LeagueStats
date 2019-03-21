import React, { Component } from "react";

class Matches extends Component {
<<<<<<< Updated upstream
=======
    state = {
        matchData: []
    }

    componentDidMount() {
        if (this.props.encryptedAccountId) {
            axios.get(API_URL + `api/match/matchlist/${this.props.encryptedAccountId}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
                    matchData: response.data
                })
            });
        }
    }

>>>>>>> Stashed changes
    render() {
        return (
            <div>
                <MatchList list={this.state.matchData} />
            </div>
        );
    }
}

export default Matches;