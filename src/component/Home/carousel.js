import React from 'react';
import Deep8 from '../img/Deep8.png';
import Deep6 from '../img/Deep6.png';
import Deep4 from '../img/Deep4.png';
import Deep5 from '../img/Deep5.png';

import 'primeflex/primeflex.css';
// import '../component/styles/home.css';
import '../styles/home.css';

import Slider from 'infinite-react-carousel';
import {Button} from "primereact/button";
import user from "../img/user.png";



const Carousel = () => {

    const SliderImage = {
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000
        // axis: horizontal,
    };

    const SliderText = {
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000
        // axis: horizontal,
    };


    return (
        <div>
            <main className="Loan-offer-wrapper">
                <div className="grid grid-nogutter surface-0 text-500">
                    <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                        <section>
                            <p className="mt-0 mb-4 text-700 line-height-3">
                                Loans for SMEs that provide Retail and Professional services as well as traders of
                                general merchandise such as Electronics, Computing, Phones, Fashion & Apparel, Household
                                Goods among others.
                            </p>

                            <Button label="Apply For Loan" type="button" className="Download-Loan" />
                        </section>
                    </div>

                    <Slider {...SliderText} className="col-12 md:col-6">
                        <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                            <section>
                                <p className="mt-0 mb-4  line-height-3 " style={{ color: '#37a477' }}>
                                    GET INSTANT LOANS
                                </p>
                                <span className="block text-2xl font-bold mb-1" style={{ color: '#2d233b' }}>
									Pay All Your Bills, No Convenience Fee
								</span>
                                <img src={user} style={{ width: '100%' }} alt="logo"/>
                            </section>
                        </div>
                        <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                            <section>
                                <p className="mt-0 mb-4  line-height-3 " style={{ color: '#37a477' }}>
                                    GET INSTANT LOANS
                                </p>
                                <span className="block text-2xl font-bold mb-1" style={{ color: '#2d233b' }}>
									Enjoy 100 Free Bank Transfers
								</span>
                                <img src={user} style={{ width: '100%' }} alt="logo" />
                            </section>
                        </div>
                        <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                            <section>
                                <p className="mt-0 mb-4  line-height-3 " style={{ color: '#37a477' }}>
                                    GET INSTANT LOANS
                                </p>
                                <span className="block text-2xl font-bold mb-1" style={{ color: '#2d233b' }}>
									A Bank Account With No Fees
								</span>
                                <img src={user} style={{ width: '100%' }} alt="logo"/>
                            </section>
                        </div>
                        <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                            <section>
                                <p className="mt-0 mb-4  line-height-3 " style={{ color: '#37a477' }}>
                                    GET INSTANT LOANS
                                </p>
                                <span className="block text-2xl font-bold mb-1" style={{ color: '#2d233b' }}>
									Access Up To ₦1,000,000 In Loans
								</span>
                                <img src={user} style={{ width: '100%' }} alt="logo"/>
                            </section>
                        </div>
                    </Slider>
                </div>
            </main>

            <section className="carousel-wrapper mt-8">
                <div className="grid grid-nogutter surface-0 text-500">
                    <Slider {...SliderImage} className="col-12 md:col-6">
                        <div className="col-12 md:col-6  p-8 pt-6 overflow-hidden">
                            <img src={Deep6} alt="logo" className="hero-image-block" />
                        </div>
                        <div className="col-12 md:col-6  p-8 pt-6 overflow-hidden">
                            <img src={Deep4} alt="logo" className="hero-image-block" />
                        </div>

                        <div className="col-12 md:col-6  p-8 pt-6 overflow-hidden">
                            <img src={Deep5} alt="logo" className="hero-image-block" />
                        </div>
                        <div className="col-12 md:col-6  p-8 pt-6 overflow-hidden">
                            <img src={Deep8} alt="logo" className="hero-image-block" />
                        </div>
                    </Slider>

                    <div className="col-12 md:col-6 p-8 text-center md:text-left flex align-items-center ">
                        <section>
							<span className="block text-3xl font-bold mb-2" style={{ color: '#2d233b' }}>
								We Offer Loans to
							</span>

                            <p className="mt-0 mb-4 text-700 text-1xl line-height-3">
                                Small Businesses, POS Agents <br />
                                E-com Merchants, Distributors <br />
                                <br />
                                Easily apply for a Business loan on the Deep Loan App at a very low interest rate, and
                                get it credited straight into your bank account, even if your business is not
                                registered.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Carousel;
