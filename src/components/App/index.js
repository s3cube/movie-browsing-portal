import React, {Component} from "react";
import SearchBar from '../Searchbar/index';
import ListView from '../ListView/index';
import DetailedView from '../DetailedView/index';
import ExperimentView from '../ExperimentView/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faFire,faStar,faSearch,faCalendar } from '@fortawesome/free-solid-svg-icons'
import Modal from "../Modal";
library.add(faGlobe);
library.add(faFire);
library.add(faStar);
library.add(faSearch);
library.add(faCalendar);


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
            selectedCard : {},
            active :false,
            movieInfo:{},
            detailedView:false
        }
    } 
    componentDidMount(){
        fetch("https://810a6fc1-026e-4f03-96ba-506a06e57d98.mock.pstmn.io/data")
        .then(movie_list=> movie_list.json())
        .then(
            (result) =>{
                console.log(result);
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


    handleCardClick(movie){

        console.log(movie);
        fetch("https://api.themoviedb.org/3/movie/"+ movie+"?api_key=a12d64a929a0fed4d20b1778399123d7")
        .then(movie_info=> movie_info.json())
        .then(
            (result) =>{
                console.log("Got clicked",result);
                this.setState({
                    movieInfo : result,
                    active:true,
                    detailedView:true
                })
            },
            (error)=>{
                console.log("FAILED",error);
            }
        )
    }
   
    render(){
        return(
            <div className="container">
                    <div className="search">
                        <SearchBar updateMovieList = {this.updateMovieList}/>
                    </div>
                    <div className="experiment">
                        <ExperimentView handleCardClick={this.handleCardClick} movies={this.state.movies}/>
                    </div>
                    <div className="detailed-modal">
                        {/* <Modal show={this.state.detailedView} handleClose={this.hideDetailed} movieInfo={this.state.movieInfo} /> */}
                        <Modal show={this.state.detailedView} handleClose={this.hideDetailed} movieInfo={this.state.movieInfo} />
                    </div>
                    {/* <div className="list">
                        <ListView handleCardClick={this.handleCardClick} movies={this.state.movies} />
                    </div>
                    <div className="detailed">
                    </div> */}
            </div>
        )
    }
}