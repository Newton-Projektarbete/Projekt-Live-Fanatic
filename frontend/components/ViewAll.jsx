import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import GlobalContext from "../src/GlobalContext";

function ViewAll() {
    const { favorites, user, allConcerts, concertSortedByRecently, concertSortedByPerformanceDate, today } = useContext(GlobalContext);

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

        const result = concertArr.slice(0, showMax)
        return result
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

    return <><div className="body">

        <div className="main-view-all-content-page">

            <div className="main-view-all-content-header">
                <h1 className="main-view-all-h1" >All live concerts:</h1>
            </div>

            <div className="main-view-all-page-btns-box">

                <div href="#" className="main-view-all-icon-box">
                    <span className="material-symbols-outlined main-view-all-arrow-icon">
                        first_page
                    </span>
                </div>
                <div href="#" className="main-view-all-icon-box">
                    <span className="material-symbols-outlined main-view-all-arrow-icon">
                        chevron_left
                    </span>
                </div>

                <div className="main-view-all-page-btn main-view-all-icon-box">
                    1
                </div>
                <div className="main-view-all-page-btn main-view-all-icon-box">
                    2
                </div>
                <div className="main-view-all-page-btn main-view-all-icon-box">
                    3
                </div>
                <div href="#" className="main-view-all-icon-box">
                    <span className="material-symbols-outlined main-view-all-arrow-icon">
                        chevron_right
                    </span>
                </div>
                <div href="#" className="main-view-all-icon-box">
                    <span className="material-symbols-outlined main-view-all-arrow-icon">
                        last_page
                    </span>
                </div>

            </div>

            <div className="main-view-all-row">

                <div className="main-view-all-content-box">

                    <div className="main-view-all-img-box"> <img className="main-view-all-img" src="../images/playing-in-a-band-1020x498.jpg" alt=""/>
                        <div className="material-symbols-outlined main-view-all-like-btn">
                            <span className="material-symbols-outlined main-view-all-like-icon">favorite</span>
                        </div>
                    </div>

                    <div className="main-view-all-child-div">
                        <Link to="">Title</Link>
                        <Link to="">Artist</Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
    </>
}

export default ViewAll