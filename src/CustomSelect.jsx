import React from 'react';

class CustomSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeOption: 0
		};
		this.setActive = this.setActive.bind(this);
	}

	setActive(id) {
		this.setState({activeOption: id});
	}

	render() {
		// cloneElement method
		// const children = React.Children.map(this.props.children, (child, i) => {
		// 	if(React.isValidElement(child)) {
		// 		return React.cloneElement(child, {num: i, activeOption: this.state.activeOption, setActive: () => this.setActive(i)});
		// 	}
		// 	return child;
		// });
		// return <>{children}</>;

		// Context method
		return (
			<SelectContext.Provider value={{activeOption: this.state.activeOption, setActive: this.setActive}}>
				{this.props.children}
			</SelectContext.Provider>
		);
	}
}
 
export default CustomSelect;
export const SelectContext = React.createContext();