import React from "react";

class ImageContainer extends React.Component {
	state = {
		span: 0,
	};

	constructor(props) {
		super(props);
		this.imgRef = React.createRef();
	}

	componentDidMount() {
		this.imgRef.current.addEventListener("load", () => {
			let span = Math.floor(this.imgRef.current.clientHeight / 5);
			this.setState({ span: span });
		});
	}

	imageContainerClickHandler = () => {
		this.props.showModal(this.props.image);
	};

	render() {
		return (
			<div
				className="image-container"
				onClick={this.imageContainerClickHandler}
				style={{
					gridRow: ` auto / span ${this.state.span} `,
				}}
			>
				<img
					src={this.props.image.urls.small}
					alt=""
					ref={this.imgRef}
				/>
			</div>
		);
	}
}

export default ImageContainer;
