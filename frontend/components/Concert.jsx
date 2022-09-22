import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function Concert() {

    let id = useParams().concert_id;
    const { allConcerts, allTickets, user } = useContext(GlobalContext);

    let concert = []
    let pageExist = false

    allConcerts.map(a => {
        if (a.concert_id == id) {
            concert = a
            pageExist = true
            return concert
        }
    })

    function streamAccess() {
        let streamBtn = '' 
        for (let i = 0; i < allTickets.length; i++) {
            if (allTickets[i].pending === "false" && concert.concert_id === allTickets[i].concert_id && allTickets[i].user_id === user.user_id) {
                streamBtn = <Link to={"/concert/" + concert.concert_id +"/stream"}>
                <button className="stream_button default_button">Stream</button>
            </Link>

            }
        }
        return streamBtn
    }

    return <> { pageExist  ? <>
        <div className="body">
            <div className="concert_content">
                <div className="title_info">

                    <div className="title_content">
                        <h1 className="concert-title-h1">{concert.concert_name}</h1>
                        <div className="like_button">
                            <i className="material-symbols-outlined like-concert">favorite</i>
                        </div>
                    </div>

                    <div className="info">
                        <span className="material-symbols-outlined">calendar_month</span>
                        <p>{concert.performance_date}</p>
                        <span className="material-symbols-outlined">schedule</span>
                        <p>{concert.time}</p>
                        <p>|</p>
                        <span className="material-symbols-outlined">location_on</span>
                        <p>{concert.location}</p>
                    </div>

                    <div className="line_up">
                        <p>Artist:</p>
                        <Link to={"/artist/" + concert.artist_id}>{concert.artist_name}</Link>
                    </div>

                    <div className="button_content">
                        <Link to={"/concert/" + concert.concert_id + "/buy-ticket"}>
                            <button className="buy_button default_button">Buy ticket</button>
                        </Link>
                        {streamAccess()}
                    </div>

                    <div className="tickets_left">
                        <p>Remaining tickets: {concert.ticket_saldo}</p>
                    </div>
                </div>
                <div className="right_content">
                    <div >
                        <img className="concert_image" src={concert.concert_image_url}  />
                    </div>
                </div>

            </div>
        </div>
        </> 
        :<>
        <div className="body">
            <h1 className="noMatch">Page not found</h1> 
        </div>
        </>
    }

        

    </>
}

export default Concert