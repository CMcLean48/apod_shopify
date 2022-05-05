import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
//import FavoriteButton from './FavoriteButton';

//import moment from 'moment';
//let { id } = useParams();
//import { useParams } from 'react-router';
import '../styles/App.css';
import MainImage from './MainImage';

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

	function getFavorites(favorite) {
		props.getValue(favorite);
	}

	//console.log(image.date);

	return (
		<div>
			<Nav />
			<h2>React Programming with APOD</h2>
			<MainImage image={image} getValue={getFavorites} />
		</div>
	);
}
export default PicData;
