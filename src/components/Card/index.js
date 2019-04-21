import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

export default class Card extends Component {

    constructor(props){
        super(props);
        this.handleLocalClick =this.handleLocalClick.bind(this);
        this.truncateText = this.truncateText.bind(this);
    }

    handleLocalClick(e){
        e.preventDefault();
        this.props.handleCardClick(this.props.movie.id);
    }

    truncateText(description){
        if(description.length > 120){
            var length = 3;
            var myTruncatedString = description.substring(0,120)+'...';
            return myTruncatedString;
        }
        return description;
    }

    render(){
        return(
            <div className="bg-card cardcopy-view" >
                    <div className="cardcopy-poster">
                        <img className ="cardcopy-img" src={"https://image.tmdb.org/t/p/w300"+this.props.movie.poster_path}/>
                        <div className="card-overlay" >
                                <div className="card-info">
                                    <h2>{this.props.movie.title}</h2>
                                    <p><FontAwesomeIcon icon="star" className="yellow" /> {this.props.movie.vote_average}</p>
                                    <p><FontAwesomeIcon icon="calendar" /> {this.props.movie.release_date}</p>
                                </div>
                                <div className="card-overview">
                                   {this.truncateText(this.props.movie.overview)}
                                </div>
                                <button className="overlay-button" onClick={this.handleLocalClick}>View More</button>
                        </div>
                    </div>
            </div>
        )
    }
}

Card.propTypes = {
    movie:PropTypes.object,
    handleCardClick:PropTypes.func
}
