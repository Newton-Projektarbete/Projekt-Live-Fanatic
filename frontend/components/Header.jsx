import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import React from "react"
import GlobalContext from "../src/GlobalContext"


function Header(){
    let [searchParams, setSearchParams] = useSearchParams();
    let [query, setQuery] = React.useState( searchParams.get("query"));
    const [searchTerm, setSearchTerm] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, setisLoggedIn } = useContext(GlobalContext);
    // const query = new URLSearchParams(location.search).get("query");
    const {slug} = useParams();

//     useEffect(()=> {
//         const search = async () => {
//             try {
//                 const {data} = await React.get('API_URL/search?search={query}');
//                 setSearchTerm(data.products);
//         }catch{
//             console.log("error")
//         }
//     };
//     search();
// }, []);


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


function handleSubmit(){
    setSearchParams({query});
    // event.preventDefault();
    // let params = serializeFormsQuery(event.taget);
    // setSeachParams(params);
    // console.log(searchParams)
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
                    <SearchForm action="/search" onSubmit= {handleSubmit} className="search-field-form">
                        <TextInput className="search-field-input"  type="text" placeholder="Search.." value={query} onChangeText={setQuery} name="search"/>
                        <span className="material-symbols-outlined search-field-icon">search</span>
                    </SearchForm>
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
                <form action="/search" onSubmit={handleSubmit}  className="search-field-form">
                    <input className="search-field-input"  onChangeText={setQuery} type="search" placeholder="Search.." name="search"/>
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