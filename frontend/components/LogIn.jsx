import { Link, useLocation } from "react-router-dom";
import { useState } from "react"
import { useEffect } from "react";
import e from "react";
import axios from "axios"

function LogIn() {

        const [user, setUser] = useState({
            user_id: 0,
            email: "",
            password: "",
            roles: "",
            username: ""
        })

        const handleChange = (e)=>{
            setUser(prev=>({...prev, [e.target.name]:e.target.value}))
          }

/*     
email: "exempel@nodehilll.com",
            password: "abc123",
const [user, setUser] = useState(null) */

    const loginUser = () => {
        fetch('/data/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            })
        }).then(function (response) {
            console.log(response)
            return response.json();
        }).then(function (myJson) {
            console.log(myJson);
        });
    }

    useEffect(() => {
        loginUser()
    }, [loginUser])

    /* 
        useEffect(()=>{
            (async()=>{
                let res = await fetch('/data/users', {
                    method: 'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                console.log(res)
            })
        },[]) */

    /*     const handleLogin = ()=>{
            useEffect(()=>{
                (async()=>{
                    let res = await fetch('/data/login', {
                        method: 'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            email: user.email,
                            password: user.password
                        })
                    })
                    console.log(res)
                    console.log(user)
                })
            },[]) 
    }*/

    /*     
    email: 'exempel@nodehilll.com',
            password: 'abc123'
    email: inputEmail,
            password: inputPass

            onChange={(e) => setEmail(e.target.value)}
 */

    return <>
        <div className="body">
            <form className="login">
                <h2>Log in</h2>

                <div className="email">
                    <input className="input-text" placeholder="Email" type="text" name="email" onChange={handleChange} />
                </div>

                <div className="password">
                    <input className="input-text" placeholder="Password" type="text" name="password" onChange={handleChange} />
                </div>

                <div className="buttons">
                    <button className="login-page-btn"
                    onClick={loginUser}
                    >Log in
                    </button>
                </div>
            </form>
        </div>


    </>
}

export default LogIn 