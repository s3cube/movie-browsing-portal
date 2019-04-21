import React, {Component} from "react";
import PropTypes from 'prop-types'; 
export default class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            query:"",
            movies : []
        }
        this.queryAPI = this.queryAPI.bind(this);

    }
    
    queryAPI(event){
        var userTyped = event.target.value
        if(userTyped && userTyped.length > 1){
            fetch("https://api.themoviedb.org/3/search/movie?api_key=a12d64a929a0fed4d20b1778399123d7&language=en-US&query="+userTyped+"&page=1&include_adult=false")
            .then(movie_list=> movie_list.json())
            .then(
                (result) =>{
                    this.props.updateMovieList(result.results)
                },
                (error)=>{
                    console.log(error);
                }
            )
        }else{
            this.props.updateMovieList([])
        }
    }
    
    
    render(){
        return(
            <div className="text-center search-bar">
                    <input placeholder="Search for Movies" onChange={this.queryAPI} className="search-input" type = "text"/>
            </div>
        )
    }
}

SearchBar.propTypes = {
    updateMovieList:PropTypes.func
}