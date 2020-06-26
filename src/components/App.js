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
		page: 1,
		galleryClass: "hide",
		searched: false,
	};

	apiInfo = {
		searchURL: "https://api.unsplash.com/search/photos",
		randomURL: "https://api.unsplash.com/photos",
		key: "NFPXHjm0O70CKmPIwGa5LyRSTF22RAGhPvzaPIdwyK8",
		per_page: 30,
		query: "",
	};

	componentDidMount() {
		this.getImages();
	}

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

	loadMoreImages = () => {
		this.setState({ page: ++this.state.page });
		console.log(this.state.page);
		this.getImages(this.apiInfo.query);
	};

	getImages = (searchTerm) => {
		if (searchTerm) {
			this.apiInfo.query = searchTerm;

			if (this.state.searched === false) {
				this.setState({ images: [], searched: true });
			}

			fetch(
				`${this.apiInfo.searchURL}?page=${this.state.page}&per_page=${this.apiInfo.per_page}&client_id=${this.apiInfo.key}&query=${this.apiInfo.query}`
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);

					this.handleFetchedData(data.results, data);
				});
		} else {
			fetch(
				`${this.apiInfo.randomURL}?page=${this.state.page}&per_page=${this.apiInfo.per_page}&client_id=${this.apiInfo.key}`
			)
				.then((response) => response.json())
				.then((data) => {
					//this.handleFetchedData(data);
					this.handleNewData(data);
				});
		}
	};

	handleFetchedData = (dataResults, data) => {
		if (dataResults !== 0) {
			this.setState({
				images: [...this.state.images, ...dataResults],
				galleryClass: "show",
			});
		} else {
			this.setState({
				errorMessage: "no images were found",
				showAlert: true,
			});
		}
	};

	handleNewData = (data) => {
		if (data !== 0) {
			this.setState({
				images: [...this.state.images, ...data],
				galleryClass: "show",
			});
		} else {
			this.setState({
				errorMessage: "no images were found",
				showAlert: true,
			});
		}
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
					class={this.state.galleryClass}
				>
					<Button
						value={"load more"}
						class={`${this.state.galleryClass} button-gallery`}
						function={"load-more"}
						loadMoreImages={this.loadMoreImages}
					/>
				</Gallery>

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
