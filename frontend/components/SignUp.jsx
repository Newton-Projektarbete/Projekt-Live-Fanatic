import { Link } from "react-router-dom";
import { useState } from "react"

function SignUp(){
    const [email, setEmail] = useState(null);
    const [username, setusername] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "username"){
        setusername(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}


const handleSubmit = () => {
    fetch('/data/users', {
     method: 'POST',
     values: {
        email,
        username,
        password,
        confirmPassword
    }
})
}



    return <>
    <div className="body">
    <div className="signup-body">
        <form className="signup">
            <h2>Sign up</h2>
            <div className = "email-signup">
                <input type="text" className="input-text" value= {email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
            </div>
    
            <div className = "username">
                <input type="text" className="input-text" value={username} onChange = {(e) => handleInputChange(e)} id="username" placeholder="Username"/>
            </div>
    
            <div className="password">
                <input type="text" className="input-text" value={password} onChange = {(e) => handleInputChange(e)} id="password"  placeholder="Password"/>
            </div>
    
            <div className="password">
                <input type="text" className="input-text" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword"  placeholder="Repeat password"/>
            </div>
            
            <div className="signup-btn-box">
                <Link to="#" className ="parent-signup-page-btn">
                <input className ="signup-page-btn" type="submit" onClick={()=>handleSubmit()} value="Sign up"/>
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