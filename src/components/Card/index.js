import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Card extends Component {

    constructor(props){
        super(props);
        this.handleLocalClick =this.handleLocalClick.bind(this);
    }

    handleLocalClick(e){
        e.preventDefault();
        console.log("Card click")
        this.props.handleCardClick(this.props.movie.id);
    }

    render(){
        return(
            <div className="row bg-card card-view" onClick={this.handleLocalClick}>
             
                    <div className="col-4 card-poster">
                        <img className ="card-img" src={"https://image.tmdb.org/t/p/w300"+this.props.movie.poster_path}/>
                    </div>
            </div>
        )
    }
}