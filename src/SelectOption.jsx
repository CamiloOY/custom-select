import { SelectContext } from "./CustomSelect";

export default function SelectOption(props) {
	return (
		<SelectContext.Consumer>
			{({activeOption, setActive}) => {
				return props.children({isActive: activeOption === props.optionID, setActive: () => setActive(props.optionID)});
			}}
		</SelectContext.Consumer>
	)
}