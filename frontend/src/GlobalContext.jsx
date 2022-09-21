import { createContext, useState, useEffect } from "react";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  


// useState for all variables 
const [isLoading, setIsLoading] = useState(true)
const [allConcerts, setAllConcerts] = useState([])
const [allArtists, setAllArtists] = useState([])
const [allTickets, setAllTickets] = useState([])
const [isLoggedIn, setisLoggedIn] = useState(false)
const [validTickets, setValidTickets] = useState([])
const [sortedConcerts, setSortedConcerts] = useState([])
const [user, setUser] = useState([])
const [favorites, setFavorites] = useState([])
/*
const [isLoaded, setisLoaded] = useState(false) */

// useEffect to run methods upon load
useEffect(() => {
    loadAllConcerts()
    loadAllArtists()
    loadAllTickets()
    loadValidTickets()
    loadSortedConcerts()
    loadLoggedInUsers()
    addToFavorite()
  }, []);

  const loadAllConcerts = async () => {
    setIsLoading(true)
    const response = await fetch("/data/concert")
    const result = await response.json()
    /* console.log(result) */
    setAllConcerts(result)
    setIsLoading(false)
  }


  const loadValidTickets = async () => {
    setIsLoading(true)
    const response = await fetch("/data/ticket/valid")
    const result = await response.json()
    /* console.log(result) */
    setValidTickets(result)
    setIsLoading(false)
  }

  const loadSortedConcerts = async () => {
    setIsLoading(true)
    const response = await fetch("/data/concert/coming-soon")
    const result = await response.json()
    /* console.log(result) */
    setSortedConcerts(result)
    setIsLoading(false)
  }
  
  const loadAllArtists = async () => {
    setIsLoading(true)
    const response = await fetch("/data/artist")
    const result = await response.json()
    /* console.log(result) */
    setAllArtists(result)
    setIsLoading(false)
  }

  const loadAllTickets = async () => {
    setIsLoading(true)
    const response = await fetch("/data/ticket")
    const result = await response.json()
    /* console.log(result) */
    setAllTickets(result)
    setIsLoading(false)
  }


  const addToFavorite = async () => {
    setIsLoading(true)
    const response = await fetch("/data/favorite")
    const result = await response.json()
    setFavorites(result)
    setIsLoading(false)
  }

  const loadLoggedInUsers = () => {
    fetch('/data/login', {
      method: 'GET'
  }).then(function (response) {
      return response.json();
  }).then(function (myJson) {
      setIsLoading(true)
      setUser(myJson)
      setisLoggedIn(myJson.loggedIn)
    });
  }

/*   useEffect (()=>{
    fetch('/data/login', {
        method: 'GET'
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        setIsLoading(true)
        setisLoggedIn(myJson.loggedIn)
      });
  },[]); */

/*   useEffect(()=>{
    if (isLoading == false) return;

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
},[]) */

    return (
        <GlobalContext.Provider
          value={{
            isLoading,
            allConcerts,
            allArtists,
            allTickets,
            validTickets,
            sortedConcerts,
            isLoggedIn,
            user,
            favorites
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}

export default GlobalContext;

// Original Example Code down Here
/* 
import { createContext, useState, useEffect } from "react";
const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  // useState for all variables 
  const [auth, setAuth] = useState({loggedIn:false})
  const [tidbits, setTidbits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  // useEffect to run methods upon load
  useEffect(() => {
    checkAuth()
    loadTidbits()
  }, []);
  // methods, could be for on load, or just called from elsewhere
  const checkAuth = async () => {
    setIsLoading(true)
    const response = await fetch("/data/login")
    const result = await response.json()
    console.log(result)
    setAuth(result)
    setIsLoading(false)
  }
  const submitLogin = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("/data/login", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    checkAuth()
  }
  const logout= async () => {
    setIsLoading(true)
    const response = await fetch("/data/login", {
        method: "delete"
    })
    const result = await response.json()
    console.log(result)
    setIsLoading(false)
    setAuth({loggedIn:false})
  }
  const loadTidbits = async () => {
    setIsLoading(true)
    const response = await fetch("/data/tidbits")
    const result = await response.json()
    console.log(result)
    setTidbits(result)
    setIsLoading(false)
  }
  return (
    <GlobalContext.Provider
      value={{
        auth,
        tidbits,
        isLoading,
        submitLogin,
        logout
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
*/