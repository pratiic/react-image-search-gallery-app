import React from "react";

let Button = (props) => {
	return (
		<button type={props.type} className="button form-button">
			{props.value}
		</button>
	);
};

export default Button;
