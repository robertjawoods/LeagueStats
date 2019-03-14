import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./constants";

class Matches extends Component {
    state = {
        matchData: []
    }

    componentDidMount() {
        if (this.props.encryptedAccountId) {
            axios.get(API_URL + `match/getmatchesbyaccount/${this.props.encryptedAccountId}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
                    matchList: response.data
                })
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Matches</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula risus. Quisque malesuada tempor nisl vitae tempus. Suspendisse potenti. Donec placerat risus et quam pulvinar porta nec a tortor. Nam sodales, turpis et semper varius, felis risus aliquam justo, eget faucibus ligula mi sed arcu. Proin faucibus justo et tortor fringilla dictum vitae vel tortor. Integer auctor enim leo, vitae dignissim nibh pellentesque quis. Sed neque mi, cursus sit amet dolor quis, facilisis laoreet dui. Nam sodales venenatis facilisis. Sed quis nulla lobortis, sollicitudin ligula eget, maximus elit. Suspendisse tincidunt enim metus, sit amet cursus nisl tristique sit amet.
                </p>
            </div>
        );
    }
}

export default Matches;