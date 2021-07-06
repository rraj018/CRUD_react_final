import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <i className="close icon" onClick={props.onDismiss} />
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.action}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
