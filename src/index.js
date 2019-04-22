import React, {Component} from "react";
import ReactDOM from "react-dom";

//Import the main App component
import App from './components/App'
import '../src/css/style.css';

//Font Awesome related Imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faFire,faStar,faSearch,faCalendar,faTicketAlt,faTimesCircle,faClock } from '@fortawesome/free-solid-svg-icons'
library.add(faGlobe);
library.add(faFire);
library.add(faStar);
library.add(faSearch);
library.add(faCalendar);
library.add(faTicketAlt);
library.add(faTimesCircle);
library.add(faClock);

// This is the parent component that is rendered to the screen
export default class MoviesApp extends Component{
    render(){
        return(
            <App/>
        )
    }
}

ReactDOM.render(<MoviesApp/>,document.getElementById("app"));