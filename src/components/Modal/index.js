import React, {Component} from "react";
import DetailedView from "../DetailedView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

export default class Modal extends Component {

    constructor(props){
        super(props);
        this.state = {
            showHideClassName : "modal display-none"
        }
    }

    render(){
        this.state.showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={this.state.showHideClassName}>
              <section className="modal-main">
                    <FontAwesomeIcon icon="times-circle" className="close-modal" onClick={this.props.handleClose} /> 
                    <DetailedView movieInfo={this.props.movieInfo} />
              </section>
            </div>
          );
    }
}

Modal.propTypes = {
    movieInfo:PropTypes.object,
    cast:PropTypes.object,
    handleClose:PropTypes.func,
    show:PropTypes.bool
}