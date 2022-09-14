import { Link } from "react-router-dom";
import  { useState} from "react"
import { useEffect } from "react";
import LoginPost from "./LoginPost"

function Example() {
    // Declare a new state variable, which we'll call "count"  
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  function test(){
    useEffect(()=>{
        (async()=>{
            let res = await fetch('/data/login', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email: userEmail,
                    password: userPass
                })
            })
            console.log(res)
            console.log("I got called")
        })
    },[])
  }

function LogIn(){

 /*    const handleSubmit=(e)=>{

    }
 */
    return <>
    <div className="body">
        <form className="login">
            <h2>Log in</h2>
            
            <div className = "email">
                <input className="input-text" placeholder="Email" type="text" />
            </div>
    
            <div className="password">
                <input className="input-text" placeholder="Password" type="text" />
            </div>
            
            <div className="buttons">
                <button className ="login-page-btn" type="submit" 
                onClick={LoginPost}
                /* onClick={()=> useEffect} */
                >Log in</button>

                <Link to="/sign-up">
                <button className ="login-page-signup-btn" type="submit">Sign up</button>
                </Link>
            </div>   
        </form>
    </div>   
    </>
    }
    
    export default LogIn