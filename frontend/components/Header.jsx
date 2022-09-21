import GlobalContext from "../src/GlobalContext"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
function Header() {
    const navigate = useNavigate();
    const { isLoggedIn, allTickets, user } = useContext(GlobalContext);

    const [ticketInCart, setTicketInCart] = useState(0)


    const logoutUser = () => {

        fetch('/data/login', {
            method: 'DELETE',
        }).then(function (response) {
            console.log(response)
            if (response.ok == true) {
                window.location.reload(true)
            } else {
                console.log("fail")
            }
        }).then(navigate("/"))

    }

    useEffect(() => {
        getTicketsInCart()
    })
    const getTicketsInCart = async () => {
        let count = 0

        for (let i = 0; i < allTickets.length; i++) {
            if (user.user_id === allTickets[i].user_id && allTickets[i].pending === "true") {
                count++
            }
        }
        setTicketInCart(count)
    }

    const displayCartNr = () => {

        if (ticketInCart != 0) {
            return <div className="like-amount">{ticketInCart}</div>
        } else {
            return <div></div>
        }
    }


    return <>
        {isLoggedIn ?
            <header className="topnav"> {/* Logged In Header */}
                    
                    <button className="headerImg" onClick={()=>{navigate("/")}}>
                    </button>
                    

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
                                <Link to="/profile" className="like-link" >
                                    <div className="like-box">
                                        <span className="cart-btn material-symbols-outlined">shopping_cart</span>
                                        {displayCartNr()}
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
            <header className="topnav"> {/* Logged Out Header */}
                <div>
                    <Link to="/">
                        <img src="../images/logo.png" alt="" />
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
                            <form action="/action_page.php" className="search-field-form">
                                <input className="search-field-input" type="text" placeholder="Search.." name="search" />
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