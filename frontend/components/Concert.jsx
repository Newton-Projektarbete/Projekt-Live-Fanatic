import { Link, renderMatches, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'


function Concert(props) {
    let params = useParams()
    let id = params.concert_id - 1;
/*     let params = useParams()
    let id = params.concert_id - 1;
    const concert = (id) =>{
        const [allConcerts, setAllConcerts] = useState([
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
    
        useEffect(() => {
            async function load() {
                let concerts = await fetch('data/concert/')
                concerts = await concerts.json()
                variableUpdateMethod(concerts[id])
            }
            load()
        }, [id]);

        return allConcerts
    } */
    
/*     let param = useParams();
    let id = param.concert_id - 1;
    const [allConcerts, setAllConcerts] = useState([]) 

    useEffect(()=>{
        setAllConcerts(props)
        console.log('useeffect in concert')
    }, []) */


    let oneConcert = localStorage.getItem('allConcerts')

/*     useEffect(() => {
        getApiData();
    }, [])


    const getApiData = async () => {
        const response = await fetch("data/concert").then((response) => {
            return response.json()}).then(data => {
                setAllConcerts(data)
            })
        console.log('Concert Fetching data did run')
    }*/

/*     let tempId = 0
    const [allConcerts, setAllConcerts] = useState([
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
    const getConcerts = async (tempId) => {
        const res = await fetch("data/concert").then((res) => {
            return res.json()
        }).then(data => {
            setAllConcerts(data[tempId])
        })
        return allConcerts
    }
    useEffect(()=> {
        getConcerts()
    },[]) */
    

    return <>
        <div className="body">
            <h2>Concert </h2>
            {/* <p>Concert Name: {allConcerts.concert_name}</p> */}
            {/* <p>Concert Name: {concert.concert_name}</p> */}
            {/* <p>Concert Name: {allConcerts && allConcerts[0].concert_name}</p> */}
            {/* <p>Concert Name: {allConcerts && allConcerts[0].concert_name}</p> */}
            {/* <p>Concert Name: {concertArr[0].concert_name}</p> */}
            <p>Concert Name: {props[id].name}</p>
            {/*             <p>Concert Name: {localStorage.getItem('allConcerts')}</p>
            <p>Concert Name: {oneConcert}</p> */}


{/*             <div>
                {allConcerts &&
                    allConcerts.map((con) => (
                        <div className="item-container">
                            Id:{con.concert_id} <div className="title">Title:{con.concert_name}</div>
                        </div>
                    ))}
            </div> */}

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

