import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function Concert() {

    let id = useParams().concert_id;
    const { allConcerts } = useContext(GlobalContext);

    let concert = []

    allConcerts.map(a => {
        if (a.concert_id == id) {
            concert = a
            return concert
        }
    })

    return <>
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
                        <p>7:30pm</p>
                        <p>|</p>
                        <span className="material-symbols-outlined">location_on</span>
                        <p>{concert.location}</p>
                    </div>

                    <div className="line_up">
                        <p>Line-up:</p>
                        <a>{concert.artist_name}</a>
                    </div>

                    <div className="button_content">
                        <Link to="/buy-ticket">
                            <button className="buy_button default_button">Buy ticket</button>
                        </Link>
                        <Link to="/stream">
                            <button className="stream_button default_button">Stream</button>
                        </Link>
                    </div>

                    <div className="tickets_left">
                        <p>5 tickets remaining!</p>
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
}

export default Concert