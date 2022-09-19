import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

// useState for all variables 
const [isLoading, setIsLoading] = useState(true)
const [allConcerts, setAllConcerts] = useState([])
const [allArtists, setAllArtists] = useState([])

// useEffect to run methods upon load
useEffect(() => {
    loadAllConcerts()
    loadAllArtists()
  }, []);

  const loadAllConcerts = async () => {
    setIsLoading(true)
    const response = await fetch("/data/concert")
    const result = await response.json()
    /* console.log(result) */
    setAllConcerts(result)
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


    return (
        <GlobalContext.Provider
          value={{
            isLoading,
            allConcerts,
            allArtists
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