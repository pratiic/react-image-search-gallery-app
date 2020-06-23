import React from "react";
import Button from "./Button.jsx";
import SearchBar from "./SearchBar.jsx";
import "./css/style.css";
import Gallery from "./Gallery.jsx";
import Alert from "./Alert.jsx";
import SearchInfo from "./SearchInfo.jsx";
import Modal from "./Modal.jsx";

class App extends React.Component {
	state = {
		images: [],
		errorMessage: "",
		showAlert: false,
		showModal: false,
		modalClass: "modal",
		modalImage: "",
	};

	apiInfo = {
		url: "https://api.unsplash.com/search/photos",
		key: "NFPXHjm0O70CKmPIwGa5LyRSTF22RAGhPvzaPIdwyK8",
		page: 1,
		per_page: 30,
		query: "",
	};

	showError = () => {
		if (this.state.showAlert === true) {
			setTimeout(() => {
				this.setState({ showAlert: false });
			}, 3000);

			return (
				<Alert message={this.state.errorMessage} class={"alert show"} />
			);
		}
	};

	getImages = (searchTerm) => {
		this.apiInfo.query = searchTerm;

		fetch(
			`${this.apiInfo.url}?page=${this.apiInfo.page}&per_page=${this.apiInfo.per_page}&client_id=${this.apiInfo.key}&query=${this.apiInfo.query}`
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.total !== 0) {
					this.setState({ images: data.results });
				} else {
					this.setState({
						errorMessage: "no images were found",
						showAlert: true,
					});
				}
			});
	};

	showModal = (image) => {
		this.setState({
			modalClass: "modal modal-show",
			modalImage: image.urls.regular,
		});
	};

	hideModal = () => {
		this.setState({
			modalClass: "modal",
		});
	};

	render() {
		return (
			<>
				{this.showError()}

				<div className="header">
					<SearchBar getImages={this.getImages}>
						<Button value={"search"} type={"submit"} />
					</SearchBar>
				</div>

				<SearchInfo
					searchTerm={this.apiInfo.query}
					images={this.state.images}
				/>

				<Gallery
					images={this.state.images}
					showModal={this.showModal}
				/>

				<Modal
					class={this.state.modalClass}
					imageURL={this.state.modalImage}
					hideModal={this.hideModal}
				/>
			</>
		);
	}
}

export default App;
