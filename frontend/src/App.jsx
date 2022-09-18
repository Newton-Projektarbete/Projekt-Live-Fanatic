import { BrowserRouter as Router } from 'react-router-dom'
import LiveFanaticRouter from '../components/LiveFanaticRouter'
import { GlobalProvider } from './GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Router>
        <LiveFanaticRouter />
      </Router>
    </GlobalProvider>
  );
}

export default App
