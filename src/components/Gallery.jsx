import React from "react";
import ImageContainer from "./ImageContainer.jsx";

class Gallery extends React.Component {
	render() {
		return this.props.images.length > 0 ? (
			<>
				<div className={`gallery`}>
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
		) : null;
	}
}

export default Gallery;
