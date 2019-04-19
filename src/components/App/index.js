import React, {Component} from "react";
import SearchBar from '../Searchbar/index';
import ListView from '../ListView/index';
import DetailedView from '../DetailedView/index';


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies : []
        }
    } 
    componentDidMount(){
        fetch("https://810a6fc1-026e-4f03-96ba-506a06e57d98.mock.pstmn.io/data")
        .then(movie_list=> movie_list.json())
        .then(
            (result) =>{
                console.log(result);
                this.setState({
                    movies : result.results
                })
            },
            (error)=>{
                console.log(error);
            }
        )
    }
   

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