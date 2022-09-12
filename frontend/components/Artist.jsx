import { Link } from "react-router-dom";
function Artist() {
    return <>
        <div className="body">
            <div className="artist_parent">
                <div className="artist_content">
                    <div className="title_info box">
                    <div className="title_content">
                        <h1>Cacti Pillow</h1>
                    </div>
                    <div className="info">
                        <p>Biography...</p>
                    </div>
                    <div className="artist-result-box">
                        <h2>Upcoming shows:</h2>

                        <div className="artist-result-content">
                            <Link to="">
                                <img className="artist-img" src="../images/houseconcert.jpg" alt=""/>
                            </Link>
                            <div className="concert_box">
                                <div className="artist-result-info">
                                    <Link to="">Basement lemonade gathering</Link>
                                    <p className="artist-p">2022.12.12</p>
                                    <p className="artist-p">John's mom's basement</p>
                                </div>
                                <div className="button_content">
                                    <button className="buy_button">Buy ticket</button>
                                        <div className="like_button_icon"><span className="material-symbols-outlined like_button">favorite</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="right_content">
                    <img className="artist_image" src="../images/franaddressescrowd500.jpg" alt=""/>
                        <div className="sample_content">
                            <h2>Preview samples:</h2>
                            <Link to="">
                                <p className="sample_p">Sample 1</p>
                            </Link>
                            <Link to="">
                                <p className="sample_p">Sample 2</p>
                            </Link>
                            <Link to="">
                                <p className="sample_p">Sample 3</p>
                            </Link>
                        </div>

                </div>
                </div>
            </div>
        </div>
    </>
}

export default Artist