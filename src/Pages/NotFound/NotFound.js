import React from 'react';
import error from '../../images/notfound/error.jpg';
import warning from '../../images/notfound/warning.jpg';

const NotFound = () => {
    return (
        <div className="not-found d-flex justify-content-center align-items-center">
            <section className="custom-color">
                <div className="row m-0">
                    <div className="col-lg-4">
                        <img src={warning} className="w-75" alt="" />
                    </div>
                    <div className="col-lg-4 text-center">
                        <i className="fas fa-3x fa-bomb"></i>
                        <h1>Opssss!</h1>
                        <h1>404 Page Not Found!!</h1>
                    </div>
                    <div className="col-lg-4">
                        <img src={error} className="w-75" alt="" />
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default NotFound;
