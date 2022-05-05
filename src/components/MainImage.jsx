import React from 'react';
import FavoriteButton from './FavoriteButton';
import moment from 'moment';

import '../styles/App.css';
function MainImage(props) {
	// let {id } = useParams();
	function getFavorites(favorite) {
		props.getValue(favorite);
	}
	let newId = Date.parse(props.image.date);

	console.log(newId);

	return (
		<div>
			<div className="searchPage">
				<div className="searchHeader">
					<div className="likeCard">
						<FavoriteButton
							className="like"
							getValue={getFavorites}
							id={newId}
						/>
					</div>
					{console.log(props.image)}
					<h2>{props.image.title}</h2>

					<p className="date">
						{moment(props.image.date).format('MMM Do, YYYY')}
					</p>
				</div>
				<div className="search-image">
					<img
						className="searchImage"
						src={props.image.hdurl}
						alt={props.image.title}
					/>
				</div>
				<p>{props.image.explanation}</p>
				{
					//check if copyright
					props.image.copyright !== undefined ? (
						<h2>@{props.image.copyright}</h2>
					) : (
						<div></div>
					)
				}
			</div>
		</div>
	);
}
export default MainImage;
