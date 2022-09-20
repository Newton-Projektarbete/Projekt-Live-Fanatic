import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function Profile(){

    
    const { allTickets, sortedConcerts, allConcerts} = useContext(GlobalContext);


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;


    const myTickets = () => {
        let tickets = []

        for (let i = 0; i < sortedConcerts.length; i++) {
            for (let x = 0; x < allTickets.length; x++) {
               if (sortedConcerts[i].concert_id == allTickets[x].concert_id && sortedConcerts[i].performance_date >= today) {
                
                tickets[i] = 
                <table>
                    <tr className="table-header">
                        <th></th>
                        <th>Concert:</th>
                        <th>Date:</th>
                        <th>Location:</th>
                    </tr>
    
                    <tr>
                        <td className="profile-td"><img className="img-profile" src={sortedConcerts[i].concert_image_url} /></td>
                        <td className="profile-td"><Link to="">{sortedConcerts[i].concert_name}</Link></td>
                        <td className="profile-td"><p>{sortedConcerts[i].performance_date}</p></td>
                        <td className="profile-td">{sortedConcerts[i].location}</td>
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