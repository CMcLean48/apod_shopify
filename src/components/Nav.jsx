import React from 'react';

import { Link } from 'react-router-dom';
function Nav() {
	return (
		<div>
			<div className="nav">
				<Link className="links" to="/images">
					Today
				</Link>

				<Link className="links" to="/search">
					Search
				</Link>
				<Link className="links" to="/favorites">
					Favorites
				</Link>
			</div>
		</div>
	);
}

export default Nav;
