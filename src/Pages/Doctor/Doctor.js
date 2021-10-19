import React from 'react';

const Doctor = (props) => {
    const {name, img, specialist} = props.doctor;

    return (
        <div className="col-lg-4 gy-4">
            <div className="card border-0 shadow h-100">
                <img src={img} className="card-img-top h-100" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-primary text-center">{name}</h3>
                    <p className="card-text text-center">{specialist}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;