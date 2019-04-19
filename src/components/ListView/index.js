import React, {Component} from "react";
import Card from "../Card/index"

export default class ListView extends Component {
   
    constructor(props){
        super(props);
    }


    render(){
        const listOfMovies = this.props.movies.map((movie)=>{
            return <Card handleCardClick={this.props.handleCardClick} key={movie.id} movie={movie}/>
        })
        return(
            <div className="row bg-list list-view">
                {/* <button onClick={this.onCardClick}>Button</button> */}
                <div>
                    {listOfMovies}
                </div>

            </div>
        )
    }
}