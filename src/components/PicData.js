import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import FavoriteButton from './FavoriteButton';
import moment from 'moment';
import '../styles/App.css';

export function PicData(props) {
	const [image, setImage] = useState({});

	const getData = () => {
		const key = process.env.REACT_APP_NASA_API_KEY;
		const url = process.env.REACT_APP_NASA_API;
		fetch(`${url}api_key=${key}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setImage(res);
			});
	};

	useEffect(() => {
		getData();
	}, [props]);

	//console.log(image.date);

	function getFavorites(favorites) {
		props.getValue(favorites);
		console.log(favorites);
	}

	return (
		<div>
			<Nav />
			<h2>React Programming with APOD</h2>
			<div className="searchPage">
				<div className="searchHeader">
					<div className="likeCard">
						<FavoriteButton
							className="like"
							getValue={getFavorites}
							id={image.date}
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
export default PicData;
