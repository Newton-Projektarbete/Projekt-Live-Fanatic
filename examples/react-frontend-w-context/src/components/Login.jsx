
import { useContext, useState } from "react";
import GlobalContext from "../GlobalContext";

function Login(){
    const { submitLogin, auth, logout } = useContext(GlobalContext);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e) => {
        e.preventDefault()
        submitLogin(email, password)
    }

    let loggedIn = true

    return <>
            { auth.loggedIn ? 
                <div>
                    <button onClick={logout}>Logout</button>
                </div> 
                :
                <div>
                    <form onSubmit={submit}>
                        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                        <input type="submit" value="Login"/>
                    </form>
                </div>                            
            }
        </>
}

export default Login