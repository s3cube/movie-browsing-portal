import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../src/css/style.css';
import '../src/css/simple-grid.css';
import App from './components/App/index'
export default class HelloWorld extends Component{
    render(){
        return(
            <App/>
        )
    }
}

ReactDOM.render(<HelloWorld/>,document.getElementById("app"));