import React from "react";

class Alert extends React.Component {
	render() {
		return <div className={this.props.class}>{this.props.message}</div>;
	}
}

export default Alert;
