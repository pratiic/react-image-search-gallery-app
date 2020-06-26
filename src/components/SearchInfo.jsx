import React from "react";

class SearchInfo extends React.Component {
	render() {
		if (this.props.images.length > 0) {
			if (this.props.searchTerm) {
				return (
					<h1 className="search-info text-center capitalize">
						search results for "<span>{this.props.searchTerm}</span>
						"
					</h1>
				);
			} else {
				return (
					<h1 className="search-info text-center capitalize">
						new images
					</h1>
				);
			}
		} else {
			return null;
		}
	}
}

export default SearchInfo;
