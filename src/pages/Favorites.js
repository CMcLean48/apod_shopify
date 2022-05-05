import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import moment from 'moment';
function Favourites(props) {
	const [images, setImages] = useState([]);
	const key = process.env.REACT_APP_NASA_API_KEY;
	const url = process.env.REACT_APP_NASA_API;
	useEffect(() => {
		createSavedImagesArray();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	function createSavedImagesArray() {
		props.images.forEach((newId) => {
			console.log(newId);
			getImage(newId);
		});
	}

	async function getImage(newId) {
		var testDateUtc = moment.utc(newId);
		var localDate = moment(testDateUtc);
		var id = (localDate = localDate.format('YYYY-MM-DD'));
		//	let id = new Date(newId).toLocaleDateString('en-CA');
		console.log(id);
		const data = await fetch(`${url}api_key=${key}&date=${id}`);
		try {
			console.log(data);
			data.json().then(function (value) {
				setImages((images) => [...images, value]);
				console.log(images);
			});
		} catch (e) {
			console.log(e);
		}
	}

	function getFavorites(favorite) {
		props.getValue(favorite);
	}
	return (
		<div className="main-container black">
			<Nav />
			{images.length !== 0 ? (
				<Card cards={images} getValue={getFavorites} />
			) : (
				<h2 className="text-center display-message">
					Sorry you have no favourited images. Search for a image to
					add to your favourites.
				</h2>
			)}
		</div>
	);
}
export default Favourites;
