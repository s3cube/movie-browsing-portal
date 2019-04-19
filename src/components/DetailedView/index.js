import React, {Component} from "react";

export default class DetailedView extends Component {

    constructor(props){
        super(props);
        this.state = {
            active :false,
            movieInfo:{}
        }
    }

    render(){
        const movie = this.props.movieInfo
        return(
            <div className="row bg-detailed detailed-view" >
                     <div className="row detailed-hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                            <div className="hero-overlay">
                                <div className="hero-content">
                                    {this.props.active == true ? 
                                    <div>
                                        <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                                        <div className="hero-title">
                                            <h2>{movie.title}</h2>
                                            <span>{movie.original_language}</span>|
                                            <span>{movie.popularity}</span>|
                                            <span>{movie.vote_average}</span>

                                        </div>
                                    </div>
                                    : null}
                                </div>
                            </div>
                        </div>
                        <div className="row top-30">
                            <p>{movie.overview}</p>
                        </div>
                        

            </div>
        )
    }
}