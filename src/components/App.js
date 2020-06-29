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
		//images previously loaded or retrieved at search
		images: [],

		//erro message to show when image is not found
		errorMessage: "",

		//if alert should be shown
		showAlert: false,

		//if modal should be shown
		showModal: false,

		//image to be shown in the modal
		modalImage: "",

		//whether user has searched for images or not
		searched: false,

		//the page in the api to retrieve data from
		page: 1,

		query: null,
	};

	//info about the api
	apiInfo = {
		//for when user searches for images
		searchURL: "https://api.unsplash.com/search/photos",

		//for when the app first loads
		randomURL: "https://api.unsplash.com/photos",

		//api key
		key: "NFPXHjm0O70CKmPIwGa5LyRSTF22RAGhPvzaPIdwyK8",

		per_page: 30,
		query: "",
	};

	//when the app first loads up
	componentDidMount() {
		this.getImages();
	}

	//show error if image is not found
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

	//when the user clicks load more button
	loadMoreImages = () => {
		//the page to retrieve data from gets incremented
		this.setState({ page: ++this.state.page });

		//getImages() function is called with the updated query
		this.getImages(this.apiInfo.query);
	};

	//fetches images from the api

	getImages = (searchTerm) => {
		//if the user has entered any search term
		if (searchTerm) {
			//checking to see if new images have been searched
			if (this.apiInfo.query !== searchTerm) {
				this.setState({ images: [] });
				this.apiInfo.query = searchTerm;

				this.apiInfo.query = searchTerm;

				//checking to see if any search has been made
				//if no, the images array is cleared to render new images
				//images that were loaded up when the app started are removed
				if (this.state.searched === false) {
					this.setState({ images: [], searched: true });
				}

				fetch(
					`${this.apiInfo.searchURL}?page=${this.state.page}&per_page=${this.apiInfo.per_page}&client_id=${this.apiInfo.key}&query=${this.apiInfo.query}`
				)
					.then((response) => response.json())
					.then((data) => {
						//when the data gets back
						this.handleFetchedData(data.results);
					});
			}
		} else {
			//if the user has not provided any search term
			//meaning
			//the app has just loaded up

			fetch(
				`${this.apiInfo.randomURL}?page=${this.state.page}&per_page=${this.apiInfo.per_page}&client_id=${this.apiInfo.key}`
			)
				.then((response) => response.json())
				.then((data) => {
					//when the data gets back
					this.handleFetchedData(data);
				});
		}
	};

	handleFetchedData = (data) => {
		//checking to see if any data got back
		if (data.length !== 0) {
			this.setState({
				//updating the images array
				images: [...this.state.images, ...data],
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
			showModal: true,
			modalImage: image.urls.regular,
		});
	};

	hideModal = () => {
		this.setState({
			showModal: false,
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

				<Gallery images={this.state.images} showModal={this.showModal}>
					<Button
						value={"load more"}
						class={`${this.state.galleryClass} button-gallery`}
						function={"load-more"}
						loadMoreImages={this.loadMoreImages}
					/>
				</Gallery>

				<Modal
					modalImageURL={this.state.modalImage}
					hideModal={this.hideModal}
					showModal={this.state.showModal}
				/>
			</>
		);
	}
}

export default App;
