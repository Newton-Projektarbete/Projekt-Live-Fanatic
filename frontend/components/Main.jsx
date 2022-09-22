import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import GlobalContext from "../src/GlobalContext";

function Main() {
    const { favorites, user, allConcerts, concertSortedByRecently, concertSortedByPerformanceDate, today } = useContext(GlobalContext);

    const showMax = 6
    let genreId = useParams().genre
    let pageExist = false;
    let genreStatus = false;
    let genreArr = ["rock", "pop", "jazz", "blues", "hiphop"]

    for (let i = 0; i < genreArr.length; i++) {
        if (genreId === genreArr[i]) {
            pageExist = true;
            genreStatus = true;
        }
        else if (genreId === undefined) {
            pageExist = true;
            genreStatus = false;
        }
    }

    const liveTodayLink = () => {
        if (genreStatus == true){
            return <Link to={"/view-all/today/"+ genreId} className="view_all">View all</Link>
        } else {
            return<Link to="/view-all/today/" className="view_all">View all</Link>
        }
    }
    const liveConcertsToday = () => {
        let concertArr = []
        let count = 0
        if (genreStatus == true) {
            for (let i = 0; i < allConcerts.length; i++) {
                // find genre concerts
                if (allConcerts[i].genre === genreId && allConcerts[i].performance_date === today) {
                    concertArr[count] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            allConcerts[i].concert_image_url} alt="" />

                            {/* <div className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={() => addToFavorite(allConcerts[i].concert_id)} type="button">favorite</span>

                            </div> */}

                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + allConcerts[i].concert_id}>{allConcerts[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to={"/artist/" + allConcerts[i].artist_id}>{allConcerts[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                    count++
                }
            }
        } else {
            // find all concerts
            for (let i = 0; i < allConcerts.length; i++) {
                if (allConcerts[i].performance_date === today && genreId === undefined) {
                    concertArr[count] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            allConcerts[i].concert_image_url} alt="" />

                            {/*                            <div className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={() => addToFavorite(allConcerts[i].concert_id)} type="button">favorite</span>

                            </div> */}
                        </div>

                        <div className="child-div">

                            <div className="child-div-div">
                                <p>Title:</p>
                                <Link to={"/concert/" + allConcerts[i].concert_id}>{allConcerts[i].concert_name}</Link>
                            </div>
                            <div className="child-div-div">
                                <p>Artist:</p>
                                <Link to={"/artist/" + allConcerts[i].artist_id}>{allConcerts[i].artist_name}</Link>
                            </div>
                        </div>
                    </div>
                    count++
                }
            }
        }

        
        return concertArr
    }

    const recentlyLink = () => {
        if (genreStatus == true){
            return <Link to={"/view-all/recently/"+ genreId} className="view_all">View all</Link>
        } else {
            return<Link to="/view-all/recently/" className="view_all">View all</Link>
        }
    }
    const recentlyAdded = () => {
        let concertArr = []
        let count = 0
        if (genreStatus == true) {
            for (let i = 0; i < concertSortedByRecently.length; i++) {
                if (concertSortedByRecently[i].genre === genreId) {
                    concertArr[count] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByRecently[i].concert_image_url} alt="" />

                            {/* <div className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={() => addToFavorite(allConcerts[i].concert_id)} type="button">favorite</span>
                            </div> */}

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
                    count++
                }
            }
        } else {
            for (let i = 0; i < concertSortedByRecently.length; i++) {
                if (genreId === undefined) {
                    concertArr[count] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByRecently[i].concert_image_url} alt="" />

                            {/* <div className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={() => addToFavorite(allConcerts[i].concert_id)} type="button">favorite</span>
                            </div> */}

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
                    count++
                }
            }
        }

        const result = concertArr.slice(0, showMax)
        return result
    }

    const soonLink = () => {
        if (genreStatus == true){
            return <Link to={"/view-all/soon/"+ genreId} className="view_all">View all</Link>
        } else {
            return<Link to="/view-all/soon/" className="view_all">View all</Link>
        }
    }
    const comingSoon = () => {
        let concertArr = []
        let count = 0
        if (genreStatus == true) {
            for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
                if (concertSortedByPerformanceDate[i].genre === genreId && concertSortedByPerformanceDate[i].performance_date > today) {
                    concertArr[count] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByPerformanceDate[i].concert_image_url} alt="" />

                            {/* <div className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={() => addToFavorite(allConcerts[i].concert_id)} type="button">favorite</span>
                            </div> */}

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
                    count++
                }
            }
        } else {
            for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
                if (concertSortedByPerformanceDate[i].performance_date > today && genreId === undefined) {
                    concertArr[count] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByPerformanceDate[i].concert_image_url} alt="" />

                            {/* <div className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={() => addToFavorite(allConcerts[i].concert_id)} type="button">favorite</span>
                            </div> */}

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
                    count++
                }
            }
        }

        const result = concertArr.slice(0, showMax)
        return result
    }



    return <> {pageExist ? <>
        <div className="body">

            <div className="main-content-page">
                <div className="main-content-header">
                    <h1 className="main-h1" >Live concerts today </h1>
                    {liveTodayLink()}
                </div>
                <div className="row">
                    {liveConcertsToday()}
                </div>
            </div>

            <div className="main-content-page">
                <div className="main-content-header">
                    <h1 className="main-h1" >Recently added</h1>
                    {recentlyLink()}
                </div>
                <div className="row">
                    {recentlyAdded()}
                </div>
            </div>

            <div className="main-content-page">
                <div className="main-content-header">
                    <h1 className="main-h1" >Coming soon</h1>
                    {soonLink()}
                </div>
                <div className="row">
                    {comingSoon()}
                </div>
            </div>

        </div>

    </>
        : <>
            <div className="body">
                <h1 className="noMatch">Page not found</h1>
            </div>
        </>

    }

    </>
}

export default Main


