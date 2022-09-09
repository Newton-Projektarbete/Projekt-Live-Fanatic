import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./Main";
import MainViewAll from "./MainViewAll";
import MainGenre from "./MainGenre";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import AdvancedSearch from "./AdvancedSearch";
import Artist from "./Artist";
import BuyTicket from "./BuyTicket";
import Concert from "./Concert";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import QR from "./QR";
import Stream from "./Stream";

function LiveFanaticRouter(){
    return <Router>
        <header>
        </header>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/main-view-all" element={<MainViewAll/>} />
            <Route path="/main-genre" element={<MainGenre/>} />
            <Route path="/profile" element={ < Profile/>} />
            <Route path="/profile-edit" element={ < ProfileEdit />} />
            <Route path="/search" element={ < AdvancedSearch />} />
            <Route path="/artist" element={ < Artist />} />
            <Route path="/buy-ticket" element={ < BuyTicket />} />
            <Route path="/concert" element={ < Concert />} />
            <Route path="/log-in" element={ < LogIn />} />
            <Route path="/sign-up" element={ < SignUp />} />
            <Route path="/qr" element={ < QR />} />
            <Route path="/stream" element={ < Stream />} />
        </Routes>
        <footer>
        </footer>
    </Router>
}

export default LiveFanaticRouter