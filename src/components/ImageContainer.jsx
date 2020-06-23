import React from "react";
import Modal from "./Modal.jsx";

class ImageContainer extends React.Component {
	imageContainerClickHandler = () => {
		this.props.showModal(this.props.image);
	};

	render() {
		return (
			<div
				className="image-container"
				onClick={this.imageContainerClickHandler}
			>
				<img src={this.props.image.urls.regular} alt="" />
			</div>
		);
	}
}

export default ImageContainer;
