import React from 'react';

const Service = (props) => {
    const {name, img, description} = props.service;
    return (
        <div className="col-lg-4 gy-4">
            <div className="card border-0 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-primary">{name}</h3>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;