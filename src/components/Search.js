import React, {Component} from "react";

class Search extends Component { 
    state = {
        query: "",
    }

    onSearchSubmit = () => {
        this.setState({
            query: this.search.value
        });
    }

    render ()
    {
        return (
            <form>
                <input placeholder="Summoner Name" 
                ref={input => this.search = input}
                onSubmit={this.onSearchSubmit}/>

                <p>{this.state.query}</p>
            </form>
        );
    }   
}

export default Search; 