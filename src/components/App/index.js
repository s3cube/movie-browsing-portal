import React, {Component} from "react";
import SearchBar from '../Searchbar/index';
import ListView from '../ListView/index';
import DetailedView from '../DetailedView/index';


export default class App extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SearchBar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <ListView/>
                    </div>
                    <div className="col-9">
                        <DetailedView/>
                    </div>
                </div>
            </div>
        )
    }
}