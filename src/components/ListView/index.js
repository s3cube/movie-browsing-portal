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
            if(movie.poster_path != null && movie.adult == false) 
                return <Card handleCardClick={this.props.handleCardClick} key={movie.id} movie={movie}/>
        })
        return(
            <div>
                <div className="list-view">
                        {listOfMovies}
                </div>
                <p className="paginate">1|2|3|4</p>
            </div>
        )
    }
}

ListView.propTypes = {
    handleCardClick:PropTypes.func,
    movies:PropTypes.array
}