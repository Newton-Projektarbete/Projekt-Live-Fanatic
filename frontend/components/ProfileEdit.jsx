import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../src/GlobalContext";

function ProfileEdit(){
// const { isLoggedIn, user } = useContext(GlobalContext);

// const [email, setEmail] = useState(null);
// const [username, setUsername] = useState(null);
// const [password, setPassword] = useState(null);
// const [confirmPassword, setConfirmPassword] = useState(null);

// const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     if (id === "email") {
//         setEmail(value);
//     }
//     if (id === "username") {
//         setUsername(value);
//     }
//     if (id === "password") {
//         setPassword(value);
//     }
//     if (id === "confirmPassword") {
//         setConfirmPassword(value);
//     }
// }
// const handleSubmit = async () => {
//         if(email == !null){
//             fetch('/data/users', {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     email: email
//                 })
//         })
//     }
//         if(username == !null) {
//             fetch('/data/users', {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     username: username
//                 })
//         })
//         }
//        if(password == !null && password == confirmPassword ){
//          fetch('/data/users/password', {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Accept': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             password: password,
//                         })
//                     })
//        }
// }





    return <><div className="body">
        <div className="profile-edit">
        <form className="edit-page">
            <h2>Edit Profile</h2>
            <div className = "email-edit">
                <input type="text" className="input-text" value={email} onChange={(e) => handleInputChange(e)} id="email" placeholder=" email"/>
            </div>
    
            <div className = "username">
                <input type="text" className="input-text" value={username} onChange={(e) => handleInputChange(e)} id="Username" placeholder=" username"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" value={password} onChange={(e) => handleInputChange(e)} id="password" placeholder=" password"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" value={confirmPassword} onChange={(e) => handleInputChange(e)} id="confirmPassword" placeholder="Repeat password"/>
            </div>
            
            <div className="edit-buttons">
                <Link to="">
                <button type="submit"  onClick={() => handleSubmit()}> Confirm </button>
                </Link>
                <Link to="/profile">
                <button> Cancel </button>
                </Link>
            </div>     
        </form>
    </div>  
    </div>
    </>
    }
    
    export default ProfileEdit