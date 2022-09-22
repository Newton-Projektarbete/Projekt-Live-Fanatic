import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../src/GlobalContext";

function ChangePass() {

const { user } = useContext(GlobalContext);

const [OldPassword, setOldPassword] = useState(null);
const [newPassword, setNewPassword] = useState(null);
const [RepeatNewPassword, setRepeatNewPassword] = useState(null);


const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "oldPassword") {
        console.log(value)
        setOldPassword(value);
    }
    if (id === "newPassword") {
        setNewPassword(value);
    }
    if (id === "repeatNewPassword") {
        setRepeatNewPassword(value);
    }
}
const handleSubmit = async () => {
        console.log("handleSubmit")
        
        if(newPassword == RepeatNewPassword){ // add && newPassword == RepeatNewPassword
            
            fetch('/data/users/password', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    password: newPassword
                })
            })

/*             fetch('/data/user/password', {
                method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user_id: user.user_id,
                            email: user.email
                        })
                
            }).then( (res) =>{
                if(res.ok){
                    fetch('/data/users/password', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: user.email,
                            password: newPassword
                        })
                    })
                }
            }) */
            
/*             fetch('/data/users/password', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user_id,
                    password: newPassword
                })
            }) */
            
        }

/*        if(password != null && password == confirmPassword ){
        console.log("password: "+ password)
         fetch('/data/users/password', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user_id: user_id,
                            password: password
                        })
                    })
       } */
}


    return <><div className="body">
        <div className="profile-edit">
        <form className="edit-page">
            <h2>Edit Profile</h2>
    
            <div className="password">
                <input type="password" className="input-text" value={OldPassword} onChange={(e) => handleInputChange(e)} id="oldPassword" placeholder="Old password"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" value={newPassword} onChange={(e) => handleInputChange(e)} id="newPassword" placeholder="New password"/>
            </div> 

            <div className="password">
                <input type="password" className="input-text" value={RepeatNewPassword} onChange={(e) => handleInputChange(e)} id="repeatNewPassword" placeholder="Repeat New password"/>
            </div>
            
            <div className="edit-buttons">
                <button type="button"  onClick={() => handleSubmit()}> Confirm </button>

                <Link to="/profile-edit">
                <button> Cancel </button>
                </Link>
            </div>   

        </form>
    </div>  
    </div>
    </>
}

export default ChangePass