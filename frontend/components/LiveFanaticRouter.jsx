import { BrowserRouter as Router, Routes, Route, Link,useNavigate, useLocation  } from "react-router-dom";
import { useState, useEffect } from 'react'
import Main from "./Main";
import MainViewAll from "./MainViewAll";
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
import ConfirmPayment from "./ConfirmPayment";
import Header from "./Header";
import NoMatch from "./NoMatch";
function LiveFanaticRouter(){

    return <>
        <div>
        <Header/>
        </div>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:genre" element={<Main />} />
            <Route path="/main-view-all" element={<MainViewAll />} />
            <Route path="/profile" element={ < Profile />} />
            <Route path="/profile/:ticket_id" element={ < QR />} />
            <Route path="/profile-edit" element={ < ProfileEdit />} />
            <Route path="/search" element={ < AdvancedSearch />} />
            <Route path="/artist/:artist_id" element={ < Artist />} />
            <Route path="/buy-ticket" element={ < BuyTicket />} />
            <Route path="/concert/:concert_id" element={ < Concert />} />
            <Route path="/concert/:concert_id/stream" element={ < Stream />} />
            <Route path="/log-in" element={ < LogIn />} />
            <Route path="/sign-up" element={ < SignUp />} />
            <Route path="/qr" element={ < QR />} />
            <Route path="/confirm-payment" element={ < ConfirmPayment />} />
            <Route path="*" element={ < NoMatch />} />
        </Routes>
        <div className="footer">
        <footer >
        <Link to="/" >Main</Link>
        <Link to="/main-view-all" >Main view all</Link>
        <Link to="/log-in" >Log In</Link>
        <Link to="/sign-up" >Sign Up</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/profile-edit" >Profile Edit</Link>
        <Link to="/concert" >Concert</Link>
        <Link to="/artist" >Artist</Link>
        <Link to="/buy-ticket" >Buy Ticket</Link>
        <Link to="/confirm-payment" >Confirm Payment</Link>
        <Link to="/qr" >QR</Link>
        <Link to="/stream" >Stream</Link>
        <Link to="/search" >Advanced Search</Link>
        </footer>
        </div>
    </>
}

export default LiveFanaticRouter