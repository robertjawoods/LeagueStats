import React, {Component} from "react";
import { API_URL } from "./constants.js";

class Search extends Component { 
    state = {
        summoner: "",
    }

    onSearchSubmit = (e) => {
        e.preventDefault();

       fetch(API_URL + "summoner/GetSummonerByAccountName/" + this.search.value)
       .then((result) => {
                this.setState({
                    summoner: JSON.stringify(result)
                });
            })
        .catch();
    }

    render ()
    {
        return (
            <form onSubmit={(e) => this.onSearchSubmit(e)}>
                <input placeholder="Summoner Name" 
                ref={input => this.search = input}/>
                <input type="submit" style={{display: "none"}}/>

                <p>{this.state.summoner}</p>
            </form>
        );
    }  
    
}

export default Search; 