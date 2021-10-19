import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import icon from '../../images/logo.png';
import './Details.css'

const Details = () => {
    const{departmentId} = useParams();

    const [departments, setDepartments] = useState([]);

    useEffect( () => {
        fetch('/departments.json')
        .then(res => res.json())
        .then(data => setDepartments(data))
    }, [])

    const filterId = departments.filter(department => department.id === parseInt(departmentId));
    const matchedId = filterId[0];
    return (
        <div>
            <h2 className="text-center fw-bold">{matchedId?.name}</h2>
            <div className="text-center d-none d-md-block underline mb-5">
                <img width="3%" src={icon} alt="" />
            </div>
            <div className="row m-0 text-white pe-0 pe-md-5">
                <div className="col-lg-5">
                    <div className="schedule p-4 mx-md-5">
                        <h1>Opening Hours</h1>
                        <h6 className="mb-3">I enjoy getting to know my patients and building meaningful relationships</h6>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Saturday</h4></div>
                            <div className="col-md-6"><h4>9:00-18:00</h4></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Sunday</h4></div>
                            <div className="col-md-6"><h4>9:00-18:00</h4></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Monday</h4></div>
                            <div className="col-md-6"><h4>9:00-18:00</h4></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Tuesday</h4></div>
                            <div className="col-md-6"><h4>9:00-18:00</h4></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Wednesday</h4></div>
                            <div className="col-md-6"><h4>9:00-18:00</h4></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Thursday</h4></div>
                            <div className="col-md-6"><h4>9:00-18:00</h4></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h4>Friday</h4></div>
                            <div className="col-md-6"><h4>Closed</h4></div>
                        </div>
                    </div>
                    <div className="form my-5 p-4 px-5 mx-md-5">
                        <h1>Book Appointment</h1>
                        <h6 className="mb-3">Online appointment process makes it easy for you to book for any one of our services.</h6>
                        <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="bg-light p-md-5">
                        <h2 className="text-dark mb-4">{matchedId?.name}</h2>
                        <div className="px-4">
                            <img src={matchedId?.img} width="100%" alt="" />
                        </div>
                        <h4 className="text-muted mt-4 px-4">{matchedId?.about}</h4>
                    </div>
                    <div className="text-dark bg-light my-5 p-md-5">
                        <h2 className="mb-5">Services of {matchedId?.name}</h2>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h5>{matchedId?.services[0]}</h5></div>
                            <div className="col-md-6"><h5>{matchedId?.services[1]}</h5></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h5>{matchedId?.services[2]}</h5></div>
                            <div className="col-md-6"><h5>{matchedId?.services[3]}</h5></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h5>{matchedId?.services[4]}</h5></div>
                            <div className="col-md-6"><h5>{matchedId?.services[5]}</h5></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h5>{matchedId?.services[6]}</h5></div>
                            <div className="col-md-6"><h5>{matchedId?.services[7]}</h5></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h5>{matchedId?.services[8]}</h5></div>
                            <div className="col-md-6"><h5>{matchedId?.services[9]}</h5></div>
                        </div>
                        <div className="row mb-5 border-bottom">
                            <div className="col-md-6"><h5>{matchedId?.services[10]}</h5></div>
                            <div className="col-md-6"><h5>{matchedId?.services[11]}</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;