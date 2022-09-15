import { Link } from "react-router-dom";
import {useEffect } from 'react'
import { useState } from "react";

function Concert() {
    const [concert, setConcert] = useState([]);

    useEffect (()=>{
        const getConcert= async ()=>{
            const res= await fetch('/data/concert');
            const getdata = await res.json();
            setConcert(getdata);
            
        }
        getConcert();
        
        },[]);
        


    return <>
<div className="body">
    <div className="concert_content">
        <div className="title_info">
        {concert.map( (getCon) => {
            return(
                <div key={getCon}>
                <h1 className="concert-title-h1">{getCon.concert_name}</h1>

                <div className="title_content">
                
            <div className="like_button"><i
                    className="material-symbols-outlined like-concert">favorite</i></div>
             </div>

             <div className="info">
            <span className="material-symbols-outlined">
                    calendar_month
            </span>
                <p>{getCon.performance_date}</p>
                <span className="material-symbols-outlined">
                    schedule
            </span>
                <p>7:30pm</p>
                <p>|</p>
                <span className="material-symbols-outlined">
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
            <div className="right_content">
                    <div className="concert_image">
                    </div>
            </div>
            
                </div>
            
            )
            
        })}
        </div>
    
        </div>
        </div>
    </>
}

export default Concert