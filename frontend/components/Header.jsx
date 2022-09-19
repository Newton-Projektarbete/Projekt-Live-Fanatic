

function Header(){

    const result = "";
        
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

export default Header