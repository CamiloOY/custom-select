# Custom Select

## Method
There are two different ways of implementing this functionality:
1. cloneElement
2. Context API

The first method uses React.cloneElement to pass the relevant props (isActive and setActive) to a child Option component, which then exposes isActive and setActive to its children via a render prop. The advantage of this method is that when used with CustomMultiSelect it allows for a select all button, since the parent element has access to its children. The disadvantage is that Option components must be direct children of the CustomSelect/CustomMultiSelect, so it isn't possible to wrap them in any other elements for styling purposes etc.

The second method uses React's Context API to expose the props to the options, which allows for greater flexibility as SelectOptions don't have to be direct children of the CustomSelect. The downside to this is that select all isn't possible with the CustomMultiSelect, as the component is only aware of the children that are active.

## Components
### CustomSelect
The parent class for elements to be selected. Only allows one option to be active at a time.

### CustomMultiSelect
Similar to CustomSelect, but allows for multiple active elements.

### Option
The wrapper for select options when using the cloneElement method.

### SelectOption/MultiSelectOption
The wrappers for selectable items when using the Context API method.

### SelectAll/DeselectAll
Components used to expose select all and deselect all functionality to their children.
