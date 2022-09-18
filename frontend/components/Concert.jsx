import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

import TempConcert from "./TempConcert";
import { useState } from "react";

function Concert() {
    let id = useParams().concert_id;
    let pos = id - 1;
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
            <div>
                <h1>Concert Page id: {id}</h1>
                <p>{concert.concert_id}</p>
                <p>{concert.concert_name}</p>
                {/* {allConcerts.map(a => {
                    if (a.concert_id == id) {
                        return <p>{a.concert_name}</p>
                    }
                })} */}
                {/* {allConcerts.map(con => <TempConcert key={con.concert_id} con={con}/>)} */}
            </div>
        </div>
    </>
}
export default Concert

{/* {allConcerts.map(obj => <TempConcert key={obj.concert_id} obj={obj}/>)} */ }


{/* <div className="body">
    <div className="concert_content">
        <div className="title_info">

            <div className="title_content">
                <h1 className="concert-title-h1">Slam Poetry Bonga Free Jazz Jam for Dummies</h1>
                <div className="like_button"><i
                        className="material-symbols-outlined like-concert">favorite</i></div>
            </div>

            <div className="info">
            <span class="material-symbols-outlined">
                    calendar_month
            </span>
                <p>Thursday 8 september 2022</p>
                <span class="material-symbols-outlined">
                    schedule
            </span>
                <p>7:30pm</p>
                <p>|</p>
                <span class="material-symbols-outlined">
                    location_on
            </span>
                <p>Andy's garage</p>
            </div>

            <div className="line_up">
                <p>Line-up:</p>
                <a>Static plants</a>
                <a>Purge!</a>
                <a>Cacti pillow</a>
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
                    <div className="concert_image">
                    </div>
            </div>
        
    </div>
</div> */}