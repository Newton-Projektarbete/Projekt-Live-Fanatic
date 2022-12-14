import { useState } from "react"
import { useNavigate } from "react-router-dom";

function LogIn() {

        
        const navigate = useNavigate();

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

    const loginUser = () => {

        fetch('/data/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            })
        }).then(function (response) {
            if(response.ok == true){
                window.location.reload(true)
            } else {
                console.log("fail")
            }
            
        }).then(navigate("/"))
    }




    return <>
        <div className="body">
            <form className="login">
                <h2>Log in</h2>

                <div className="email">
                    <input className="input-text" placeholder="Username" type="text" name="username" onChange={handleChange} />
                </div>

                <div className="password">
                    <input className="input-text" placeholder="Password" type="password" name="password" onChange={handleChange} />
                </div>

                <div className="buttons">
                    <button className="login-page-btn"
                    onClick={loginUser}
                    type="button"
                    >Log in
                    </button>
                </div>
            </form>
        </div>


    </>
}

export default LogIn 