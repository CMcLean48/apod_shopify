import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PicData } from './components/PicData';
import SearchResults from './pages/SearchResults';
import Favorites from './pages/Favorites';

//import SearchResults from './components/SearchResults';
function App() {
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem('favorites')) || []
	);
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// function getFavorites(id) {
	// 	console.log(id);
	// 	//	setArrayOfNumbers(nums => nums.includes(number) ? nums.filter(n => n !== number) : [number, ...nums])
	// 	setFavorites((favorites) =>
	// 		favorites.includes(id)
	// 			? favorites.filter((n) => n !== id)
	// 			: [id, ...favorites]
	// 	);
	// }
	function getFavorites(id) {
		if (id > 0) {
			if (favorites.indexOf(id) === -1) {
				setFavorites([...favorites, id]);
			}
		} else {
			setFavorites(
				favorites.filter((value) => {
					console.log(value);
					console.log(-id);
					console.log(value !== -id);
					return value !== -id;
				})
			);
		}
	}

	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<PicData getValue={getFavorites} />}
					/>
					<Route
						path="/images"
						element={<PicData getValue={getFavorites} />}
					/>
					<Route
						path="/favorites"
						element={
							<Favorites
								images={favorites}
								getValue={getFavorites}
							/>
						}
					/>
					<Route
						path="/search"
						element={<SearchResults getValue={getFavorites} />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
