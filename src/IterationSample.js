import React, { useState } from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, text: 'snowman' },
		{ id: 2, text: 'ice' },
		{ id: 3, text: 'snow' },
		{ id: 4, text: 'wind' }
	]);
	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5);

	const onChange = e => {
		setInputText(e.target.value);
	};
	const onClick = e => {
		const newNames = names.concat({
			id: nextId,
			text: inputText
		});
		setNames(newNames);
		setNextId(nextId + 1);
		setInputText('');
	};
	const onRemove = id => {
		const newNames = names.filter(name => name.id !== id);
		setNames(newNames);
	};

	const nameList = names.map(name => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
			{name.text}
		</li>
	));

	return (
		<div>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick}>add</button>
			<ul>{nameList}</ul>
		</div>
	);
};

export default IterationSample;
