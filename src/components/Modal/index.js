import React, {Component} from "react";
import DetailedView from "../DetailedView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({movieInfo,show,handleClose,sideClickHandle}) => (
    <div className={show ? "modal display-block" : "modal display-none"}>
                  <section className="modal-main">
                        <FontAwesomeIcon icon="times-circle" className="close-modal" onClick={handleClose} /> 
                        <DetailedView movieInfo={movieInfo} />
                   </section>
     </div>
);

export default Modal;
