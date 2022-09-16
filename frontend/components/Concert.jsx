import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'


function Concert(props) {
/*     const [variableName, variableUpdateMethod] = useState([
        {
            concert_id: 0,
            concert_name: "",
            performance_date: Date,
            artist_id: 0,
            genre: "",
            location: "",
            video_url: "",
            concert_image_url: "",
            video_name: "",
            added_date: Date,
            price: 0,
            artist_name: ""
        }
    ])

    let params = useParams()
    let id = params.concert_id - 1;

    useEffect(() => {
        async function load() {
            let concerts = await fetch('data/concert/')
            concerts = await concerts.json()
            variableUpdateMethod(concerts)
        }
        load()
    }, []);

console.log(variableName[0].concert_name)
     */

    let param = useParams();
    let id = param.concert_id -1;
    console.log(id)
    return <>
        <div className="body">
            <h2>HEJ </h2>
            <p>Concert Name: {props[0].name}</p>
        </div>
    </>
}

export default Concert

{/*         <div className="title_info">
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
        </div> */}


        /* { variableName.map( (con)=> 
            <div> {con.concert_name}</div>
            )} */