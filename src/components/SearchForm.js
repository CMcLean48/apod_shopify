import React from 'react';

//import './search-form.styles.scss';

function SearchForm(props) {
	return (
		<div className="dateInput">
			<form onSubmit={props.handleSubmit}>
				<input
					onChange={props.handleChange}
					value={props.searchString}
					className="form"
					placeholder="YYYY-MM-DD"
					type="text"
					name="searchString"
				/>

				<button className="button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
