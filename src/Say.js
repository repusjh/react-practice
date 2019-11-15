import React, { useState } from 'react';

const Say = () => {
	//useState의 인자는 상태의 초기값. 객체가 아니어도 됨. (문자열, 숫자 ,객체, 배열 등)
	//호출시 배열 반환. 현재 상태, 상태 세터.
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('안녕하세요!');
	const onClickLeave = () => setMessage('안녕히 가세요!');

	//초기 상태값 : black 문자열
	//color에는 상태, setColor에는 color의 setter
	const [color, setColor] = useState('black');

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{ color }}>{message}</h1>

			<button
				style={{ color: 'red' }}
				onClick={() => {
					setColor('red');
				}}
			>
				red
			</button>
			<button
				style={{ color: 'green' }}
				onClick={() => {
					setColor('green');
				}}
			>
				green
			</button>
			<button
				style={{ color: 'blue' }}
				onClick={() => {
					setColor('blue');
				}}
			>
				blue
			</button>
		</div>
	);
};

export default Say;
