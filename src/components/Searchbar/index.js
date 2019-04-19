import React, {Component} from "react";


export default class SearchBar extends Component {
    render(){
        return(
            <div className="row bg-search text-center">
                <div className="search-bar">
                    <input type = "text"></input>
                    <button>Click kar bhai</button>
                </div>
            </div>
        )
    }
}