import React, { useState } from 'react';

const Say = () => {
	//useState�� ���ڴ� ������ �ʱⰪ. ��ü�� �ƴϾ ��. (���ڿ�, ���� ,��ü, �迭 ��)
	//ȣ��� �迭 ��ȯ. ���� ����, ���� ����.
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('�ȳ��ϼ���!');
	const onClickLeave = () => setMessage('�ȳ��� ������!');

	//�ʱ� ���°� : black ���ڿ�
	//color���� ����, setColor���� color�� setter
	const [color, setColor] = useState('black');

	return (
		<div>
			<button onClick={onClickEnter}>����</button>
			<button onClick={onClickLeave}>����</button>
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
