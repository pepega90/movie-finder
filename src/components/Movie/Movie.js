import React, { useEffect, useState, useCallback } from 'react';
import styling from './Movie.module.css';

import dataPlaceHolder from '../../placeholderMovie/the-matrix-placeholder';

// Components
import Modal from '../Modal/Modal';

// Styling section
const rootStyling = ['container', styling.kolom];
const movieStyling = ['Card', styling.movie];

const Movie = ({ titleMovie }) => {
	// State
	const [movie, setMovie] = useState([]);
	const placeholderMovie = useState(dataPlaceHolder)[0];
	const [modalDetail, setModalDetail] = useState(false);
	const [singleMovie, setSingleMovie] = useState({});

	const openModal = useCallback(id => {
		fetch(`http://www.omdbapi.com/?apikey=9dc9be38&i=${id}`)
			.then(res => res.json())
			.then(movie => {
				setSingleMovie(movie);
			});
		setModalDetail(true);
	}, []);

	const closeModal = () => {
		setModalDetail(false);
	};

	// fetch singleMovie depending on titleMovie search
	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=9dc9be38&s=${titleMovie}`)
			.then(res => res.json())
			.then(response => {
				setMovie(response.Search);
			});
	}, [titleMovie]);

	let renderMovie = placeholderMovie.map(film => (
		<div key={film.imdbID} className="column is-4">
			<div className={movieStyling.join(' ')}>
				<div className="card-content">
					<h1 className="title" style={{ color: '#ffffff' }}>
						{film.Title}
					</h1>
					<strong style={{ color: '#ffffff' }}>{film.Year}</strong>
				</div>
				<div className="card-image">
					<img src={film.Poster} alt={film.Title} />
				</div>
				<div className="content">
					<button
						onClick={openModal.bind(this, film.imdbID)}
						className="button is-primary is-light">
						Show Details
					</button>
				</div>
			</div>
		</div>
	));

	if (movie) {
		renderMovie = movie.map(film => (
			<div key={film.imdbID} className="column is-4">
				<div className={movieStyling.join(' ')}>
					<div className="card-content">
						<h1 className="title" style={{ color: '#ffffff' }}>
							{film.Title}
						</h1>
						<strong style={{ color: '#ffffff' }}>
							{film.Year}
						</strong>
					</div>
					<div className="card-image">
						<img src={film.Poster} alt={film.Title} />
					</div>
					<div className="content">
						<button
							onClick={openModal.bind(this, film.imdbID)}
							className="button is-primary is-light">
							Show Details
						</button>
					</div>
				</div>
			</div>
		));
	}

	return (
		<div className={rootStyling.join(' ')}>
			<Modal film={singleMovie} close={closeModal} open={modalDetail} />
			{renderMovie}
		</div>
	);
};

export default Movie;
