import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function Main() {

 /*    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    
    useEffect(() => {
        async function load() {
            let concerts = await fetch('data/concert/')
            concerts = await concerts.json()
            variableUpdateMethod(concerts)
        }
        async function loadRecently() {
            let concerts = await fetch('data/concert/recently-added')
            concerts = await concerts.json()
            setConcertSortedByRecently(concerts)
        }
        async function loadComing() {
            let concerts = await fetch('data/concert/coming-soon')
            concerts = await concerts.json()
            setConcertSortedByPerformanceDate(concerts)

        }
        load()
        loadRecently()
        loadComing()
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

    const [concertSortedByRecently, setConcertSortedByRecently] = useState([
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

    const [concertSortedByPerformanceDate, setConcertSortedByPerformanceDate] = useState([
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


    const liveConcertsToday = () => {
        let concertArr = []
        for (let i = 0; i < variableName.length; i++) {
            if(today === variableName[i].performance_date){
                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    variableName[i].concert_image_url} alt="" />

                    <div to="" onClick="Toggle()" className="material-symbols-outlined main-like-btn">
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
        let concertArr = []
        for (let i = 0; i < variableName.length; i++) {
                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    variableName[i].concert_image_url} alt="" />

                    <div  className="material-symbols-outlined main-like-btn">
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
        let concertArr = []
        for (let i = 0; i < concertSortedByRecently.length; i++) {

                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    concertSortedByRecently[i].concert_image_url} alt="" />

                    <div  className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined">favorite</span>
                    </div>
                </div>

                <div className="child-div">

                    <div className="child-div-div">
                        <p>Title:</p>
                        <Link to="">{concertSortedByRecently[i].concert_name}</Link>
                    </div>
                    <div className="child-div-div">
                        <p>Artist:</p>
                        <Link to="">{concertSortedByRecently[i].artist_name}</Link>
                    </div>
                </div>
            </div>
        }

        return concertArr
    }

    const comingSoon = () => {
        let concertArr = []
        for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
            if(today < concertSortedByPerformanceDate[i].performance_date){
                concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    concertSortedByPerformanceDate[i].concert_image_url} alt="" />

                    <div className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined">favorite</span>
                    </div>
                </div>

                <div className="child-div">

                    <div className="child-div-div">
                        <p>Title:</p>
                        <Link to={"/concert/" + concertSortedByPerformanceDate[i].concert_id}>{concertSortedByPerformanceDate[i].concert_name}</Link>
                    </div>
                    <div className="child-div-div">
                        <p>Artist:</p>
                        <Link to="">{concertSortedByPerformanceDate[i].artist_name}</Link>
                    </div>
                </div>
            </div>
            }
        }

        return concertArr
    } */

    
    return <>
{/*         <div className="body">

            <div className="main-content-page">
                <div className="main-content-header">
                    <h1 className="main-h1" >Live concerts today </h1>
                    <Link to="/main-view-all" className="view_all">View all</Link>
                </div>
                <div className="row">
                    {liveConcertsToday()}
                </div>
            </div>

            <div className="main-content-page">
            <div className="main-content-header">
                <h1 className="main-h1" >Recently added</h1>
                <Link to="/main-view-all" className="view_all">View all</Link>
            </div>
            <div className="row">
            {recentlyAdded()}
            </div>
            </div>

            <div className="main-content-page">
            <div className="main-content-header">
                <h1 className="main-h1" >Coming soon</h1>
                <Link to="/main-view-all" className="view_all">View all</Link>
            </div>
            <div className="row">
                {comingSoon()}
            </div>
            </div>
            
        </div> */}
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