import React from 'react';
import FavoriteButton from './FavoriteButton';
import moment from 'moment';
import '../styles/App.css';

function Card(props) {
	function getFavorites(favorites) {
		props.getValue(favorites);
		window.location.reload();
	}

	return (
		<div>
			<div className="row">
				{props.cards.map((image, index) => (
					<div className="favCard" key={index}>
						<div className="favHeader">
							<div className="likeCard">
								<FavoriteButton
									getValue={getFavorites}
									id={Date.parse(image.date)}
								/>
							</div>
							<h2 className="title">{image.title}</h2>
							<p className="date">
								{moment(image.date).format('MMM Do, YYYY')}
							</p>
						</div>
						<img
							className="apod"
							src={image.url}
							alt={image.title}
						/>
						<p className="info">{image.explanation}</p>
						{console.log(image.copyright)}
						{
							//check if copyright
							image.copyright !== undefined ? (
								<h2>@{image.copyright}</h2>
							) : (
								<div></div>
							)
						}
					</div>
				))}
			</div>
		</div>
	);
}

export default Card;
