import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './component/header';
import Home from './pages/home';
import Comapny from './pages/company';
import Resources from './pages/resources';
import Support from './pages/support';
import LoanApply from './pages/loanApply';
import Footer from './component/footers';
import BusinessLoan from './pages/business';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/businessLoan" element={<BusinessLoan />} />
				<Route path="/company" element={<Comapny />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/support" element={<Support />} />
				<Route path="/loanApply" element={<LoanApply />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
