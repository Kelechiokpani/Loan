import { useState } from 'react';

import './styles/header.css';

function Navbar() {
	const [ isNavExpanded, setIsNavExpanded ] = useState(false);

	return (
		<nav className="navigation">
			<a href="/" className="brand-name">
				Deep Loans
			</a>
			<button
				className="hamburger"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				{/* icon from Heroicons.com */}
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
				<ul className="menus">
					<li>
						<a href="/businesloan">Business Loan</a>
					</li>
					<li>
						<a href="/company">Company</a>
					</li>
					<li>
						<a href="/resources">Resources</a>
					</li>
					<li>
						<a href="/support">support</a>
					</li>
					<li>
						<a href="/loanApply">Apply For a Loan</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
