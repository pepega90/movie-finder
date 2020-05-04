import React from 'react';

import styling from './Modal.module.css';

const modalBodyStyle = ['modal-card-body', styling.bodyModal];

const modal = ({ film, open, close }) => {
	let styleModal = ['modal'];
	if (open) {
		styleModal = ['modal', 'is-active'];
	}

	return (
		<div className={styleModal.join(' ')}>
			<div onClick={close} className="modal-background"></div>
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{film.Title}</p>
					<button
						onClick={close}
						className="delete"
						aria-label="close"></button>
				</header>
				<div className={styling.kolom}>
					<img src={film.Poster} className="image" alt={film.Title} />

					<section className={modalBodyStyle.join(' ')}>
						<li>
							<strong>Director</strong>: {film.Director}
						</li>
						<li>
							<strong>Actors</strong>: {film.Actors}
						</li>
						<li>
							<strong>Writer</strong>: {film.Writer}
						</li>
						<li>
							<strong>Genre</strong>: {film.Genre}
						</li>
						<li>
							<strong>Overview</strong>: {film.Plot}
						</li>
					</section>
				</div>
			</div>
		</div>
	);
};

export default modal;
