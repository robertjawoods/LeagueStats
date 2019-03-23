import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../data/constants";

class Search extends Component {
    constructor(props) {
        super(props);

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit = (e) => {
        e.preventDefault();

        console.log(API_URL);

        axios.get(API_URL + "api/summoner/byname/" + this.search.value)
            .then((result) => {
                this.props.onSummonerChange(result);
            });
        // Why is this always catching??
        // .catch((error) => {
        //     if (error.response.status === 404) {
        //         this.setState({
        //             message: `Unable to find summoner '${this.search.value}'`,
        //             status: error.response.status,
        //             summoner: error.data
        //         });
        //     }
        // });
    }

    render() {
        return (
            <div>
                <form  className="searchBar" onSubmit={(e) => this.onSearchSubmit(e)}>
                    <input placeholder="Summoner Name" ref={input => this.search = input} />
                </form>
            </div>
        );
    }
}

export default Search; 