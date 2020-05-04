import React, { useState } from 'react';
import './App.css';

import Layout from '../hoc/Layout.js';
import Movie from '../components/Movie/Movie';
import Navbar from '../components/Navbar/Navbar';

const App = () => {
	const [cariFilm, setCari] = useState('');
	const [findedMovie, setFindedMovie] = useState('');

	const findMovie = e => {
		setCari(e.target.value);
	};

	const searchMovie = e => {
		e.preventDefault();
		setFindedMovie(cariFilm);
	};

	return (
		<div className="App">
			<Navbar cari={findMovie} find={searchMovie} />
			<Layout>
				<h1
					className="title is-2 title-app"
					style={{ color: '#ffffff' }}>
					MovieFinder
				</h1>
				<h1 className="subtitle is-4" style={{ color: '#ffffff' }}>
					Find Your Favorite Movies
				</h1>
				<Movie titleMovie={findedMovie} />
			</Layout>
		</div>
	);
};

export default App;
