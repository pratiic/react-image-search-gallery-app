import React from "react";

class Modal extends React.Component {
	modalClickHandler = (event) => {
		if (!event.target.classList.contains("modal-image")) {
			this.props.hideModal();
		}
	};

	render() {
		return this.props.showModal ? (
			<div className="modal" onClick={this.modalClickHandler}>
				<i className="fas fa-times fa-3x"></i>
				<img
					src={this.props.modalImageURL}
					alt=""
					className="modal-image"
				/>
			</div>
		) : null;
	}
}

export default Modal;
