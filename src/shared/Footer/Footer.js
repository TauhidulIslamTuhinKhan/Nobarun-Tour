import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-dark text-white py-3">
            <div className="container text-center">
            <div className="row">
                <div className="col-lg-6">
                    <h3>About Us</h3>
                    <p>Location : 36, Hotath Para, Bangladesh</p>
                    <p>Phone: 012345678901</p>
                </div>
                <div className="col-lg-6">
                    <h3>Latest News</h3>
                    <p>You will get 30% discount all of our pakages up to next declaration </p>
                </div>
            </div>
            <div className="row">
                <p className="text-center">@Copyright 2021 Nobarun | All Rights Reserved</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;