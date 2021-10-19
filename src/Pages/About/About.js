import React from 'react';
import icon from "../../images/logo.png";
import about from '../../images/about.png';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png'

const About = () => {
    return (
        <div>
            <h2 className="text-center fw-bold mt-3">About GLM</h2>
            <div className="text-center d-none d-md-block underline"><img width="3%" src={icon} alt="" /></div>

            <div className="row my-5 m-0">
                <div className="col-lg-6 text-center text-lg-end">
                    <img src={about} width="60%" alt="" />
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0 pe-md-5">
                    <h2 className="mb-3">We Are Your Trusted Friend</h2>
                    <p className="text-muted">GLM is a trusted name of Medical Services who is always at your side and your health is our first priority.</p>
                    <p className="text-muted">Green Life Medicare will be administered through plan-based customizable programs that incorporate partnership between family members and the care givers for long term illness or disease management.</p>
                    <div className="row mt-4">
                        <div className="col-lg-2">
                            <img className="ms-3" src={about1} width="60px" alt="" />
                        </div>
                        <div className="col-lg-10">
                            <h5>24/7 Support</h5>
                            <p>Our medical team of different department for long term illness writers and editors makes 24/7 hours support</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-2">
                            <img className="ms-3" src={about2} width="60px" alt="" />
                        </div>
                        <div className="col-lg-10">
                            <h5>Emergency Support</h5>
                            <p>Our medical team of different department gives emergency support for long term illness writers and editors makes all the</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;