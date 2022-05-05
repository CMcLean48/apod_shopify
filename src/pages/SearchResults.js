import React, { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import SearchForm from '../components/SearchForm';
import FavoriteButton from '../components/FavoriteButton';
import moment from 'moment';

export function SearchResults(props) {
	// object for search parameters //
	const searchParams = {
		key: process.env.REACT_APP_NASA_API_KEY,
		api: 'https://api.nasa.gov/planetary/apod',
		endpoint: 'date=',
	};
	//	var todayDate = new Date().toISOString().slice(0, 10);
	var todaysDate = moment();
	var todayDate = todaysDate.format('YYYY-MM-DD');

	// add/update state with useState hooks //
	const [image, setImage] = useState({});
	const [searchString, setSearch] = useState(todayDate);
	function getFavorites(favorite) {
		props.getValue(favorite);
	}
	const fetchData = () => {
		fetch(
			`${searchParams.api}?api_key=${searchParams.key}&${searchParams.endpoint}${searchString}`
		)
			.then((res) => res.json())
			.then((res) => {
				setImage(res);
			});
	};
	//	setImage(result.data);
	//	console.log(result.data);
	//	};
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// searchForm logic //
	function handleChange(event) {
		setSearch(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetchData(searchString);
	}
	//function getFavorites(favorites) {
	//	props.getValue(favorites);
	//	console.log(favorites);
	//	}

	return (
		<div>
			<Nav />
			<div className="form-instructions">
				<p className="instructions">
					Please Enter a Date in the YYYY-MM-DD format.
				</p>
				<p>Example: 2020-01-20</p>
				<SearchForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					searchString={searchString}
				/>
			</div>
			<div className="searchPage">
				<div className="searchHeader">
					<div className="likeCard">
						<FavoriteButton
							className="like"
							getValue={getFavorites}
							id={Date.parse(image.date)}
						/>
					</div>

					<h2>{image.title}</h2>
					<p className="date">
						{moment(image.date).format('MMM Do, YYYY')}
					</p>
				</div>
				<div className="search-image">
					<img className="searchImage" src={image.hdurl} alt="" />
				</div>
				<p>{image.explanation}</p>
			</div>
		</div>
	);
}
export default SearchResults;
