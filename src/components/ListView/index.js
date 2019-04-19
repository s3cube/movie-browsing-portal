import React, {Component} from "react";
import Card from "../Card/index"

export default class ListView extends Component {
    render(){
        const listOfMovies = this.props.movies.map((movie)=>{
            return <Card key={movie.id} movie={movie}/>
        })
        return(
            <div className="row bg-list list-view">
                <div>
                    {listOfMovies}
                </div>

            </div>
        )
    }
}