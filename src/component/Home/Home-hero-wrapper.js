import React from 'react'

import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import '../styles/home.css';
import Deep1 from '../img/Deep1.png';

const HomeHeroWrapper = () => {
return(
    <main className="hero-wrapper">
        <div className="grid grid-nogutter surface-0 text-500">
            <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                <section>
                        <span className="block text-4xl font-bold mb-2" style={{ color: '#2d233b' }}>
								Digital Bank That Gives Instant Loans, No Collateral Needed.
							</span>
                    <p className="mt-0 mb-4 text-700 line-height-3">
                        Get loans up to ₦1 million, a bank account with free transfers, a debit card for
                        spending, and more
                    </p>
                    <Button label="Download Deep-Money" type="button" className="Download-Loan" />
                </section>
            </div>
            <div className="col-12 md:col-6  pr-9 pt-6 overflow-hidden">
                <img src={Deep1} alt="logo" className="hero-image-block" />
            </div>
        </div>
    </main>
)



}


export default HomeHeroWrapper