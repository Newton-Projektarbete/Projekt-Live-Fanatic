import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Main() {
    useEffect(() => {
        async function load() {
            let concerts = await fetch('data/concert/')
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

    let concertArr = []

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;

    const liveConcertsToday = () => {
        for (let i = 0; i < variableName.length; i++) {
            if(today === variableName[i].performance_date){
                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    variableName[i].concert_image_url} alt="" />

                    <div to="" onclick="Toggle()" className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined">favorite</span>
                    </div>
                </div>

                <div className="child-div">

                    <div className="child-div-div">
                        <p>Title:</p>
                        <Link to="">{variableName[i].concert_name}</Link>
                    </div>
                    <div className="child-div-div">
                        <p>Artist:</p>
                        <Link to="">{variableName[i].artist_name}</Link>
                    </div>
                </div>
            </div>
            }
        }

        return concertArr
    }

    const allConcerts = () => {
        for (let i = 0; i < variableName.length; i++) {
                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    variableName[i].concert_image_url} alt="" />

                    <div to="" onclick="Toggle()" className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined">favorite</span>
                    </div>
                </div>

                <div className="child-div">

                    <div className="child-div-div">
                        <p>Title:</p>
                        <Link to="">{variableName[i].concert_name}</Link>
                    </div>
                    <div className="child-div-div">
                        <p>Artist:</p>
                        <Link to="">{variableName[i].artist_name}</Link>
                    </div>
                </div>
            </div>
        }

        return concertArr
    }

    const recentlyAdded = () => {
        for (let i = 0; i < variableName.length; i++) {

            if( variableName[i].added_date ){
                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    variableName[i].concert_image_url} alt="" />

                    <div to="" onclick="Toggle()" className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined">favorite</span>
                    </div>
                </div>

                <div className="child-div">

                    <div className="child-div-div">
                        <p>Title:</p>
                        <Link to={variableName[i].url + "/"+ variableName[i].concert_id}>{variableName[i].concert_name}</Link>
                    </div>
                    <div className="child-div-div">
                        <p>Artist:</p>
                        <Link to="">{variableName[i].artist_name}</Link>
                    </div>
                </div>
            </div>
            } 
            console.log(concertArr[i])
        }
        
        return concertArr.sort(variableName.added_date)
    }

    return <>
        <div className="body">

            <div className="main-content-page">
                <div className="main-content-header">
                    <h1 className="main-h1" >Live concerts today </h1>
                    <Link to="/main-view-all" className="view_all">View all</Link>
                </div>
                <div className="row">
                    {recentlyAdded()}

                    {/* <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[0].concert_image_url} alt="" />

                            <div to="" onclick="Toggle()" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>
                        <div className="child-div">
                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to="">{variableName[0].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to="">{variableName[0].artist_name}</Link>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    </>
}

export default Main


{/* <em>{variableName.map(concert =>
                                <Link to="" key={concert.concert_id}>
                                    {concert.concert_name}
                                </Link>)}</em>
                            <em>{variableName.map(concert =>
                                <Link to="" key={concert.concert_id}>
                                    {concert.artist_name}
                                </Link>)}</em> */}