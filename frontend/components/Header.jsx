import GlobalContext from "../src/GlobalContext"
import { useContext, useState, } from "react"
import {Link, useNavigate} from "react-router-dom"

function Header(){
    const { isLoggedIn } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate();

/* {IfThisIsTrue ? DoThis : OtherwiseDoThis } */
const logoutUser = () => {

    fetch('/data/login', {
        method: 'DELETE',
    }).then(function (response) {
        console.log(response)
        if(response.ok == true){
            window.location.reload(true)
        } else {
            console.log("fail")
        }
    }).then( navigate("/"))
          
}


function search(){
    const artists = fetch('data/artist')

    const search = artists.filter(
    artist =>{
        return(
            artist
            .artist_name
            .toIgnoreCase()
            .includes(searchTerm.toIgnoreCase)
        )
    }
)
}

const handleChange = e =>{
    setSearchTerm(e.target.value)
    /* console.log(searchTerm); */
  }

    const { allArtists } = useContext(GlobalContext);

    let artist = []
    let pageExist = false

    // allArtists.map(a => {
    //     if (a.artist_id == id) {
    //         artist = a
    //         pageExist = true
    //         return artist
    //     }
    // })

    function test(){
        return navigate("/search")
    }

    return <>
            {isLoggedIn ? 
        <header className="topnav">
        <div>
            <Link to="/">
            <img src="../examples/logo.png" alt="" />
            </Link>
        </div>
        
        <div className="dropdown">
            <div className="dropbtn">Genre
                <i className="fa fa-caret-down"></i>
            </div>
        
            <div className="dropdown-content">
                <ul className="genre-list"></ul>
                <Link to="/rock">Rock</Link>
                <Link to="/pop">Pop</Link>
                <Link to="/jazz">Jazz</Link>
                <Link to="/blues">Blues</Link>
                <Link to="/hiphop">Hiphop</Link>
            </div>
        </div>
        
        <div className="nav-right">
        
            <div className="search-container">
                <div className="search-field">
                    <form action="/search" className="search-field-form">
                        <input className="search-field-input" onChange= {handleChange} type="text" placeholder="Search.." name="search"/>
                        <span className="material-symbols-outlined search-field-icon">search</span>
                    </form>
                </div>
        
                <div className="sub-search-container">
        
                    <Link to="/search" className="a-default">Advanced search</Link>
                    <div>
                    <Link to="/profile" className="like-link" >
                        <div className="like-box">
                            <span className="like-btn material-symbols-outlined">favorite</span>
                            <div className="like-amount">7</div>
                        </div>
                    </Link>
                    <Link to="/profile" className="like-link" >
                        <div className="like-box">
                            <span className="cart-btn material-symbols-outlined">shopping_cart</span>
                        </div>
                    </Link>


                    </div>
                </div>
        
            </div>
        
            <div>

                <button className="login-btn" onClick={logoutUser} type="button">Log out</button>

                <Link to="/profile" className="a-nav-btn">
                <button className="profile-btn">Profile</button>
                </Link>
        
            </div>
        
        </div>
        
        </header>
        : 
        <header className="topnav">
    <div>
        <Link to="/">
        <img src="../examples/logo.png" alt="" />
        </Link>

    </div>

    <div className="dropdown">
        <div className="dropbtn">Genre
            <i className="fa fa-caret-down"></i>
        </div>

        <div className="dropdown-content">
            <ul className="genre-list"></ul>
            <Link to="/rock">Rock</Link>
                <Link to="/pop">Pop</Link>
                <Link to="/jazz">Jazz</Link>
                <Link to="/blues">Blues</Link>
                <Link to="/hiphop">Hiphop</Link>
        </div>
    </div>

{/*     <Link to="concert" className="a-default">Concerts</Link>
    <Link to="#calender" className="a-default">Calender</Link>
    <Link to="#live" className="a-default">Live</Link> */}

    <div className="nav-right">

        <div className="search-container">
            <div className="search-field">
                <form onSubmit={test} className="search-field-form">
                    <input className="search-field-input" onChange={handleChange} type="text" placeholder="Search.." name="search"/>
                    <span className="material-symbols-outlined search-field-icon">search</span>
                </form>
            </div>

            <div className="sub-search-container">

                <Link to="/search" className="a-default">Advanced search</Link>  
            </div>

        </div>

        <div>
            <Link to="/log-in" className="a-nav-btn">
                <button className="login-btn">Log in</button>
            </Link>
            <Link to="/sign-up" className="a-nav-btn">
                <button className="signup-btn">Sign up</button>
            </Link>

        </div>

    </div>

        </header>
        }
    </>
}
export default Header

{/*         {isLoggedIn ? 
        <header className="topnav">
        <div>
            <Link to="/">
            <img src="../examples/logo.png" alt="" />
            </Link>
        </div>
        
        <div className="dropdown">
            <div className="dropbtn">Genre
                <i className="fa fa-caret-down"></i>
            </div>
        
            <div className="dropdown-content">
                <ul className="genre-list"></ul>
                <Link to="/rock">Rock</Link>
                <Link to="/pop">Pop</Link>
                <Link to="/jazz">Jazz</Link>
                <Link to="/blues">Blues</Link>
                <Link to="/hiphop">Hiphop</Link>
            </div>
        </div>
        
        <Link to="concert" className="a-default">Concerts</Link>
        
        <div className="nav-right">
        
            <div className="search-container">
                <div className="search-field">
                    <form action="/action_page.php" className="search-field-form">
                        <input className="search-field-input" type="text" placeholder="Search.." name="search"/>
                        <span className="material-symbols-outlined search-field-icon">search</span>
                    </form>
                </div>
        
                <div className="sub-search-container">
        
                    <Link to="/search" className="a-default">Advanced search</Link>
                </div>
        
            </div>
        
            <div>
                <Link to="/log-in" className="a-nav-btn">
                    <button className="login-btn" onClick={logoutUser} type="button">Log out</button>
                </Link>
                <Link to="/profile" className="a-nav-btn">
                <button className="profile-btn">Profile</button>
                </Link>
        
            </div>
        
        </div>
        
        </header>
        : 
        <header className="topnav">
    <div>
        <Link to="/">
        <img src="../examples/logo.png" alt="" />
        </Link>
    </div>
    <div className="dropdown">
        <div className="dropbtn">Genre
            <i className="fa fa-caret-down"></i>
        </div>
        <div className="dropdown-content">
            <ul className="genre-list"></ul>
            <Link to="/rock">Rock</Link>
                <Link to="/pop">Pop</Link>
                <Link to="/jazz">Jazz</Link>
                <Link to="/blues">Blues</Link>
                <Link to="/hiphop">Hiphop</Link>
        </div>
    </div>
    <Link to="concert" className="a-default">Concerts</Link>
    <Link to="#calender" className="a-default">Calender</Link>
    <Link to="#live" className="a-default">Live</Link>
    <div className="nav-right">
        <div className="search-container">
            <div className="search-field">
                <form action="/action_page.php" className="search-field-form">
                    <input className="search-field-input" type="text" placeholder="Search.." name="search"/>
                    <span className="material-symbols-outlined search-field-icon">search</span>
                </form>
            </div>
            <div className="sub-search-container">
                <Link to="/search" className="a-default">Advanced search</Link>
                <div>
                    <Link to="/profile" className="like-link" >
                        <div className="like-box">
                            <span className="like-btn material-symbols-outlined">favorite</span>
                            <div className="like-amount">7</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div>
            <Link to="/log-in" className="a-nav-btn">
                <button className="login-btn">Log in</button>
            </Link>
            <Link to="/sign-up" className="a-nav-btn">
                <button className="signup-btn">Sign up</button>
            </Link>
        </div>
    </div>
        </header>
        } */}