import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css'

const Department = (props) => {
    const {id, name, img, about, floor, schedule} = props.department;

    return (
        <div className="col-md-6 col-lg-4 gy-4">
            <div className="custom-card rounded-0 card border-0 shadow">
                <img src={img} className="rounded-0 card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title text-danger text-center fw-bold mb-3">{name}</h6>
                    <p className="card-text text-muted small">{about.slice(0,160)}...</p>
                    <p className="text-success fw-bold text-center"><span className="me-3">In {floor}</span><span className="text-primary ps-3 border-start border-2 border-dark">{schedule} hr's service</span></p>
                    <Link to={`/department/${id}`}>
                        <button className="btn w-100 border-0 rounded-0 custom-button text-white">{name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Department;