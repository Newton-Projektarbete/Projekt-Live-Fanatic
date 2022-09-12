import { Link } from "react-router-dom";

function Profile(){
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
                    <table>
                        <tr className="table-header">
                            <th></th>
                            <th>Concert</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                            <td className="profile-td">
                                <a href="#">
                                    <span className="material-symbols-outlined">print</span>
                                </a>
                                <a href="#">
                                    <span className="material-symbols-outlined">qr_code</span>
                                </a>
                            </td>

                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                            <td className="profile-td">
                                <a href="#"><span className="material-symbols-outlined">print</span></a>
                                <a href="#"><span className="material-symbols-outlined">qr_code</span></a>
                            </td>
                        </tr>

                        <tr>
                            <td className="profile-td"><img className="img-profile" src="../examples/justin-timberlake.jpg" /></td>
                            <td className="profile-td"><a href="">Justin Timberlake</a></td>
                            <td className="profile-td">2022.12.12</td>
                            <td className="profile-td">Stockholm, Globen</td>
                            <td className="profile-td"> <a href="#"><span className="material-symbols-outlined">print</span></a>
                                <a href="#"><span className="material-symbols-outlined">qr_code</span></a>
                            </td>
                        </tr>
                    </table>
                </div>

                <div></div>

                <div className="centrum-table">
                    <h2>Expired tickets </h2>
                    <table>
                        <tr className="table-header">
                            <th></th>
                            <th>Concert</th>
                            <th>Date</th>
                            <th>Location</th>
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
                            <th>Concert</th>
                            <th>Date</th>
                            <th>Location</th>
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