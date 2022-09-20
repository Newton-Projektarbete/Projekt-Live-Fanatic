import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function Profile(){

    
    const { allTickets, validTickets, allConcerts} = useContext(GlobalContext);

    


 /*    allConcerts.map(a => {
        if (a.concert_id == concertId) {
            concert = a
            return concert
        }
    })  */


    const myTickets = () => {
        let tickets = []

        for (let i = 0; i < allConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
               if (allConcerts[i].concert_id == allTickets[x].concert_id) {
                
                tickets[i] = 
                <table>
                    <tr className="table-header">
                        <th></th>
                        <th>Concert:</th>
                        <th>Date:</th>
                        <th>Location:</th>
                    </tr>
    
                    <tr>
                        <td className="profile-td"><img className="img-profile" src={allConcerts[i].concert_image_url} /></td>
                        <td className="profile-td"><Link to="">{allConcerts[i].concert_name}</Link></td>
                        <td className="profile-td"><p>{allConcerts[i].performance_date}</p></td>
                        <td className="profile-td">{allConcerts[i].location}</td>
                        <td className="profile-td">
                        
                            <a href="#">
                                <span className="material-symbols-outlined global-icons">print</span>
                            </a>
                            <a href="#">
                                <span className="material-symbols-outlined global-icons">qr_code</span>
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
            <h2>My tickets</h2>
            {myTickets()}
            </div> 
                
                <div className="centrum-table">
                    <h2>Expired tickets </h2>
                    <table>
                        <tr className="table-header">
                            <th></th>
                            <th>Concert:</th>
                            <th>Date:</th>
                            <th>Location:</th>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                        </tr>
                    </table>
                </div>

                <div></div>

                <div className="right-table">
                    <h2>Liked concerts</h2>
                    <table>
                        <tr className="table-header">
                            <th></th>
                            <th>Concert:</th>
                            <th>Date:</th>
                            <th>Location:</th>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                        </tr>
                    </table>
                </div>
                

            </div>
            
        </div>

    </div>
    </>
    }
    
    export default Profile