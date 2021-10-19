import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    // Display Footer section
    return (
        <div className="row custom-footer text-white m-0 p-5 pb-3">
            <div className="col-lg-5 text-start p-3 pt-2">
                <img src={logo} alt="" />
                <h2 className="mb-4"><span className="icon-name">Green Life</span> Medicare</h2>
                <p className="mb-4">We are providing high-quality services. We are providing services related to Cancer, Dentistry, Ophthalmology, Gastrology, Gynocology, Orthopedics to make you feel good and lead a healthy and well life</p>
                <h6>Follow Us On</h6>
                <div>
                    <i className="fab fa-facebook-f me-3 text-warning"></i>
                    <i className="fab fa-twitter me-3 text-warning"></i>
                    <i className="fab fa-linkedin-in me-3 text-warning"></i>
                    <i className="fab fa-pinterest-p me-3 text-warning"></i>
                    <i className="fab fa-instagram text-warning"></i>
                </div>
            </div>
            <div className="col-lg-3 text-start text-md-center">
                <h4 className="icon-name mb-4">Departments</h4>
                <p>Department of Cancer</p>
                <p>Department of Dentistry</p>
                <p>Department of Ophthalmology</p>
                <p>Department of Gastrology</p>
                <p>Department of Gynocology</p>
                <p>Department of Orthopedics</p>
            </div>
            <div className="col-lg-4 text-start text-md-end">
                <h4 className="icon-name mb-4">Contact Us</h4>
                <h6 className="lh-lg"> 250/A, O R Nezam Road, GEC Moor, Chattogram.<i className="fas fa-map-marker-alt ms-3 text-warning"></i></h6>
                <h6 className="lh-lg"> naf71bd@gmail.com <i className="fas fa-envelope ms-3 text-warning"></i></h6>
                <h6 className="lh-lg"> +88 012345 6789 <i className="fas fa-phone-alt ms-3 text-warning"></i></h6>
                <h6 className="mt-3 text-warning">Feel free to contact with us</h6>
            </div>
            <h6 className="mt-5 ms-md-5 text-center text-black">Copyright <i className="far fa-copyright"></i> 2021 Nurul Afsar Fahim</h6>
        </div>
    );
};

export default Footer;