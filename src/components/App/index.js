import React, {Component} from "react";
import SearchBar from '../Searchbar/';
import ListView from '../ListView/index'
import Modal from "../Modal/";

//This is the main Component that includes the key child components
export default class App extends Component {
    constructor(props){
        super(props)

        // Function binding
        this.handleCardClick =this.handleCardClick.bind(this);
        this.updateMovieList = this.updateMovieList.bind(this);
        this.showDetailed = this.showDetailed.bind(this);
        this.hideDetailed = this.hideDetailed.bind(this);

        //Setting state to be used across the application 
        this.state = {
            movies : [],
            defaultMovies:[],
            selectedMovie:{},
            selectedMovieCast:{},
            detailedView:false,
        }
    } 

    //Fetch the popular movies upon launch
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=a12d64a929a0fed4d20b1778399123d7&language=en-US&page=1")
        .then(movie_list=> movie_list.json())
        .then(
            (result) =>{
                //Populate both, the current list of movies and a default fall-back for the future
                this.setState({
                    movies : result.results,
                    defaultMovies:result.results
                })
            },
            (error)=>{
                //Currently, console any errors to the screen
                console.log(error);
            }
        )
    }

    //Function to set the detailedView flag to true
    showDetailed(){
        this.setState({
            detailedView:true
        });
    }

    //Function to set the detailedView flag to false
    hideDetailed(){
        this.setState({
            detailedView:false
        });
    }

    //This function updates the movie list after the search bar updates the results
    updateMovieList(movie_list){
        if(movie_list.length != 0){
            this.setState({
                movies:movie_list
            })
        }else{
            this.setState({
                movies:this.state.defaultMovies
            })
        } 
    }

    //When the View More is clicked, I hit two APIs in paralle, and set the respective variables
    handleCardClick(movieId){

        Promise.all([
            fetch("https://api.themoviedb.org/3/movie/"+ movieId+"?api_key=a12d64a929a0fed4d20b1778399123d7").then(movie_info=> movie_info.json()),
            fetch("https://api.themoviedb.org/3/movie/"+ movieId+"/credits?api_key=a12d64a929a0fed4d20b1778399123d7").then(actor_info=> actor_info.json())
        ]).then(([movie,credits]) =>{
            this.setState({
                selectedMovie : movie,
                selectedMovieCast:credits.cast,
                detailedView:true
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className="container" className={this.state.detailedView ? "container fixed" : "container relative"}>
                    <div className="search">
                        <SearchBar updateMovieList = {this.updateMovieList}/>
                    </div>
                    <div className="list">
                        <ListView handleCardClick={this.handleCardClick} movies={this.state.movies}/>
                    </div>
                    {/* This Modal is hidden by default */}
                    <div className="detailed-modal">
                        <Modal show={this.state.detailedView} handleClose={this.hideDetailed} movieInfo={this.state.selectedMovie} />
                    </div>
            </div>
        )
    }
}