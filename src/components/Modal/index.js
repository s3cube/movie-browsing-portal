import React, {Component} from "react";
import DetailedView from "../DetailedView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Modal extends Component {

    constructor(props){
        super(props);
        this.state = {
            showHideClassName : "modal display-none"
        }
    }

    render(){
        console.log(this.state.showHideClassName);
        this.state.showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={this.state.showHideClassName}>
              <section className="modal-main">
              <FontAwesomeIcon icon="times-circle" class="close-modal" onClick={this.props.handleClose} /> 
              {/* <button type="button" class="close-modal" onClick={this.props.handleClose}>&times;</button> */}
                  <DetailedView movieInfo={this.props.movieInfo} />
              </section>
            </div>
          );
    }
}