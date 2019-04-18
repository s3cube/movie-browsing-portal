import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../src/css/style.css';

export default class HelloWorld extends Component{
    render(){
        return(
            <div>
                <h1>HELLO</h1>
                Hello Tantrum!
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld/>,document.getElementById("app"));