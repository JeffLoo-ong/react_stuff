import React, { Component } from 'react';

// This gives the class added functionality
// You must ALWAYS have a render method and return some JSX
// In general, start with a functional component. When it 
// needs more functionality make it a class.


// State is a plain JS object that is used to record and react to
// to user events. Each class based component has its own state object.
// Whenever the state changes, it causes all children to re-render
// as well. State must be initialized before use.
class SearchBar extends Component {
	constructor(props) {
		super(props);

		// This the property that holds the user input
		// This can be called whatever we want currently 'term'
		// This is the only place it should be defined this way
		this.state = {term: ''};
	}

	render() {
		return (
			<div className='search-bar'>
				<input 
					value={this.state.term}
					onChange ={event => this.onInputChange(event.target.value)}/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
