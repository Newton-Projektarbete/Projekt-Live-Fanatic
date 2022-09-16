import { Link, Navigate, useResolvedPath } from "react-router-dom";
import { useState } from "react";

function SignUp(){

    const [user, setUser] = useState({
        user_id: 0,
        email: "",
        password: "",
        roles: ""
    })

    const handleOnSubmit = event => {
        event.preventDefault();
        Navigate('/success', {
            state: {
                email: user.email,
                password: user.password
            }
        })
    } 

    const handleChange = event =>{
        setUser({...user, [event.target.name]: event.target.value})
      };

    const signupUser = () =>{
         fetch('/data/users', {
            method: 'POST',
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            })
    });
    }

       


    return <>
    <div className="body">
    <div className="signup-body">
        <form className="signup" onSubmit={handleOnSubmit}>
            <h2>Sign up</h2>
            <div className = "email-signup">
                <input type="email" className="input-text" onChange={handleChange} placeholder="Email"/>
            </div>
    
            <div className="password">
                <input type="text" className="input-text"  onChange={handleChange} placeholder="Password"/>
            </div>
            
            <div className="signup-btn-box">
                <Link to="/" className ="parent-signup-page-btn">
                <input className ="signup-page-btn" onClick={signupUser} type="submit" value="Sign up"/>
                </Link>
                <Link to="/log-in" className= "link">Already have an account? Login
                </Link>
            </div>     
        </form>
    </div>
    </div>
    </>
    }
    
    export default SignUp