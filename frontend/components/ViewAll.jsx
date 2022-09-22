import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import GlobalContext from "../src/GlobalContext";

function ViewAll() {
    const { favorites, user, allConcerts, concertSortedByRecently, concertSortedByPerformanceDate, today } = useContext(GlobalContext);

    let genreId = useParams().genre
    let sectionId = useParams().section
    let pageExist = false;
    let genreStatus = false;
    let sectionStatus = false;

    let sectionArr = ["recently", "soon", "today"]
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

    for (let i = 0; i < sectionArr.length; i++) {
        if (sectionId === sectionArr[i]) {
            pageExist = true;
            sectionStatus = true;
        }
        /*  else if (genreId === undefined) {
             pageExist = true;
             genreStatus = false;
         } */
    }


    const displayConcert = () => {
        console.log("displayconcerts: " + sectionId)
        switch (sectionId) {
            case "today":
                console.log("Showing: liveConcertsToday")
                return liveConcertsToday()
                break;
            case "recently":
                console.log("Showing: recentlyAdded")
                return recentlyAdded()
                break;
            case "soon":
                console.log("Showing: comingSoon")
                return comingSoon()
                break;
            default:
                console.log("Error")
        }
    }
    const displayHeader = () => {
        switch (sectionId) {
            case "today":
                return todayLink()
                break;
            case "recently":
                return recentlyLink()
                break;
            case "soon":
                return soonLink()
                break;
            default:
                console.log("Error")
        }
    }

    const todayLink = () => {
        if (genreStatus == true) {

            const word = genreId
            const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
            return <h1 className="main-view-all-h1" >All {capitalized} live today</h1>
        } else {
            return <h1 className="main-view-all-h1" >All live concerts today</h1>
        }
    }
    const liveConcertsToday = () => {
        console.log("liveConcertsToday run")
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
        if (genreStatus == true) {
            const word = genreId
            const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
            return <h1 className="main-view-all-h1" >All {capitalized} recently added </h1>
        } else {
            return <h1 className="main-view-all-h1" >All recently added</h1>
        }
    }
    const recentlyAdded = () => {
        console.log("recentlyAdded run")
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

        return concertArr
    }


    const soonLink = () => {
        if (genreStatus == true) {
            const word = genreId
            const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
            return <h1 className="main-view-all-h1" >All {capitalized} coming soon</h1>
        } else {
            return <h1 className="main-view-all-h1" >All concerts coming soon</h1>
        }
    }
    const comingSoon = () => {
        console.log("comingSoon run")
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

        return concertArr
    }

    return <><div className="body">

        <div className="main-view-all-content-page">

            <div className="main-view-all-content-header">
                {displayHeader()}
            </div>

            {/*             <div className="main-view-all-page-btns-box">

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

            </div> */}

            <div className="main-view-all-row">

                {displayConcert()}

            </div>

        </div>
    </div>
    </>
}

export default ViewAll