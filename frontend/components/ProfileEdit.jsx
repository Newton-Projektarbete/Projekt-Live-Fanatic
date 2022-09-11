import { Link } from "react-router-dom";

function ProfileEdit(){
    return <><div className="body">
        <div className="profile-edit">
        <form className="edit-page">
            <legend>Edit Profile Info</legend>
            <div className = "email">
                <input type="text" className="input-text" placeholder="Change Email"/>
            </div>
    
            <div className = "username">
                <input type="text" className="input-text" placeholder="Change Username"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="Change Password"/>
            </div>
    
            <div className="password">
                <input type="password" className="input-text" placeholder="Repeat new Password"/>
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