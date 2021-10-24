import React from 'react';
import { MultiSelectContext } from './CustomMultiSelect';

export default function DeselectAll(props) {
	// cloneElement method
	// return props.children({deselectAll: props.deselectAll});

	// Context method
	return (
		<MultiSelectContext.Consumer>
			{({deselectAll}) => {
				return props.children({deselectAll});
			}}
		</MultiSelectContext.Consumer>
	)
}