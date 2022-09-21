import { Link, useParams, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import GlobalContext from "../src/GlobalContext";

function Artist() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;

    let id = useParams().artist_id;
    const { allArtists, allConcerts } = useContext(GlobalContext);

    let artist = []
    let pageExist = false
    allArtists.map(a => {
        if (a.artist_id == id) {
            artist = a
            pageExist = true
            return artist
        }
    })

    const upcomingConcerts = () => {
        let concerts = []
        for (let i = 0; i < allConcerts.length; i++) {
            if (allConcerts[i].artist_id == artist.artist_id && allConcerts[i].performance_date >= today) {
                concerts[i] = <div className="artist-result-content">
                    <Link to="">
                        <img className="artist-img" src={allConcerts[i].concert_image_url} alt="" />
                    </Link>
                    <div className="artist-concert_box">
                        <div className="artist-result-info">
                            <Link to={"/concert/" + allConcerts[i].concert_id}>{allConcerts[i].concert_name}</Link>
                            <p className="artist-p">{allConcerts[i].performance_date}</p>
                            <p className="artist-p">{allConcerts[i].location}</p>
                        </div>
                        <div className="artist-button_content">
                            <button className="artist-buy_button">Buy ticket</button>
                            <div className="artist-like_button_icon"><span className="material-symbols-outlined like_button">favorite</span></div>
                        </div>
                    </div>
                </div>
            }
        }

        return concerts

    }

    const loadAudio = () => {
        let audioSamples = []
        let count = 1
        for (let i = 0; i < 1; i++) { // artist.length edit when we have more then one audio_url per artist
            if(artist.artist_id == id){
                audioSamples[i] = <div>
            <p>Sample {count}</p>
            <audio controls >
            <source src={artist.audio_url} type="audio/mpeg" />
            <source src={artist.audio_url} type="audio/ogg" />
            <source src={artist.audio_url} type="audio/wav" />
            </audio>
            </div>
            count++  
            console.log(artist.audio_url)
            }    
        }
        return audioSamples
    }

    return <> {pageExist ? <>
        <div className="body">
            <div className="artist_parent">
                <div className="artist_content">
                    <div className="artist-title_info box">
                        <div className="artist-title_content">
                            <h1>{artist.artist_name}</h1>
                        </div>
                        <div className="artist-info">
                            <p>{artist.biography}</p>
                        </div>
                        <div className="artist-result-box">
                            <h2>Upcoming shows:</h2>
                            {upcomingConcerts()}
                        </div>
                    </div>

                    <div className="artist-right_content">
                        <img className="artist_image" src={artist.artist_image_url} alt="" />
                        <div className="artist-sample_content">
                            <h2>Preview samples:</h2>
                            {loadAudio()}                            
                        </div>

                    </div>
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

export default Artist