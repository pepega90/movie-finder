import React from 'react';

const navbar = ({ find, cari }) => {
	return (
		<div
			className="navbar"
			style={{ backgroundColor: 'transparent', padding: '10px' }}
			role="navigation"
			aria-label="main navigation">
			<div className="navbar-brand">
				<h1 className="title" style={{ color: '#ffffff' }}>
					MovieFinder
				</h1>
			</div>

			<div id="navbarBasicExample">
				<div className="navbar-start"></div>
			</div>
			<div className="navbar-end">
				<div className="navbar-item">
					<form onSubmit={find}>
						<input
							onChange={cari}
							className="input"
							placeholder="Search Movie..."
							type="text"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default navbar;
