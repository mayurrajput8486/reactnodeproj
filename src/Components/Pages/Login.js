import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {   
      const [userName,setUserName]  = useState("");
      const [password,setPassword]  = useState("");      

      const navigate= useNavigate();

      const loginHandler=()=>{        
        if(userName === "re" && password === "re"){
           alert("Login Successful")
           navigate("/re/enquirycreate");
        }else if(userName === "oe" && password === "oe"){
            alert("Login Successful")
            navigate("/oe/oeenquirylist");
        }else if(userName === "cm" && password === "cm"){
            alert("Login Successful")
            navigate("/cm/document");
        }else if(userName === "ah" && password === "ah"){
            alert("Login Successful")
            navigate("/ah/loandisburst");
        }else{
            alert('Please enter valid username and password');
            navigate("/login");
        }
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-4">
                <div className="container mt-4">
                    <form className="container" >
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Login</h2>
                            </div>         
                            <div className="card-body">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="username">Username: </label>
                                        <input type="text" placeholder='Enter Username' className="form-control" id="username" name="username"  autoComplete="off" value={userName} onChange={(event) => {setUserName(event.target.value)}} required />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="password">Password: </label>
                                        <input type="password" placeholder='Enter Password' className="form-control" id="password" name="password"  autoComplete="off" value={password}  onChange={(event) => {setPassword(event.target.value)}} required />
                                    </div>
                                </div>                                       
                            </div>
                            <div className="card-footer">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button onClick={loginHandler} type="button" className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

/* const Login = () => {
    return (
        <>
            <div className="container mt-3">
            <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label for="username">Username: </label>
                        <input type="email" className="form-control" id="username" name="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password: </label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;  */