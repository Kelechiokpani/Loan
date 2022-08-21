import React from 'react';
import { Link } from 'react-router-dom';

const LoanApply = () => {
	return (
		<div>
			<main>
				<h2>Welcome to the Resources Page!</h2>
				<p>You can do this, I believe in you.</p>
			</main>
			<nav>
				<Link to="/">Home-page</Link>
			</nav>
		</div>
	);
};

export default LoanApply;
