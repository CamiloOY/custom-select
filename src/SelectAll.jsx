import React from 'react';
import { MultiSelectContext } from './CustomMultiSelect';

export default function SelectAll(props) {
	// const children = React.children.map(props.children, (child) => {
	// 	return React.cloneElement(child, {selectAll: props.selectAll});
	// });

	// cloneElement method
	// return props.children({selectAll: props.selectAll});

	// Context method
	return (
		<MultiSelectContext.Consumer>
			{({selectAllFunction}) => {
				return props.children({selectAll: selectAllFunction});
			}}
		</MultiSelectContext.Consumer>
	)
}