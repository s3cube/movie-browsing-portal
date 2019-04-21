import React, {Component} from "react";
import CardCopy from "../CardCopy/index"

export default class ExperimentView extends Component {
   
    constructor(props){
        super(props);
    }


    render(){
        const listOfMovies = this.props.movies.map((movie)=>{
            if(movie.poster_path != null) 
                return <CardCopy handleCardClick={this.props.handleCardClick} key={movie.id} movie={movie}/>
        })
        return(
            <div className="row bg-experiment experiment-view">
                    {listOfMovies}
            </div>
        )
    }
}