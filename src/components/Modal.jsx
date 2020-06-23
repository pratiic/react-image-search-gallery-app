import React from "react";

class Modal extends React.Component {
	modalClickHandler = (event) => {
		if (!event.target.classList.contains("modal-image")) {
			this.props.hideModal();
		}
	};

	render() {
		return (
			<div className={this.props.class} onClick={this.modalClickHandler}>
				<i className="fas fa-times fa-3x"></i>
				<img src={this.props.imageURL} alt="" className="modal-image" />
			</div>
		);
	}
}

export default Modal;
