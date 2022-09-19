import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import GlobalContext from "../src/GlobalContext";

function Main() {

    let genreId = useParams().genre
    console.log(genreId);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;


    useEffect(() => {
        async function load() {
            let concerts = await fetch('data/concert/')
            concerts = await concerts.json()
            console.log(concerts)
            variableUpdateMethod(concerts)
        }
        async function loadRecently() {
            let concerts = await fetch('data/concert/recently-added')
            concerts = await concerts.json()
            console.log(concerts)
            setConcertSortedByRecently(concerts)
        }
        async function loadComing() {
            let concerts = await fetch('data/concert/coming-soon')
            concerts = await concerts.json()
            console.log(concerts)
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
        /* 
            if genre = true => concerts with genre
            else show all concerts
        */

        let genreStatus = false
        for (let i = 0; i < variableName.length; i++) {
            if (genreId == variableName[i].genre) {
                // return concerts with genre
                genreStatus = true
            }
        }
        if (genreStatus == true) {
            for (let i = 0; i < variableName.length; i++) {
                // find genre concerts
                if (variableName[i].genre === genreId && variableName[i].performance_date === today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + variableName[i].concert_id}>{variableName[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to={"/artist/" + variableName[i].artist_id}>{variableName[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                }
            }
        } else {
            // find all concerts
            for (let i = 0; i < variableName.length; i++) {
                if (variableName[i].performance_date === today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + variableName[i].concert_id}>{variableName[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to={"/artist/" + variableName[i].artist_id}>{variableName[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                }
            }
        }

        return concertArr
    }

    const allConcerts = () => {
        let concertArr = []

        let genreStatus = false
        for (let i = 0; i < variableName.length; i++) {
            if (genreId == variableName[i].genre) {
                // return concerts with genre
                genreStatus = true
            }
        }
        if (genreStatus == true) {
            for (let i = 0; i < variableName.length; i++) {
                // find genre concerts
                if (variableName[i].genre === genreId && variableName[i].performance_date === today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + variableName[i].concert_id}>{variableName[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to="">{variableName[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                }
            }
        } else {
            // find all concerts
            for (let i = 0; i < variableName.length; i++) {
                // find All concerts
                if (variableName[i].performance_date === today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + variableName[i].concert_id}>{variableName[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to="">{variableName[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                }
            }
        }



        for (let i = 0; i < variableName.length; i++) {
            concertArr[i] = <div className="main-content-box">
                <div className="main-img-box"> <img className="main-img" src={
                    variableName[i].concert_image_url} alt="" />

                    <div to="" className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined">favorite</span>
                    </div>
                </div>

                <div className="child-div">

                    <div className="child-div-div">
                        <p>Title:</p>
                        <Link to={"/concert/" + variableName[i].concert_id}>{variableName[i].concert_name}</Link>
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

        let genreStatus = false
        for (let i = 0; i < concertSortedByRecently.length; i++) {
            if (genreId == concertSortedByRecently[i].genre) {
                genreStatus = true
            }
        }
        if (genreStatus == true) {
            for (let i = 0; i < concertSortedByRecently.length; i++) {
                if (concertSortedByRecently[i].genre === genreId) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByRecently[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined">favorite</span>
                            </div>
                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + concertSortedByRecently[i].concert_id}>{concertSortedByRecently[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to={"/artist/" + concertSortedByRecently[i].artist_id}>{concertSortedByRecently[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                }
            }
        } else {
            for (let i = 0; i < concertSortedByRecently.length; i++) {
                concertArr[i] = <div className="main-content-box">
                    <div className="main-img-box"> <img className="main-img" src={
                        concertSortedByRecently[i].concert_image_url} alt="" />

                        <div to="" className="material-symbols-outlined main-like-btn">
                            <span className="like-btn-1 material-symbols-outlined">favorite</span>
                        </div>
                    </div>

                    <div className="child-div">

                        <div className="child-div-div">
                            <p>Title:</p>
                            <Link to={"/concert/" + concertSortedByRecently[i].concert_id}>{concertSortedByRecently[i].concert_name}</Link>
                        </div>
                        <div className="child-div-div">
                            <p>Artist:</p>
                            <Link to={"/artist/" + concertSortedByRecently[i].artist_id}>{concertSortedByRecently[i].artist_name}</Link>
                        </div>
                    </div>
                </div>

            }
        }


        return concertArr
    }

    const comingSoon = () => {
        let concertArr = []
        let genreStatus = false
        for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
            if (genreId == concertSortedByPerformanceDate[i].genre) {
                genreStatus = true
            }
        }
        if (genreStatus == true) {
            for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
                if (concertSortedByPerformanceDate[i].genre === genreId && concertSortedByPerformanceDate[i].performance_date > today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByPerformanceDate[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
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
        } else {
            for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
                if (concertSortedByPerformanceDate[i].performance_date > today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByPerformanceDate[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
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
        }



        return concertArr
    }





    return <>
        <div className="body">

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

        </div>
    </>
}

export default Main


