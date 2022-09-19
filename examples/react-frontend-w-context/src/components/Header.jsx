import {Link} from 'react-router-dom'
import Login from "./Login"

function Header(){

    return <header>
        <h1>A.logo</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </nav>
        <Login/>
    </header>

}

export default Header
