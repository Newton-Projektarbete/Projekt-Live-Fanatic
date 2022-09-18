import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
