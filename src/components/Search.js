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