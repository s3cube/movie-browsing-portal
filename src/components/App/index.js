import React, {Component} from "react";
import SearchBar from '../Searchbar/';
import ListView from '../ListView/';
import Modal from "../Modal/";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faFire,faStar,faSearch,faCalendar,faTicketAlt,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faGlobe);
library.add(faFire);
library.add(faStar);
library.add(faSearch);
library.add(faCalendar);
library.add(faTicketAlt);
library.add(faTimesCircle);


export default class App extends Component {
    constructor(props){
        super(props)

        this.handleCardClick =this.handleCardClick.bind(this);
        this.updateMovieList = this.updateMovieList.bind(this);
        this.showDetailed = this.showDetailed.bind(this);
        this.hideDetailed = this.hideDetailed.bind(this);

        this.state = {
            movies : [],
            defaultMovies:[],
            selectedMovie:{},
            selectedMovieCast:{},
            detailedView:false,
        }
    } 

    componentDidMount(){

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=a12d64a929a0fed4d20b1778399123d7&language=en-US&page=1")
        .then(movie_list=> movie_list.json())
        .then(
            (result) =>{
                this.setState({
                    movies : result.results,
                    defaultMovies:result.results
                })
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    showDetailed(){
        this.setState({
            detailedView:true
        });
    }

    hideDetailed(){
        this.setState({
            detailedView:false
        });
    }

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
            <div className="container">
                    <div className="search">
                        <SearchBar updateMovieList = {this.updateMovieList}/>
                    </div>
                    <div className="list">
                        <ListView handleCardClick={this.handleCardClick} movies={this.state.movies}/>
                    </div>
                    <div className="detailed-modal">
                        <Modal show={this.state.detailedView} handleClose={this.hideDetailed} movieInfo={this.state.selectedMovie} />
                    </div>
            </div>
        )
    }
}