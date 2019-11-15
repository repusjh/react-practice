import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		message: '',
		username: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClick = () => {
		alert(this.state.username + ':' + this.state.message);
		this.setState({
			message: '',
			username: ''
		});
	};

	handleKeyPress = e => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};

	render() {
		return (
			<div>
				<h1>event practice !</h1>
				<input
					type="text"
					name="username"
					placeholder="enter username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="enter something"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.handleClick}>»Æ¿Œ</button>
			</div>
		);
	}
}

export default EventPractice;
