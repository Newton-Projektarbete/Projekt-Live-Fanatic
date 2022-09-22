import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import GlobalContext from "../src/GlobalContext";

function Main() {
    const [variableName, variableUpdateMethod] = useState([])
    const [concertSortedByRecently, setConcertSortedByRecently] = useState([])
    const [concertSortedByPerformanceDate, setConcertSortedByPerformanceDate] = useState([])
    
    const {favorites, user} = useContext(GlobalContext);
    
    let genreId = useParams().genre
    let pageExist = false;
    let genreStatus = false

    let genreArr = ["rock", "pop", "jazz", "blues", "hiphop" ]

    for(let i = 0; i < genreArr.length; i++) {
        if (genreId === genreArr[i]) {
            pageExist = true;
            genreStatus = true;
        }
        else if (genreId === undefined) {
            pageExist = true;
            genreStatus = false;
        }
    }

    let today = new Date();
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


/*     const handleChange = (e)=>{
        setFavorite (prev=>({...prev, [e.target.name]:e.target.value}))
      }
 */

    const addToFavorite = async (con) => {
        console.log("con:" + con)
        fetch('/data/favorite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: user.user_id,
                concert_id: con
            })
        }).then( (res) => {
            if(res.ok == true){
              alert("Concert added to favorites!")
            } else {
                alert("Concert already in favorites!")
            }
          })
    }

    

    const liveConcertsToday = () => {
        let concertArr = []

        if (genreStatus == true) {
            for (let i = 0; i < variableName.length; i++) {
                // find genre concerts
                if (variableName[i].genre === genreId && variableName[i].performance_date === today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[i].concert_image_url} alt="" />

                            <div className="material-symbols-outlined main-like-btn">
                        <span className="like-btn-1 material-symbols-outlined" onClick={()=>addToFavorite(variableName[i].concert_id)} type="button">favorite</span>
                       
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
                if (variableName[i].performance_date === today && genreId === undefined) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            variableName[i].concert_image_url} alt="" />

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={()=>addToFavorite(variableName[i].concert_id)}>favorite</span>
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
                if (genreId === undefined) {
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
        }


        return concertArr
    }

    const comingSoon = () => {
        let concertArr = []

        if (genreStatus == true) {
            for (let i = 0; i < concertSortedByPerformanceDate.length; i++) {
                if (concertSortedByPerformanceDate[i].genre === genreId && concertSortedByPerformanceDate[i].performance_date > today) {
                    concertArr[i] = <div className="main-content-box">
                        <div className="main-img-box"> <img className="main-img" src={
                            concertSortedByPerformanceDate[i].concert_image_url} alt="" />
                            

                            <div to="" className="material-symbols-outlined main-like-btn">
                                <span className="like-btn-1 material-symbols-outlined" onClick={()=>addToFavorite(variableName[i].concert_id)}>favorite</span>
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
                if (concertSortedByPerformanceDate[i].performance_date > today && genreId === undefined) {
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

    return <> {pageExist ? <>
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
        : <>
            <div className="body">
                <h1 className="noMatch">Page not found</h1>
            </div>
        </>

    }

    </>
}

export default Main


