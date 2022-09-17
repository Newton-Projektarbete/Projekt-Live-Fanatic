import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Concert from "./Concert";
import Main from "./Main";
import MainViewAll from "./MainViewAll";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import AdvancedSearch from "./AdvancedSearch";
import Artist from "./Artist";
import BuyTicket from "./BuyTicket";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import QR from "./QR";
import Stream from "./Stream";
import ConfirmPayment from "./ConfirmPayment";
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import ConcertParent from "./ConcertParent";
import ConcertChild from "./ConcertChild";
import NotFound from "./NotFound";

function LiveFanaticRouter(concerts) {
    let location = useLocation();

    const navigate = useNavigate();
    const [isLoaded, setisLoaded] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const loggedInURLs = ["/profile", "/buy-ticket"]
    const loggedOutURLs = ["/sign-up", "/log-in"]

    useEffect(() => {
        console.log(location)
        fetch('/data/login', {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            setisLoaded(true)
            setisLoggedIn(myJson.loggedIn)
        });



    }, []);

    useEffect(() => {
        if (isLoaded == false) return;

        const currentUrl = location.pathname;

        if (isLoggedIn) {
            if (loggedOutURLs.some(url => currentUrl === url)) {
                navigate("/", { replace: true });
            }
        } else {
            if (loggedInURLs.some(url => currentUrl === url)) {
                navigate("/log-in", { replace: true });
            }
        }
    }, [location.pathname, isLoggedIn])

    console.log('Router Fetched')
    console.log(concerts)
    console.log('--------------')

/*     async function load() {
        let concerts = await fetch('data/concert/')
        concerts = await concerts.json()
        setAllConcerts(concerts)
        localStorage.setItem('allConcerts', JSON.stringify(allConcerts)) 
    }

    useEffect(() => {
        load()
        console.log('LiveFanaticRouter Fetching data')
    }, [])

    const [allConcerts, setAllConcerts] = useState([
        {
            concert_id: 0,
            concert_name: "",
            performance_date: Date,
            artist_id: 0,
            genre: "",
            location: "",
            video_url: "",
            concert_image_url: "",
            video_name: "",
            added_date: Date,
            price: 0,
            artist_name: ""
        }
    ]) 

    const data = [{
        name: "I am page One",
        age: "50"
    },
    {
        name: "I am page Two",
        age: "50"
    },
    {
        name: "I am page Three",
        age: "50"
    },
    {
        name: "I am page Four",
        age: "50"
    },
    {
        name: "I am page Five",
        age: "50"
    }] */





// new test 
/* const [concerts, setConcerts] = useState(null)
  useEffect(()=> {
    fetchConcerts();
  },[])

  const fetchConcerts = async ()=> {
    const response = await fetch("data/concert");
    const data = await response.json();
    setConcerts(data);
  }
 */


    return <>
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
                            <input className="search-field-input" type="text" placeholder="Search.." name="search" />
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
                    <Link to="/log-in" className="a-nav-btn">
                        <button className="login-btn">Log in</button>
                    </Link>
                    <Link to="/sign-up" className="a-nav-btn">
                        <button className="signup-btn">Sign up</button>
                    </Link>

                    <Link to="/profile" className="a-nav-btn">
                        <button className="profile-btn">Profile</button>
                    </Link>

                </div>

            </div>

        </header>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main-view-all" element={<MainViewAll />} />
            <Route path="/profile" element={< Profile />} />
            <Route path="/profile-edit" element={< ProfileEdit />} />
            <Route path="/search" element={< AdvancedSearch />} />
            <Route path="/artist" element={< Artist />} />
            <Route path="/buy-ticket" element={< BuyTicket />} />
            <Route path="/concert" element={< Concert {...concerts} />} />
            {/* {<Route path="/concert/:concert_id" element={< Concert {...concerts} />} />} */}

            {/* <Route path="/concert-parent/*" element={ <ConcertParent {...concerts}/>}/> */}
            <Route path="/concert-parent/*" element={ <ConcertParent {...concerts}/>}/>
                <Route path="/concert-parent/:id" element={<ConcertChild {...concerts}/>}/>
            <Route/>

{/*             <Route path="/concert" element={< Concert {...allConcerts} />} />
            <Route path="/concert/:concert_id" element={< Concert {...data} />} /> */}

            {/*             { 
            allConcerts.map( (concert)=> <Link to={"/concert/" + concert.concert_id}></Link>)
            }
            <Route path="/concert/:concert_id" element={< Concert />}/> */}

            <Route path="/log-in" element={< LogIn />} />
            <Route path="/sign-up" element={< SignUp />} />
            <Route path="/qr" element={< QR />} />
            <Route path="/stream" element={< Stream />} />
            <Route path="/confirm-payment" element={< ConfirmPayment />} />
            <Route path="*" element={< NotFound />} />

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