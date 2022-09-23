import { Link, useParams} from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";
import Youtube from "react-youtube"
// https://www.npmjs.com/package/react-youtube

function Stream() {
    let id = useParams().concert_id;
    const { allConcerts, allArtists } = useContext(GlobalContext);

    let concert = []
    let artist = []
    let pageExist = false

    allConcerts.map(a => {
        if (a.concert_id == id) {
            concert = a
            pageExist = true
            return concert
        }
    })
    allArtists.map(a => {
        if (a.artist_id == concert.artist_id) {
            artist = a
            return concert
        }
    })

    const loadArtists = () => {
        let load = []
        for (let i = 0; i < 1; i++) { // add artist[i].length when we have more artists
            load[i] = <Link to={"/" + "artist/"+ artist.artist_id}>{artist.artist_name}</Link>
        }
        return load
    }

//react-youtube only needs youtube id, ex: 0aUnSjIP7bQ
    return <>
        <div className="body">
            <div className="stream">

                <div className="stream-video">
                    <h1 className="stream-h1">{concert.concert_name}</h1>
                     <Youtube videoId={concert.video_url} />
                    {/*<iframe width="800" height="400"
                        src={"https://www.youtube.com/embed/TXGbhniTBrU"}>
                         src={"https://www.youtube.com/embed/" + concert.video_url}> 
                    </iframe>*/}
                </div>
                <div className="stream-content">
                    <div className="stream-info">
                        <h2>Going live: {concert.performance_date}</h2>
                        <p><b>Artist:</b> {loadArtists()}</p>
                        <p><b>Location:</b> {concert.location}</p>
                    </div>

                    <div>
                        <div className="stream-link-pos">
                            <h4 className="noMargin">Share link with a friend: </h4>

                            <button className="stream-copy-btn" onClick={() => {navigator.clipboard.writeText(window.location.href)}} >Copy Link</button>
                        </div>

                        {<div className="stream-invited">
                            <ol hidden>example joined user</ol>
                            <ol hidden>example joined user</ol>
                            <ol hidden>example joined user</ol>
                            <ol hidden>you cant see this user</ol>
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Stream
