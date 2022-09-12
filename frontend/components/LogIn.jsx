import { Link } from "react-router-dom";

function LogIn(){
    return <>
    <div className="body">
        <form className="login">
            <h2>Log in</h2>
            <div className = "email">
                <input type="text" className="input-text" placeholder="Email"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="Password"/>
            </div>
            
            <div className="buttons">
                <Link to="/log-in">
                <button className ="login-page-btn" type="submit">Log in</button>
                </Link>
                <Link to="/sign-up">
                <button className ="login-page-signup-btn" type="submit">Sign up</button>
                </Link>
            </div>   
        </form>
    </div>   
    </>
    }
    
    export default LogIn