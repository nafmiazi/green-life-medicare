import React, { useEffect, useState } from 'react';
import icon from "../../images/logo.png";
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="text-center fw-bold mt-3">Services That We Provide</h2>
            <div className="text-center d-none d-md-block underline"><img width="3%" src={icon} alt="" /></div>
            <div className="row m-0 p-lg-5">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
            <div className="emergency-contact p-5 text-danger">
                <h2 className="fw-bold">Get Emergency Care 24/7</h2>
                <h5 className="lh-sm">We are always at your side. We are 24 hours available for you</h5>
                <h5>in emergency situation</h5>
                <h2>+88 (123) 456 789 12</h2>
            </div>
        </div>
    );
};

export default Services;