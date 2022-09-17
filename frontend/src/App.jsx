import {BrowserRouter as Router } from 'react-router-dom'
import LiveFanaticRouter from './components/LiveFanaticRouter'

function App() {

  return <Router>
    <LiveFanaticRouter/>  
    {/* <LiveFanaticRouter {...concerts}/>  */} 
  </Router>
}

export default App
