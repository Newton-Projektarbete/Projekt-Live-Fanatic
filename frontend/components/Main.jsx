import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Main() {
    useEffect(() => {
        async function load() {
            let concerts = await fetch('data/concert/1')
            concerts = await concerts.json()
            console.log(concerts)
            variableUpdateMethod(concerts)
        }
        load()
    }, [])

    const [variableName, variableUpdateMethod] = useState([
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

    return <>
        <div className="body">

            <div className="main-content-page">
                <div className="main-content-header">
                    <h1 className="main-h1" >Live concerts</h1>
                    <Link to="/main-view-all" className="view_all">View all</Link>
                </div>
                <div className="row">
                    <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[0].concert_image_url} alt="" />
                            <div to="" onclick="Toggle()" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>

                        <div className="child-div">

                        <Link to="">{variableName[0].concert_name}</Link>
                        <Link to="">{variableName[0].artist_name}</Link>
                            {/* <em>{variableName.map(concert =>
                                <Link to="" key={concert.concert_id}>
                                    {concert.concert_name}
                                </Link>)}</em>
                            <em>{variableName.map(concert =>
                                <Link to="" key={concert.concert_id}>
                                    {concert.artist_name}
                                </Link>)}</em> */}
                        </div>
                    </div>

                </div>
            </div>



        </div>
    </>
}

export default Main