import React, {Component} from "react";

export default class DetailedView extends Component {

    constructor(props){
        super(props);
        this.setState({
            movieInfo:{}
        })
    }
    componentDidMount(){
        
        console.log(this.props.selectedCard.id);
        fetch("https://api.themoviedb.org/3/movie/${this.props.selectedCard.id}?api_key=a12d64a929a0fed4d20b1778399123d7")
        .then(movie_info=> movie_info.json())
        .then(
            (result) =>{
                console.log("SUCCESS",result);
                this.setState({
                    movieInfo : result.results
                })
            },
            (error)=>{
                console.log("FAILED",error);
            }
        )
    }
    render(){
        const movie = this.props.selectedCard
        return(
            <div className="row bg-detailed detailed-view" >
                    <div className="row detailed-hero" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                                <div className="hero-title">
                                    <h2>{movie.title}</h2>
                                    <span>{movie.original_language}</span>|
                                    <span>{movie.popularity}</span>|
                                    <span>{movie.vote_average}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row top-30">
                        <p>{movie.overview}</p>
                        {/* Add Information here */}
                    </div>
            </div>
        )
    }
}