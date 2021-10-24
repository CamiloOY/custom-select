import CustomSelect from "./CustomSelect";
import Option from "./Option";
import CustomMultiSelect from "./CustomMultiSelect";
import SelectAll from "./SelectAll";
import DeselectAll from "./DeselectAll";
import SelectOption from "./SelectOption";
import MultiSelectOption from "./MultiSelectOption";

function App() {
	return (
		<div className="App">
			{/* Attempt 1
				<CustomSelect>
					{(setActive, activeOption) => (
						<>
							<Option num={1} activeOption={activeOption} onClick={() => setActive(1)}>
								{({isActive, setActive}) => (
									<p onClick={setActive}>Option 1 is {isActive ? "active" : "not active"}</p>
								)}
							</Option>
							<Option num={2} activeOption={activeOption} onClick={() => setActive(2)}>
								{({isActive, setActive}) => (
									<p onClick={setActive}>Option 2 is {isActive ? "active" : "not active"}</p>
								)}
							</Option>
							<Option num={3} activeOption={activeOption} onClick={() => setActive(3)}>
								{({isActive, setActive}) => (
									<p onClick={setActive}>Option 3 is {isActive ? "active" : "not active"}</p>
								)}
							</Option>
						</>
					)}
				</CustomSelect>
			*/}

			{/* You can use React.cloneElement for the Option too (thus eliminating all render props) if you only plan on using this with React components and not default HTML tags */}
			{/* Using cloneElement for the Option would allow you to add ARIA labels and stuff automatically */}
			{/* <CustomSelect>
				<Option>
					{({isActive, setActive}) => (
						<p onClick={setActive}>Option 1 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
				<Option>
					{({isActive, setActive}) => (
						<p onClick={setActive}>Option 2 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
				<Option>
					{({isActive, setActive}) => (
						<p onClick={setActive}>Option 3 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
			</CustomSelect>
			<CustomMultiSelect>
				<SelectAll>
					{({selectAll}) => (
						<button onClick={selectAll}>Select all</button>
					)}
				</SelectAll>
				<DeselectAll>
					{({deselectAll}) => (
						<button onClick={deselectAll}>Deselect all</button>
					)}
				</DeselectAll>
				<Option>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 4 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
				<Option>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 5 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
				<Option>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 6 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
			</CustomMultiSelect>
			<CustomMultiSelect limit={2}>
				<SelectAll>
					{({selectAll}) => (
						<button onClick={selectAll}>Select all</button>
					)}
				</SelectAll>
				<DeselectAll>
					{({deselectAll}) => (
						<button onClick={deselectAll}>Deselect all</button>
					)}
				</DeselectAll>
				<Option>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 7 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
				<Option>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 8 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
				<Option>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 9 is {isActive ? "active" : "not active"}</p>
					)}
				</Option>
			</CustomMultiSelect> */}

			{/* Context method */}
			{/* Selectall doesnt seem to be possible with the context method */}
			<CustomSelect>
				<SelectOption optionID={0}>
					{({isActive, setActive}) => (
						<p onClick={setActive}>Option 1 is {isActive ? "active" : "not active"}</p>
					)}
				</SelectOption>
				<SelectOption optionID={1}>
					{({isActive, setActive}) => (
						<p onClick={setActive}>Option 2 is {isActive ? "active" : "not active"}</p>
					)}
				</SelectOption>
				<SelectOption optionID={2}>
					{({isActive, setActive}) => (
						<p onClick={setActive}>Option 3 is {isActive ? "active" : "not active"}</p>
					)}
				</SelectOption>
			</CustomSelect>
			<CustomMultiSelect>
				<SelectAll>
					{({selectAll}) => (
						<button onClick={selectAll}>Select all</button>
					)}
				</SelectAll>
				<DeselectAll>
					{({deselectAll}) => (
						<button onClick={deselectAll}>Deselect all</button>
					)}
				</DeselectAll>
				{/* <div style={{display: "flex"}}> */}
					<MultiSelectOption optionID={0}>
						{({isActive, toggleActive}) => (
							<p onClick={toggleActive}>Option 4 is {isActive ? "active" : "not active"}</p>
						)}
					</MultiSelectOption>
					<MultiSelectOption optionID={1}>
						{({isActive, toggleActive}) => (
							<p onClick={toggleActive}>Option 5 is {isActive ? "active" : "not active"}</p>
						)}
					</MultiSelectOption>
					<MultiSelectOption optionID={2}>
						{({isActive, toggleActive}) => (
							<p onClick={toggleActive}>Option 6 is {isActive ? "active" : "not active"}</p>
						)}
					</MultiSelectOption>
				{/* </div> */}
			</CustomMultiSelect>
			<CustomMultiSelect limit={2}>
				<SelectAll>
					{({selectAll}) => (
						<button onClick={selectAll}>Select all</button>
					)}
				</SelectAll>
				<DeselectAll>
					{({deselectAll}) => (
						<button onClick={deselectAll}>Deselect all</button>
					)}
				</DeselectAll>
				<MultiSelectOption optionID={0}>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 7 is {isActive ? "active" : "not active"}</p>
					)}
				</MultiSelectOption>
				<MultiSelectOption optionID={1}>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 8 is {isActive ? "active" : "not active"}</p>
					)}
				</MultiSelectOption>
				<MultiSelectOption optionID={2}>
					{({isActive, toggleActive}) => (
						<p onClick={toggleActive}>Option 9 is {isActive ? "active" : "not active"}</p>
					)}
				</MultiSelectOption>
			</CustomMultiSelect>
		</div>
	);
}

export default App;
