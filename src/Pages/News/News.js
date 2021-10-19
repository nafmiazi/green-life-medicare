import React from 'react';
import icon from "../../images/logo.png";
import covid from "../../images/covid.jpg";
import './News.css';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <>
            <div>
                <h2 className="text-center fw-bold mt-3">Latest News</h2>
                <div className="text-center d-none d-md-block underline"><img width="3%" src={icon} alt="" /></div>
            </div>

            <div className="row m-0">
                <div className="col-lg-7 p-5">
                    <span className="doctor me-4 px-3 py-1 text-white">Doctor's column</span> <span className="interview px-3 py-1 text-white">Interview</span>
                    <h1 className="mt-3">What’s Safe After Your COVID-19 Vaccine?</h1>
                    <h5 className="text-muted my-4">Please keep in mind that information about COVID-19 and vaccines is evolving, and recommendations may change as we learn more. If someone is unlucky to get Covid after having been vaccinated and you can still, in some cases, get Covid after you get vaccinated it is likely you will experience a much milder disease.</h5>
                    <img src={covid} width="100%" alt="" />
                </div>
                <div className="col-lg-5 p-2 p-lg-5">
                    <div className="most-read bg-light p-2 p-lg-5 lh-lg">
                        <h1 className="mb-4 text-center text-lg-start">Most read</h1>
                        <div className="mb-4 border-bottom border-danger">
                            <h5>Surprising Body Cues That Could Be a Heart Concern</h5>
                            <p className="text-muted">October 19, 2021</p>
                        </div>
                        <div className="mb-4 border-bottom border-danger">
                            <h5>What’s Safe After Your COVID-19 Vaccine?</h5>
                            <p className="text-muted">October 18, 2021</p>
                        </div>
                        <div>
                            <h5>Asthma Management Guidelines: Focused Updates 2020</h5>
                            <p className="text-muted">October 17, 2021</p>
                        </div>
                    </div>

                    <div className="most-read signIn text-white mt-5 p-2 p-lg-5 lh-lg">
                        <h1 className="mb-4 text-center text-lg-start">GLM Signup</h1>
                        <div className="mb-4 border-bottom border-white">
                            <h5>Get weekly health information and advice from our experts.</h5>
                        </div>
                        <Link to="/login">
                            <button className="btn btn-info btn-lg text-center text-white"><i className="fas fa-sign-in-alt"></i> Sign Up now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;