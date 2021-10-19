import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/banner4.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner1} alt="First slide"/>
                    <Carousel.Caption>
                        <div className="banner1 text-center text-lg-end">
                            <h4 className="text-white">The Home of Your Hope</h4>
                            <h1 className="text-warning">Your Good Health is </h1>
                            <h1 className="text-warning">Our Responsibility</h1>
                            <h4 className="text-white">Get your appointment through online and remain safe at your home. Because your safety is our first priority.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner2} alt="Second slide"/>

                    <Carousel.Caption>
                        <div className="banner2 p-5">
                            <h4 className="text-warning">The Home of Your Hope</h4>
                            <h1 className="text-info">Your Good Health is Our Responsibility</h1>
                            <h4 className="text-warning">Get your appointment through online and remain safe at your home. Because your safety is our first priority.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner3} alt="Third slide"/>

                    <Carousel.Caption>
                        <div className="banner3 p-5">
                            <h4>The Home of Your Hope</h4>
                            <h1 className="text-info">Your Good Health is Our Responsibility</h1>
                            <h4>Get your appointment through online and remain safe at your home. Because your safety is our first priority.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner4} alt="Third slide"/>

                    <Carousel.Caption>
                        <div className="banner4 p-5">
                            <h4 className="text-white">The Home of Your Hope</h4>
                            <h1 className="text-danger">Your Good Health is Our Responsibility</h1>
                            <h4 className="text-white">Get your appointment through online and remain safe at your home. Because your safety is our first priority.</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
        </div>
    );
};

export default Banner;