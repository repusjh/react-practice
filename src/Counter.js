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
				<h1>�ٲ��� �ʴ� �� : {fixedNumber}</h1>
				<button
					onClick={() => {
						this.setState({ number: number + 1 }, () => {
							console.log('���� �����߽��ϴ�.');
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
