import React from "react";

let Button = (props) => {
	let buttonClickHandler = (event) => {
		if (props.function === "load-more") {
			props.loadMoreImages();
		}
	};

	return (
		<button
			type={props.type}
			className={`button ${props.class}`}
			onClick={buttonClickHandler}
		>
			{props.value}
		</button>
	);
};

export default Button;
