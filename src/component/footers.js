import React from 'react';
import './styles/footer.css';

const Footer = () => {
	return (
		<footer>
			<div className="surface-0">
				<div className="grid grid-nogutter surface-0 text-800">
					<div className="col-12 md:col-3">
						<div className="p-3">
							<div className="flex  p-2 ">
								<h4 className="font-bold text-1.8xl font-medium ">Business loans</h4>
							</div>
							<ul className="list-none p-0 m-0 mb-2 flex-grow-1">
								<li className="flex ">
									<a href="">For Distributors</a>
								</li>
								<li className="flex  ">
									<a href="">For E-commerce Merchants</a>
								</li>

								<li className="flex ">
									<a href="">For POS Agents</a>
								</li>
								<li className="flex ">
									<a href="">For other SMEs</a>
								</li>
							</ul>
							<div className="flex  p-2">
								<h4 className=" font-bold text-1.8xl font-medium ">About deep Loans</h4>
							</div>
							<ul className="list-none p-0 m-0 mb-2 flex-grow-1">
								<li className="flex " style={{ fontSize: '17px' }}>
									<a href="">About Deep Loan</a>
								</li>
								<li className="flex  ">
									<a href="">Become a Partner</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 md:col-3">
						<div className="p-3">
							<div className="flex  p-2">
								<h4 className=" font-bold text-1.8xl  " style={{ color: '#39C887' }}>
									Resources
								</h4>
							</div>
							<ul className="list-none p-0 m-0 mb-2 flex-grow-1">
								<li className="flex ">
									<a href="">Business Loans Guide</a>
								</li>
								<li className="flex  ">
									<a href="">How to Get A Loan</a>
								</li>
								<li className="flex ">
									<a href="">Loan Calculator</a>
								</li>
								<li className="flex ">
									<a href="">For POS Agents</a>
								</li>
								<li className="flex ">
									<a href="">Powered by Deep Blog</a>
								</li>
							</ul>
							<div className="flex  p-2">
								<h4 className=" font-bold text-1.8xl font-medium ">About deep Loans</h4>
							</div>
							<ul className="list-none p-0 m-0 mb-2 flex-grow-1">
								<li className="flex " style={{ fontSize: '17px' }}>
									<a href="">Contact Us</a>
								</li>
								<li className="flex  ">
									<a href="">FAQs</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-12 md:col-3">
						<div className="p-3">
							<div className="flex  p-2">
								<h4 className=" font-bold text-1.8xl font-medium ">Contact Us</h4>
							</div>
							<ul className="list-none p-0 m-0 mb-2 flex-grow-1">
								<li className="flex ">07037026986</li>
								<li className="flex  ">support@deeploan.ng</li>
							</ul>
							<div className="flex  p-2">
								<h4 className="ml-2 font-bold text-1.8xl font-medium ">Follow Us</h4>
							</div>
							<ul className="list-none p-0 m-0 flex-grow-1">
								<li className="flex ">
									<a href="">
										<i className="fab fa-twitter" />
									</a>
								</li>
								<li className="flex  ">
									<a href="">
										<i className="fab fa-facebook-f" />
									</a>
								</li>{' '}
								<li className="flex  ">
									<a href="">
										<i className="fab fa-google" />
									</a>
								</li>{' '}
								<li className="flex  ">
									<a href="">
										<i className="fab fa-instagram" />
									</a>
								</li>{' '}
								<li className="flex  ">
									<a href="">
										<i className="fab fa-linkedin" />
									</a>
								</li>{' '}
								<li className="flex  ">
									<a href="">
										<i className="fab fa-github" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 md:col-3">
						<div className="p-3">
							<div className="flex  p-2">
								<h4 className=" font-bold text-1.8xl font-medium ">Visit Us</h4>
							</div>
							<ul className="list-none p-0 mb-2 m-0 flex-grow-1">
								<li className="flex ">
									Workbay, 1st Floor, Lagos City Mall, Onikan, Lagos Island, Lagos.
								</li>
							</ul>
							<div className="flex  p-2">
								<h4 className=" font-bold text-1.8xl font-medium ">Abuja</h4>
							</div>
							<ul className="list-none p-0 m-0 mb-2 flex-grow-1">
								<li className="flex ">Venture Park, 5 Kwaji Close, Wuse 2, Abuja</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
					Privacy Policy | Deep Loan Nigeria © 2022 Copyright
				</div>
			</div>
		</footer>
	);
};

export default Footer;
