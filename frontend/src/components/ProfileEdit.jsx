import { Link } from "react-router-dom";

function ProfileEdit(){
    return <><div className="body">
        <div className="profile-edit">
        <form className="edit-page">
            <h2>Edit Profile</h2>
            <div className = "email-edit">
                <input type="text" className="input-text" placeholder="New email"/>
            </div>
    
            <div className = "username">
                <input type="text" className="input-text" placeholder="New username"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="New password"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="Repeat password"/>
            </div>
            
            <div className="edit-buttons">
                <Link to="">
                <button> Confirm </button>
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