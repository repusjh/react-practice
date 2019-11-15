import React, { Component } from 'react';

class Counter extends Component {
	state = {
		number: 0,
		fixedNumber: 0
	};
	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<br />
				<h1>바뀌지 않는 값 : {fixedNumber}</h1>
				<button
					onClick={() => {
						this.setState({ number: number + 1 }, () => {
							console.log('값이 증가했습니다.');
						});
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
