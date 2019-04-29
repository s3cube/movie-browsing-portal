import React, {Component} from "react";
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            query:""
        }

        this.queryAPI = this.queryAPI.bind(this);
    }
    
    //Trigger the query if one character is present, update the information in the parent
    queryAPI(event){
        var userTyped = event.target.value
        if(userTyped && userTyped.length > 1){
            fetch("https://api.themoviedb.org/3/search/movie?api_key=##APIKEY##&language=en-US&query="+userTyped+"&page=1&include_adult=false")
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
                    <span className="ticket-icon" >
                        <span className="logo">Movie Hub</span>
                        <FontAwesomeIcon icon="ticket-alt"  /> 
                    </span>
                    <input placeholder="Search for Movies" onChange={this.queryAPI} className="search-input" type = "text"/>
                    <FontAwesomeIcon icon="search" className="search-icon" /> 

            </div>
        )
    }
}

SearchBar.propTypes = {
    updateMovieList:PropTypes.func
}