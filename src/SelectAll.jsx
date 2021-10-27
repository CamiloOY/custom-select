import React from 'react';

export default function SelectAll(props) {
	// const children = React.children.map(props.children, (child) => {
	// 	return React.cloneElement(child, {selectAll: props.selectAll});
	// });

	// cloneElement method
	return props.children({selectAll: props.selectAll});
}