import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class HelloWorld extends Component{
    render(){
        return(
            <div>
                Hello Tantrum!
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld/>,document.getElementById("app"));