import React from 'react';
import FavoriteButton from './FavoriteButton';
import moment from 'moment';
//import { useParams } from 'react-router';
import '../styles/App.css';
function MainImage(props) {
	// let {id } = useParams();
	function getFavorites(favorite) {
		props.getValue(favorite);
	}
	let newId = Date.parse(props.image.date);
	//var testDateUtc = moment.utc(newId);
	//	var localDate = moment(testDateUtc);
	//	var s = (localDate = localDate.format('YYYY-MM-DD'));
	console.log(newId);
	//	console.log(s);
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

					<h2>{props.image.title}</h2>
					<p className="date">
						{moment(props.image.date).format('MMM Do, YYYY')}
					</p>
				</div>
				<div className="search-image">
					<img
						className="searchImage"
						src={props.image.hdurl}
						alt=""
					/>
				</div>
				<p>{props.image.explanation}</p>
			</div>
		</div>
	);
}
export default MainImage;
