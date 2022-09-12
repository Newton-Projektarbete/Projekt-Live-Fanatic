import { Link } from "react-router-dom";
function Concert() {
    return <>
        <div className="body">
            <div className="concert_content">
                <div className="title_info">

                    <div className="title_content">
                        <h1 className="concert-title-h1">Slam Poetry Bonga Freejazz Jam for Dummies</h1>
                        <button onclick="Toggle()" className="like_button"><i
                            className="material-symbols-outlined like-concert">favorite</i></button>
                    </div>

                    <div className="info">
                        <i className="fa-so fa-calendar-days"></i>
                        <p>Thursday 8 september 2022</p>
                        <i className="fa-so fa-clock"></i>
                        <p>7:30pm</p>
                        <p>|</p>
                        <i className="fa-so fa-location-dot"></i>
                        <p>Andy's garage</p>
                    </div>

                    <div className="line_up">
                        <p>Line-up:</p>
                        <p>Static plants</p>
                        <p>Purge!</p>
                        <p>Cacti pillow</p>
                    </div>

                    <div className="button_content">
                        <Link to="/buy-ticket">
                            <button className="buy_button default_button">Buy ticket</button>
                        </Link>
                        <Link to="/stream">
                            <button className="stream_button default_button">Stream</button>
                        </Link>
                    </div>

                    <div className="tickets_left">
                        <p>5 tickets left!</p>
                    </div>

                </div>

                <div className="right_content">
                    <div className="concert_image">
                    </div>
                </div>
            </div>
            
        </div>
    </>
}

export default Concert