import React from 'react';
import './Articles.css';
import covid from '../../../images/summary/covid.svg';
import service from '../../../images/summary/service.svg';
import doctor from '../../../images/summary/doctor.svg';
import icon from '../../../images/logo.png';
import onlineCare from '../../../images/online-care.png';
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <div className="covid p-4 text-white mb-5">
                <h6 className="container text-center">COVID-19 VACCINATION INFORMATION: Learn about vaccine availability and vaccination appointments. <Link className="fw-bold text-white" to="/news">Read more</Link></h6>
            </div>
            <div className="row m-0 px-4">
                <div className="col-md-6">
                    <h2 className="text-success">Green Life Medicare</h2>
                    <h2>is in the heart of Chattogram</h2>
                </div>
                <div className="col-md-6">
                    <h4>We’ve been providing some of the best private medical care in Chattogram for over 25 years. Your health lies at the heart of everything we do.</h4>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 m-0 px-md-4 g-5 text-white mb-5">
                <div className="col text-black">
                    <div className="card h-100 covid-card border-0">
                        <div className="card-body">
                            <h2 className="card-title">Covid-19</h2>
                            <h2 className="card-title">updates</h2>
                            <p className="card-text"><Link className="fw-bold" to="/news">Find out more</Link></p>
                        </div>
                        <img src={covid} className="card-img-bottom" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 service-card border-0 rounded-5">
                        <div className="card-body">
                            <h2 className="card-title">Services we</h2>
                            <h2 className="card-title">provide</h2>
                            <p className="card-text"><Link className="text-white fw-bold" to="/services">View Services</Link></p>
                        </div>
                        <img src={service} className="card-img-bottom" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 doctor-card border-0 rounded-5">
                        <div className="card-body">
                            <h2 className="card-title">Meet our</h2>
                            <h2 className="card-title">Team</h2>
                            <p className="card-text"><Link className="text-white fw-bold" to="/doctors">View Doctors</Link></p>
                        </div>
                        <img src={doctor} className="card-img-bottom" alt="..." />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <h2 className="text-center fw-bold">Digital Health</h2>
                <div className="text-center d-none d-md-block health-underline"><img width="2%" src={icon} alt="" /></div>
                <div className="row m-0 mt-5">
                    <div className="col-lg-6 text-center">
                        <img className="w-75" src={onlineCare} alt="" />
                    </div>
                    <div className="col-lg-6 mt-4 pe-md-5">
                        <h1 className="ps-3 p-md-0 care-title">Virtual urgent care</h1>
                        <p className="p-3 p-md-0">Get a diagnosis and treatment plan without leaving the comfort of home. By downloading the Green Life Medicare Connect app, you can access world-class care from the teams Green Life Medicare</p>
                        <div className="row mt-5 px-3 px-md-0">
                            <div className="col-md-6 d-flex mb-3">
                                <div className="icon">
                                    <i className="fas fa-2x fa-history me-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Convenient Hours</h5>
                                    <p className="small text-muted">Adults: 8am-midnight, Children: 8am-midnight</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex mb-3 mb-md-0">
                                <div className="icon">
                                    <i className="fas fa-2x fa-user-nurse me-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Expert Care</h5>
                                    <p className="small text-muted">Board-certified Emergency and Pediatric Medicine Physicians</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex mb-3">
                                <div className="icon">
                                    <i className="fas fa-2x fa-dollar-sign me-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Insurances Accepted</h5>
                                    <p className="small text-muted">Your visit may only be the price of a copay</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex mb-3 mb-md-0">
                                <div className="icon">
                                    <i className="fas fa-2x fa-stethoscope me-3"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Prescriptions</h5>
                                    <p className="small text-muted">Sent right to your pharmacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;