import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
	return (
		<div>
			name : {name} <br />
			children : {children}
		</div>
	);
};

MyComponent.defaultProps = {
	name: 'default name'
};

MyComponent.propTypes = {
	name: PropTypes.string
};
export default MyComponent;
