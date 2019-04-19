import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../src/css/style.css';
import '../src/css/simple-grid.css';

export default class HelloWorld extends Component{
    render(){
        return(
            <div className="container">
                <div className="row-3">
                </div>
                <div className="row-3">
                <h1>HELLO</h1>
                </div>
                <div className="row-3">
                </div>
               
                Hello Tantrum!
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld/>,document.getElementById("app"));