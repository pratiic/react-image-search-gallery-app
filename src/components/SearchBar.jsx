import React from "react";

class SearchBar extends React.Component {
	state = {
		searchTerm: "",
	};

	inputChangeHandler = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	formSubmitHandler = (event) => {
		event.preventDefault();
		if (this.state.searchTerm !== "") {
			this.props.getImages(this.state.searchTerm);
			this.setState({ searchTerm: "" });
		}
	};

	render() {
		return (
			<form className="form" onSubmit={this.formSubmitHandler}>
				<div className="input-group">
					<input
						type="text"
						placeholder="Search for images..."
						className="search-bar"
						onChange={this.inputChangeHandler}
						value={this.state.searchTerm}
					/>

					{this.props.children}
				</div>
			</form>
		);
	}
}

export default SearchBar;
