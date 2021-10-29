import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ZJqBP8n/banner-3img.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>WELCOME TO</h4>
                    <h2>DHAKA</h2>
                    <p>Starting $110 per night</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/kKFvf73/banner-1img.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h4>WELCOME TO</h4>
                    <h2>SYLHET</h2>
                    <p>Starting $120 per night</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/7JVc48w/banner-2img.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>WELCOME TO</h4>
                    <h2>KHULNA</h2>
                    <p>Starting $70 per night</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;