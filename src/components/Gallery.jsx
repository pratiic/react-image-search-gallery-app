import React from "react";
import ImageContainer from "./ImageContainer.jsx";

class Gallery extends React.Component {
	render() {
		return (
			<div className="gallery">
				{this.props.images.map((image) => {
					return (
						<ImageContainer
							image={image}
							key={image.id}
							showModal={this.props.showModal}
						/>
					);
				})}
			</div>
		);
	}
}

export default Gallery;
