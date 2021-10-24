import { MultiSelectContext } from "./CustomMultiSelect";

export default function SelectOption(props) {
	return (
		<MultiSelectContext.Consumer>
			{({isActive, toggleActive}) => {
				return props.children({isActive: isActive(props.optionID), toggleActive: () => toggleActive(props.optionID)})
			}}
		</MultiSelectContext.Consumer>
	)
}