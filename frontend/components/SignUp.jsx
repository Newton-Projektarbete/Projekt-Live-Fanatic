import { Link } from "react-router-dom";

function SignUp(){
    return <>
    <div className="body">
    <div clasName="signup-body">
        <form className="signup">
            <h2>Sign up</h2>
            <div className = "email-signup">
                <input type="text" className="input-text" placeholder="Email"/>
            </div>
    
            <div className = "username">
                <input type="text" className="input-text" placeholder="Username"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="Password"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="Repeat Password"/>
            </div>
            
            <div className="signup-btn-box">
                <Link to="#" className ="parent-signup-page-btn">
                <input className ="signup-page-btn" type="submit" value="Sign up"/>
                </Link>
                <Link to="/log-in" className= "link">Already have a account? Login
                </Link>
            </div>     
        </form>
    </div>
    </div>
    </>
    }
    
    export default SignUp