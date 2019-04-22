import React, {Component} from "react";
import Card from "../Card"
import PropTypes from 'prop-types';

export default class ListView extends Component {
   
    constructor(props){
        super(props);
    }

    render(){
        //Iterate through the list of movies, and return cards
        const listOfMovies = this.props.movies.map((movie)=>{
            if(movie.poster_path != null) 
                return <Card handleCardClick={this.props.handleCardClick} key={movie.id} movie={movie}/>
        })
        return(
            <div className="list-view">
                    {listOfMovies}
            </div>
        )
    }
}

ListView.propTypes = {
    handleCardClick:PropTypes.func,
    movies:PropTypes.array
}