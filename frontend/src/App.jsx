import { useEffect, useState } from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import LiveFanaticRouter from '../components/LiveFanaticRouter'

function App() {
  const [concerts, setConcerts] = useState([null])
  useEffect(()=> {
    fetchConcerts();
  },[])

  const fetchConcerts = async ()=> {
    const response = await fetch("data/concert/");
    const data = await response.json();
    setConcerts(data);
    console.log(concerts)
    console.log('app fetched concerts')
  }

  return <Router>
    {/* <LiveFanaticRouter />   */}
    <LiveFanaticRouter {...concerts}/>  
  </Router>
}

export default App
