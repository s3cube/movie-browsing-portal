import React, {Component} from "react";


export default class SearchBar extends Component {
    render(){
        return(
            <div className="row bg-search text-center search-bar">
                <div className="search-bar">
                    <input type = "text"></input>
                    <button>Search</button>
                </div>
            </div>
        )
    }
}