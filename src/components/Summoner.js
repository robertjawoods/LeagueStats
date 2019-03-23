import React, { Component } from "react"; 

class Summoner extends Component {   
    render() {
            return (
                <div>  
                {this.props.summoner.name &&
                        <div>     
                    <h2>Summoner Name</h2>
                    <p>{this.props.summoner.name}</p>

                    <h2>Summoner Level</h2>
                    <p>{this.props.summoner.summonerLevel}</p>
                    </div>
                }
                </div>
            );
    }
}

export default Summoner;