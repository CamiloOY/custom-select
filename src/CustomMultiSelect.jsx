import React from 'react';

// Maybe also expose a function that resets the activeOptions

class CustomMultiSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeOptions: [],
			limit: this.props.limit || Infinity
		};
		this.toggleActive = this.toggleActive.bind(this);
		this.isActive = this.isActive.bind(this);
		this.selectAll = this.selectAll.bind(this);
		this.deselectAll = this.deselectAll.bind(this);
	}

	toggleActive(id) {
		if(this.state.activeOptions.indexOf(id) === -1) { // If the clicked option isnt active
			if(this.state.activeOptions.length < this.state.limit) { // If the limit hasn't been exceeded
				const newAC = this.state.activeOptions.concat(id);
				this.setState({activeOptions: newAC});
			}
		}
		else {
			const newState = [...this.state.activeOptions];
			const i = this.state.activeOptions.indexOf(id);
			newState.splice(i, 1);
			this.setState({activeOptions: newState});
		}
	}

	isActive(id) {
		if(this.state.activeOptions.indexOf(id) === -1) {
			return false;
		}
		else {
			return true;
		}
	}

	selectAll() {
		let newAC = [...this.state.activeOptions];
		React.Children.forEach(this.props.children, (child, i) => {
			//If below limit and option isnt active, make it active
			if(child.type.name === "Option" && newAC.length < this.state.limit && newAC.indexOf(i) === -1) {
				newAC = newAC.concat(i);
			}
		});
		this.setState({activeOptions: newAC});
		// if(this.props.limit <= childNum) {
		// 	let newAC = [...this.state.activeOptions];
		// 	for(let i = 0; i < this.props.limit; i++) {
		// 		newAC = newAC.concat(i);
		// 	}
		// 	this.setState({activeOptions: newAC});
		// }
		// else {
		// 	let newAC = [...this.state.activeOptions];
		// 	for(let i = 0; i < childNum; i++) {
		// 		newAC = newAC.concat(i);
		// 	}
		// 	this.setState({activeOptions: newAC});
		// }
	}

	deselectAll() {
		this.setState({activeOptions: []});
	}

	render() {
		// cloneElement method
		// const children = React.Children.map(this.props.children, (child, i) => {
		// 	if(React.isValidElement(child)) {
		// 		if(child.type.name === "Option") {
		// 			return React.cloneElement(child, {num: i, isActive: this.isActive(i), toggleActive: () => this.toggleActive(i)});
		// 		}
		// 		if(child.type.name === "SelectAll") {
		// 			return React.cloneElement(child, {selectAll: this.selectAll});
		// 		}
		// 		if(child.type.name === "DeselectAll") {
		// 			return React.cloneElement(child, {deselectAll: this.deselectAll});
		// 		}
		// 	}
		// 	return child;
		// });
		// return <>{children}</>;

		// Context method
		return (
			<MultiSelectContext.Provider value={{isActive: this.isActive, toggleActive: this.toggleActive, selectAll: this.selectAll, deselectAll: this.deselectAll}}>
				{this.props.children}
			</MultiSelectContext.Provider>
		);
	}
}
 
export default CustomMultiSelect;
export const MultiSelectContext = React.createContext();