import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../src/GlobalContext";


function ProfileEdit(){
const { user } = useContext(GlobalContext);

const [email, setEmail] = useState(null);
const [username, setUsername] = useState(null);


const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
        setEmail(value);
    }
    if (id === "username") {
        setUsername(value);
    }
}
const handleSubmit = async () => {

        if(email == null  ) {
            setEmail(user.email)
            console.log("email is null")
        }
        if(username == null ) {
            setUsername(user.username)
            console.log("username is null")
        }
            fetch('/data/users/', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: user.user_id,
                    email: email,
                    username: username,
                })
            })
}

 return <><div className="body">
        <div className="profile-edit">
        <form className="edit-page">
            <h2>Edit Profile</h2>
            <div className = "email-edit">
                <input type="text" className="input-text" value={email} onChange={(e) => handleInputChange(e)} id="email" placeholder=" email"/>
            </div>
    
            <div className = "username">
                <input type="text" className="input-text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder=" username"/>
            </div>
            
            <div className="edit-buttons">
                <button type="button"  onClick={() => handleSubmit()}> Confirm </button>

                <Link to="/profile">
                <button> Cancel </button>
                </Link>
            </div>   

            {/* <Link to="/change-password"><p>Change Password?</p></Link>  */} 
        </form>
    </div>  
    </div>
    </>
    }
    
    export default ProfileEdit