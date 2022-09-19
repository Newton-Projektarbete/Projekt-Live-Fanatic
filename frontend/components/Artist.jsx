import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function Artist() {
    let id = useParams().artist_id;
    const { allArtists } = useContext(GlobalContext);

    let artist = []
    allArtists.map(a => {
        if (a.artist_id == 1) {
            artist = a
            return artist
        }
    })

    console.log(artist)
    return <>
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

                            <div className="artist-result-content">
                                <Link to="">
                                    <img className="artist-img" src="../images/franaddressescrowd500.jpg" alt="" />
                                </Link>
                                <div className="artist-concert_box">
                                    <div className="artist-result-info">
                                        <Link to="">Basement lemonade gathering</Link>
                                        <p className="artist-p">2022.12.12</p>
                                        <p className="artist-p">John's mom's basement</p>
                                    </div>
                                    <div className="artist-button_content">
                                        <button className="artist-buy_button">Buy ticket</button>
                                        <div className="artist-like_button_icon"><span className="material-symbols-outlined like_button">favorite</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="artist-right_content">
                        <img className="artist_image" src={artist.artist_image_url} alt="" />
                        <div className="artist-sample_content">
                            <h2>Preview samples:</h2>
                            <Link to="">
                                <p className="artist-sample_p">Sample 1</p>
                            </Link>
                            <Link to="">
                                <p className="artist-sample_p">Sample 2</p>
                            </Link>
                            <Link to="">
                                <p className="artist-sample_p">Sample 3</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Artist