import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Login.css'


const Login = () => {
    const {signInUsingGoogle, error, handleRegistration, handleEmailChange, handlePasswordChange, handleNameChange, toggleLogin, isLogin, setUsers} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then((result) => {
            setUsers(result.user);
            history.push(redirect_uri);
        })
    }
    
    return (
        <div className="text-center login-form mx-auto bg-light text-black my-5 rounded shadow-lg">
            <div>
                <img className="mt-5" src={logo} alt="" />
                <h2 className="mb-4"><span className="icon-name">Green Life</span> Medicare</h2>
            </div>

            <form onSubmit={handleRegistration} className="container mt-5 w-50">
                <h3 className="text-center mb-3">Please {isLogin ? 'Login' : 'Register'}</h3>

                {!isLogin &&  <div className="row mb-3">
                                    <label htmlFor="inputAddress" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input onBlur={handleNameChange} type="text" className="form-control" id="inputAddress" placeholder="Your Name"/>
                                    </div>
                                </div>}

                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input onBlur={handlePasswordChange} type="password" className="form-control text-small" id="inputPassword3" placeholder="Min 2 Capital letter required" required/>
                    </div>
                </div>
                <h6 className="text-danger">{error}</h6>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label text-danger" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <div className="border-bottom border-3 fw-bold mb-3 w-50 mx-auto"><h4>OR</h4></div>
            <button onClick={handleGoogleLogin} className="btn btn-warning mb-5"><i className="fab fa-google text-success me-2"></i> Sign In with Google</button>
        </div>
    );
};

export default Login;