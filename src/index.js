import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../src/css/style.css';
import App from './components/App'

export default class MoviesApp extends Component{
    render(){
        return(
            <App/>
        )
    }
}

ReactDOM.render(<MoviesApp/>,document.getElementById("app"));