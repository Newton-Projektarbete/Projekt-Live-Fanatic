import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function MainViewAllComingSoon(){

        useEffect(() => {
            async function loadComing() {
                let concerts = await fetch('data/concert/coming-soon')
                concerts = await concerts.json()
                setConcertSortedByPerformanceDate(concerts)
    
            }
            loadComing()
        }, [])
        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
    
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
    
    
            const ComingSoonConcerts = () => {
                let concertArr = []
    
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
                                    <Link to={"/artist/" + concertSortedByPerformanceDate[i].artist_id}>{concertSortedByPerformanceDate[i].artist_name}</Link>
                                </div>
                            </div>
                        </div>
                    }
                }
                return concertArr
            }
    
    
        return <><div className="body">
            <div className="main-view-all-content-page">
    
                <div className="main-view-all-content-header">
                    <h1 className="main-view-all-h1" >Concerts Coming Soon:</h1>
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
    
                    <div className="row">
                        {ComingSoonConcerts()}
                    </div>
    
                </div> 
    
            </div>
        </div>
        </>
    }
    

export default MainViewAllComingSoon