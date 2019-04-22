import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Referenced from https://stackoverflow.com/a/16233919/4759033
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

//Stateless function for handling the detailed view
const DetailedView = ({movieInfo,cast}) =>  (
            <div className="detailed-view" >
                        <div className="detailed-hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})` }}>
                            <div className="hero-overlay">
                                    <div className="hero-content">
                                            <img className="hero-poster" src={"https://image.tmdb.org/t/p/w200"+movieInfo.poster_path}/>
                                            <div className="hero-title hide-mobile">
                                                <h2>{movieInfo.title}</h2>
                                                <span className="hero-property">
                                                    <span className="faIcon"> 
                                                        <FontAwesomeIcon icon="globe" />
                                                     </span> 
                                                    {movieInfo.original_language}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> 
                                                        <FontAwesomeIcon className="red" icon="fire" /> 
                                                    </span> 
                                                    {movieInfo.popularity}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> 
                                                        <FontAwesomeIcon className="yellow" icon="star" />
                                                     </span> 
                                                    {movieInfo.vote_average}
                                                </span> | 
                                                <span className="hero-property">
                                                    <span className="faIcon">
                                                         <FontAwesomeIcon className="white" icon="clock" />
                                                     </span> 
                                                    {movieInfo.runtime} minutes
                                                </span>
                                            </div>                            
                                    </div>
                                </div>
                            </div>
                            {/* Desktop View */}
                            <div className="hide-mobile pd-top-60 pd-left-5">
                                <h3>Overview:</h3>
                                <p>{movieInfo.overview}</p>
                                <h3>Revenue:</h3>
                                <p>{formatter.format(movieInfo.revenue)}</p>
                                
                            </div>
                            {/* Mobile View */}
                            <div className="details-mobile pd-left-5">
                                <h2>{movieInfo.title}</h2>
                                <span className="hero-property">
                                                    <span className="faIcon">
                                                        <FontAwesomeIcon icon="globe" /> 
                                                    </span> 
                                                    {movieInfo.original_language}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon"> 
                                                        <FontAwesomeIcon className="red" icon="fire" /> 
                                                    </span> 
                                                    {movieInfo.popularity}
                                                </span> |
                                                <span className="hero-property">
                                                    <span className="faIcon">
                                                         <FontAwesomeIcon className="yellow" icon="star" />
                                                     </span> 
                                                    {movieInfo.vote_average}
                                                </span>
                                <h3>Overview:</h3>
                                <p>{movieInfo.overview}</p>
                                <h3>Revenue:</h3>
                                <p>{formatter.format(movieInfo.revenue)}</p>
                            </div>
            </div>
        );

export default DetailedView;