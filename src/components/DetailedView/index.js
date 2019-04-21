import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DetailedView = ({movieInfo}) =>  (
            <div className="detailed-view" >
                        <div className="detailed-hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})` }}>
                            <div className="hero-overlay">
                                    <div className="hero-content">
                                            <img className="hero-poster" src={"https://image.tmdb.org/t/p/w200"+movieInfo.poster_path}/>
                                            <div className="hero-title">
                                                <h2>{movieInfo.title}</h2>
                                                <span className="hero-property">
                                                    <span className="faIcon"> <FontAwesomeIcon icon="globe" /> </span> 
                                                    {movieInfo.original_language}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> <FontAwesomeIcon className="red" icon="fire" /> </span> 
                                                    {movieInfo.popularity}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> <FontAwesomeIcon className="yellow" icon="star" /> </span> 
                                                    {movieInfo.vote_average}
                                                </span>
                                            </div>                            
                                    </div>
                                </div>
                            </div>
                            <div className="pd-top-60 pd-left-5">
                                <h3>Overview:</h3>
                                <p>{movieInfo.overview}</p>
                            </div>
            </div>
        );

export default DetailedView;