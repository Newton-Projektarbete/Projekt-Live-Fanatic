import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"

function SignUp() {

    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [username, setusername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value);
        }
        if (id === "username") {
            setusername(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = async () => {
        if (password == confirmPassword) {
                fetch('/data/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        username: username,
                        password: password,
                        roles: "user" //add anonymous later
                    })
                })
                .then(function (response) {
                    console.log(response)
                    if (response.ok == true) {
                        fetch('/data/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                email: email,
                                username: username,
                                password: password,
                            })
                        }).then(function (response) {
                            console.log(response)
                            if(response.ok == true){
                                window.location.reload(true)
                            } else {
                                console.log("fail")
                            }
                        })
                    }else {
                        console.log("log in failed")
                    } 
                }).then(navigate("/"))
        } else {
            alert("Password Incorrect!")
        }
    }

    return <>
        <div className="body">
            <div className="signup-body">
                <form className="signup">
                    <h2>Sign up</h2>
                    <div className="email-signup">
                        <input type="text" className="input-text" value={email} onChange={(e) => handleInputChange(e)} id="email" placeholder="Email" />
                    </div>

                    <div className="username">
                        <input type="text" className="input-text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder="Username" />
                    </div>

                    <div className="password">
                        <input type="password" className="input-text" value={password} onChange={(e) => handleInputChange(e)} id="password" placeholder="Password" />
                    </div>

                    <div className="password">
                        <input type="password" className="input-text" value={confirmPassword} onChange={(e) => handleInputChange(e)} id="confirmPassword" placeholder="Repeat password" />
                    </div>

                    <div className="signup-btn-box">
                        <div className="parent-signup-page-btn">
                            <input className="signup-page-btn" type="submit" onClick={() => handleSubmit()} value="Sign up" />
                        </div>
                        <Link to="/log-in" className="link">Already have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default SignUp