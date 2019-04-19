import React, {Component} from "react";


export default class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            query:"",
            movies : []
        }
        this.queryAPI = this.queryAPI.bind(this);

    }
    // 
    queryAPI(event){
        console.log("User typed", event.target.value)
        var userTyped = event.target.value
        if(userTyped && userTyped.length > 1){
            fetch("https://api.themoviedb.org/3/search/movie?api_key=a12d64a929a0fed4d20b1778399123d7&language=en-US&query="+userTyped+"&page=1&include_adult=false")
            .then(movie_list=> movie_list.json())
            .then(
                (result) =>{
                    console.log(result);
                    this.props.updateMovieList(result.results)
                },
                (error)=>{
                    console.log(error);
                }
            )
        }else{
            this.props.updateMovieList([])
        }
    }
    
    
    render(){
        return(
            <div className="row bg-search text-center search-bar">
                <div className="search-bar">
                    <input placeholder="Search for Movies" onChange={this.queryAPI} className="search-input" type = "text"></input>
                    {/* <button>Search</button> */}
                </div>
            </div>
        )
    }
}