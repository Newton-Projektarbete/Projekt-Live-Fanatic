import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function Profile() {

    let id = useParams().ticket_id;
    const { allTickets, sortedConcerts, allConcerts, user, favorites } = useContext(GlobalContext);

    allTickets.map(a => {
        if (a.ticket_id == id) {
            ticket = a
            return ticket
        }
    })


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;

    /* const testRun = async () => {
        console.log("I got Runned!")
    } */

    const addToFavorite = async () => {
        fetch('/data/favorite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user_id,
                concert_id: concert_id,
                roles: "user"
            })
        }).then(response => response.json())
    }

    /* 
    user = user_id
    favorites = user_id & concert_id
    allConcerts = concert_id 

    user_id = favorites user_id
    =>  favorite user_id 
    => concert_id
    
    */

    const favoriteConcerts = () => {

        let favoriteConcertsList = []
        for (let i = 0; i < favorites.length; i++) {
            if (user.user_id == favorites[i].user_id) {
                for (let x = 0; x < allConcerts.length; x++) {
                    if (favorites[i].concert_id == allConcerts[x].concert_id) {
                        favoriteConcertsList[i] = <table>
                            <tr className="table-header">

                            </tr>

                            <tr>
<<<<<<< HEAD
                            <td className="profile-td"><img className="img-profile" src={allConcerts[x].concert_image_url} /></td>
                            <td className="profile-td"><Link to={"/concert/" + allConcerts[x].concert_id}>{allConcerts[x].concert_name}</Link></td>
                            <td className="profile-td">{allConcerts[x].performance_date}</td>
                            <td className="profile-td">{allConcerts[x].location}</td>
=======
                                <td className="profile-td"><img className="img-profile" src={allConcerts[x].concert_image_url} /></td>
                                <td className="profile-td"><Link to={"/concert/" + allConcerts[x].concert_id}>{allConcerts[x].concert_name}</Link></td>
                                <td className="profile-td">{allConcerts[x].performance_date}</td>
                                <div className="like_button">
                            <i className="material-symbols-outlined like-concert-profile">favorite</i>
                        </div>
>>>>>>> main
                            </tr>

                        </table>
                    }
                }
            }
        }
        return favoriteConcertsList
    }


    const activeTickets = () => {
        let tickets = []

        for (let i = 0; i < sortedConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (sortedConcerts[i].concert_id == allTickets[x].concert_id && sortedConcerts[i].performance_date >= today && allTickets[x].user_id == user.user_id) {

                    tickets[i] =
                        <table>

                            <tr>
                                <td className="profile-td"><img className="img-profile" src={sortedConcerts[i].concert_image_url} /></td>
                                <td className="profile-td"><Link to={"/concert/" + sortedConcerts[i].concert_id}>{sortedConcerts[i].concert_name}</Link></td>
                                <td className="profile-td"><p>{sortedConcerts[i].performance_date}</p></td>
                                <td className="profile-td">

                                    <a href="#">
                                        <span className="material-symbols-outlined global-icons">print</span>
                                    </a>
                                    <a href="#">
                                        <Link to={"/profile/" + allTickets[x].ticket_id}><span className="material-symbols-outlined global-icons">qr_code</span></Link>
                                    </a>
                                </td>

                            </tr>

                        </table>
                }

            }

        }
        return tickets

    }


    const expiredTickets = () => {
        let tickets = []

        for (let i = 0; i < sortedConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
                if (sortedConcerts[i].concert_id == allTickets[x].concert_id && sortedConcerts[i].performance_date < today && allTickets[x].user_id == user.user_id) {

                    tickets[i] =
                        <table>
                            <tr>
                                <td className="profile-td"><img className="img-profile" src={sortedConcerts[i].concert_image_url} /></td>
                                <td className="profile-td"><Link to={"/concert/" + sortedConcerts[i].concert_id}>{sortedConcerts[i].concert_name}</Link></td>
                                <td className="profile-td"><p>{sortedConcerts[i].performance_date}</p></td>
                                <td className="profile-td">

                                    <a href="#">
                                        <span className="material-symbols-outlined global-icons">print</span>
                                    </a>
                                    <a href="#">
                                        <Link to={"/profile/" + allTickets[x].ticket_id}><span className="material-symbols-outlined global-icons">qr_code</span></Link>
                                    </a>
                                </td>

                            </tr>

                        </table>
                }

            }

        }
        return tickets

    }

    return <>
        <div className="body">
            <div className="profile-body">

                <div className="edit-profile-box">
                    <Link to="/profile-edit">
                        <button className="edit-btn">Edit profile</button>
                    </Link>
                </div>

                <div className="main-table-content">

                    <div className="left-table">
                        <h2>Active tickets</h2>
                        <tr className="table-header">
                            <div className="info-concert">
                                <b className="concert-align">Concert:</b>
                                <b>Date:</b>
                            </div>
                        </tr>
                        {activeTickets()}
                    </div>

                    <div className="centrum-table">
                        <h2>Expired tickets </h2>
                        <tr className="table-header">
                            <div className="info-concert">
                                <b className="concert-align">Concert:</b>
                                <b>Date:</b>
                            </div>
                        </tr>
                        {expiredTickets()}
                    </div>


                    <div className="right-table">
                        <h2>Liked concerts</h2>
                        <tr className="table-header">
                            <div className="info-concert">
                                <b className="concert-align">Concert:</b>
                                <b>Date:</b>
                            </div>
                        </tr>
                        {favoriteConcerts()}
                    </div>

                </div>

            </div>

        </div>
    </>
}

export default Profile