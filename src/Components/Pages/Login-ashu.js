import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login=()=> {
   
      const [userName,setUserName]  = useState("")
      const [password,setPassword]  = useState("")

      

      const navigate= useNavigate();

      const  loginHandler=()=>{
        
        if(userName=== "RE" && password==="RE"){
           alert("Login Successful")
           navigate("/re")
           }
          else if(userName=== "OE" && password==="OE"){
            alert("Login Successful")
            navigate("/oe")
          }
            else if(userName=== "CM" && password==="CM"){
                alert("Login Successful")
                navigate("/Cm")
                }

            else if(userName=== "AH" && password==="AH"){
                alert("Login Successful")
                navigate("/Ah")
                    }
         else{
            alert('Login Not Successfull');
         }
    }
     

    return (
        <>
            <div class="container mt-3">
            <h2>Login</h2>
                <form>
                    <div class="form-group">
                        <label for="username">Username: </label>
                        <input type="email" className="form-control" value={userName} onChange={(event) => {setUserName(event.target.value)}}/>
                    </div>

                    <div class="form-group">
                        <label for="password">Password: </label>
                        <input type="password" className="form-control"  value={password}  onChange={(event) => {setPassword(event.target.value)}}/>
                    </div>

                    <div class="form-group">
                         <button onClick={loginHandler} type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;