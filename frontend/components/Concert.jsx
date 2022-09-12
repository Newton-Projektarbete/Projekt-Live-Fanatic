import { Link } from "react-router-dom";
function Concert() {
    return <>
<div className="body">
    <div className="concert_content">
        <div className="title_info">

            <div className="title_content">
                <h1 className="concert-title-h1">Slam Poetry Bonga Free Jazz Jam for Dummies</h1>
                <button onclick="Toggle()" className="like_button"><i
                        className="material-symbols-outlined like-concert">favorite</i></button>
            </div>

            <div className="info">
            <span class="material-symbols-outlined">
                    calendar_month
            </span>
                <p>Thursday 8 september 2022</p>
                <span class="material-symbols-outlined">
                    schedule
            </span>
                <p>7:30pm</p>
                <p>|</p>
                <span class="material-symbols-outlined">
                    location_on
            </span>
                <p>Andy's garage</p>
            </div>

            <div className="line_up">
                <p>Line-up:</p>
                <a>Static plants</a>
                <a>Purge!</a>
                <a>Cacti pillow</a>
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
                <p>5 tickets remaining!</p>
            </div>

        </div>
    </div>
</div>

    </>
}

export default Concert