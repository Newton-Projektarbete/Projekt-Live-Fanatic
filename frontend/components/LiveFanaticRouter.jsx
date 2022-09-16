import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import MainViewAll from "./MainViewAll";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import AdvancedSearch from "./AdvancedSearch";
import Artist from "./Artist";
import BuyTicket from "./BuyTicket";
import Concert from "./Concert";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import QR from "./QR";
import Stream from "./Stream";
import ConfirmPayment from "./ConfirmPayment";
import Header from "./Header";
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

function LiveFanaticRouter(){
    let location = useLocation();

    const navigate = useNavigate();
    const [isLoaded, setisLoaded] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const loggedInURLs = ["/profile", "/buy-ticket", "/profile-edit"]
    const loggedOutURLs = ["/sign-up", "/log-in", ]
  
    useEffect (()=>{
      console.log(location)
      fetch('/data/login', {
          method: 'GET'
      }).then(function (response) {
          return response.json();
      }).then(function (myJson) {
          setisLoaded(true)
          setisLoggedIn(myJson.loggedIn)
        });
    },[]);

    

    useEffect(()=>{
        if (isLoaded == false) return;

        const currentUrl = location.pathname;
  
          if(isLoggedIn){
            if (loggedOutURLs.some(url => currentUrl === url)) {
              navigate("/", { replace: true });
            }
          } else {
            if (loggedInURLs.some(url => currentUrl === url)) {
              navigate("/log-in", { replace: true });
            }
        }
    },[location.pathname, isLoggedIn])
    
    

function header(){

    let result = "";
        
    if(isLoggedIn && isLoaded){
        result = <header className="topnav">
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
            <Link to="#">Hiphop</Link>
            <Link to="#">Rock</Link>
            <Link to="#">Jazz</Link>
            <Link to="#">Dance</Link>
            <Link to="#">House</Link>
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
                    <Link to="/buy-ticket" >
                        <span className="cart-btn material-symbols-outlined">shopping_cart</span>
                    </Link>
                </div>
            </div>
        
        </div>
        
        <div>
            <Link to="/sign-out" className="a-nav-btn">
                <button className="login-btn" type="button">Log out</button>
            </Link>
        
            <Link to="/profile" className="a-nav-btn">
                <button className="profile-btn">Profile</button>
            </Link>
        
        </div>
        
        </div>
        
        </header>

        return result
    
    } else if(!isLoaded && !isLoggedIn){
        result = <header className="topnav">
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
        <Link to="#">Hiphop</Link>
        <Link to="#">Rock</Link>
        <Link to="#">Jazz</Link>
        <Link to="#">Dance</Link>
        <Link to="#">House</Link>
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
            
        </div>

    </div>

    <div>
        <Link to="/log-in" className="a-nav-btn">
            <button className="login-btn" type="button">Log in</button>
        </Link>

        <Link to="/sign-up" className="a-nav-btn">
            <button className="signup-btn">Sign up</button>
        </Link>

    </div>

</div>

</header>

return result
    
    } else{
        result = <h1>ERROR</h1>
    }
    return result
}

    return <>
    <div>
        {header()}
    </div>
    
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main-view-all" element={<MainViewAll />} />
            <Route path="/profile" element={ < Profile />} />
            <Route path="/profile-edit" element={ < ProfileEdit />} />
            <Route path="/search" element={ < AdvancedSearch />} />
            <Route path="/artist" element={ < Artist />} />
            <Route path="/buy-ticket" element={ < BuyTicket />} />
            <Route path="/concert" element={ < Concert />} />
            <Route path="/log-in" element={ < LogIn />} />
            <Route path="/sign-up" element={ < SignUp />} />
            <Route path="/qr" element={ < QR />} />
            <Route path="/stream" element={ < Stream />} />
            <Route path="/confirm-payment" element={ < ConfirmPayment />} />
        </Routes>
        <div className="footer">
        <footer >
        <Link to="/" >Main</Link>
        <Link to="/main-view-all" >Main view all</Link>
        <Link to="/log-in" >Log In</Link>
        <Link to="/sign-up" >Sign Up</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/profile-edit" >Profile Edit</Link>
        <Link to="/concert" >Concert</Link>
        <Link to="/artist" >Artist</Link>
        <Link to="/buy-ticket" >Buy Ticket</Link>
        <Link to="/confirm-payment" >Confirm Payment</Link>
        <Link to="/qr" >QR</Link>
        <Link to="/stream" >Stream</Link>
        <Link to="/search" >Advanced Search</Link>
        </footer>
        </div>
    </>
}

export default LiveFanaticRouter