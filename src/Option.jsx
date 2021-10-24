import React from 'react';

export default function Option(props) {
	// cloneElement Option component
	return props.children({isActive: props.activeOption === props.num || props.isActive, setActive: props.setActive, toggleActive: props.toggleActive});
};