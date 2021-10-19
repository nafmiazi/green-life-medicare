import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import icon from "../../images/logo.png";


const Doctors = () => {
    const [ doctors, setDoctors] = useState([]);
    useEffect(() =>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2 className="text-center fw-bold mt-3">Meet With Our Doctors</h2>
            <div className="text-center d-none d-md-block underline"><img width="3%" src={icon} alt="" /></div>
            <div className="row m-0 p-lg-5">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;