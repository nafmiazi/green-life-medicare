import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';
import './Departments.css';
import icon from '../../../images/logo.png';

const Departments = () => {
    const [departments, setDepartments] = useState([])
    useEffect( () => {
        fetch('departments.json')
        .then(res => res.json())
        .then(data => setDepartments(data))
    }, [])
    return (
        <div id="departments" className="section">
            <div className="container">
                <h2 className="text-center fw-bold">Our Medical Departments</h2>
                <div className="text-center d-none d-md-block underline"><img width="3%" src={icon} alt="" /></div>
                <div className="row m-0 p-lg-5">
                    {
                        departments.map(department => <Department department={department} key={department.id}></Department>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;