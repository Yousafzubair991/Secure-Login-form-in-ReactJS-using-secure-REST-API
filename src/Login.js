import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { setUserSession } from './Utils/Common';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        
            setError(null);
            setLoading(true);
            axios.post('http://localhost:4000/users/signin', { username: username, password:password }).then(response => {
              setLoading(false);
              setUserSession(response.data.token, response.data.user);
              props.history.push('/dashboard');
            }).catch(error => {
              setLoading(false);
              if (error.response.status === 401) setError(error.response.data.message);
              else setError("Something went wrong. Please try again later.");
            });
          
        // Props.history.push('/dashboard');
    }

    return(
        <div>
        <div className="maincontainer">
    <div className="container-fluid">
        <div className="row no-gutter">
           
            <div className="col-md-6 d-none d-md-flex bg-image"></div>
            
            <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
                   
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <h3 className="display-4">REACT LOGIN</h3>
                                <p className="text-muted mb-4">Enter Username and password here.</p>
                                <form>
                                    <div className="form-group mb-3">
                                        <input id="inputEmail" type="email" placeholder="Username address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" 
                                            onChange={e=>setUsername (e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                           onChange={e=>setPassword (e.target.value)}
                                        />
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                       
                                           {error && <div className="error">(error)</div>}
                                       <br/>
                                        <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" />
                                        <label htmlFor="customCheck1" className="custom-control-label">Remember password</label>
                                    </div>
                                    
                                    <input type="button" onClick={handleLogin} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" 
                                    value={loading ? "loading..." : "Login"} disabled={loading}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

        </div>
    );

}

export default Login;