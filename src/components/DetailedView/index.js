import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class DetailedView extends Component {
    
    render(){
        const movie = this.props.movieInfo
        return(
            <div className="detailed-view" >
                        <div className="detailed-hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                            <div className="hero-overlay">
                                    <div className="hero-content">
                                            <img className="hero-poster" src={"https://image.tmdb.org/t/p/w200"+movie.poster_path}/>
                                            <div className="hero-title">
                                                <h2>{movie.title}</h2>
                                                <span className="hero-property">
                                                    <span className="faIcon"> <FontAwesomeIcon icon="globe" /> </span> 
                                                    {movie.original_language}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> <FontAwesomeIcon icon="fire" /> </span> 
                                                    {movie.popularity}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> <FontAwesomeIcon icon="star" /> </span> 
                                                    {movie.vote_average}
                                                </span>
                                            </div>                            
                                    </div>
                                </div>
                            </div>
                            <div className="row pd-top-10 pd-left-5">
                                <h3>Overview:</h3>
                                <p>{movie.overview}</p>
                            </div>
            </div>
        )
    }
}