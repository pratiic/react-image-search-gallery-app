import React from "react";
import ImageContainer from "./ImageContainer.jsx";

class Gallery extends React.Component {
	render() {
		return (
			<>
				<div className={`gallery ${this.props.class}`}>
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
				{this.props.children}
			</>
		);
	}
}

export default Gallery;
