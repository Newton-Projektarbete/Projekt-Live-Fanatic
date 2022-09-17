import { Link } from "react-router-dom";

function Stream(){
    return <>
    <div className="body">
    <div className="stream">
        
        <div className="stream-video">
            <h1 className="stream-h1">Concert Live</h1>

            <video className="videoPlayer" width="50%" controls muted="muted" >
                <source src="/video/Chris-Do.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="stream-content">
            <div>
                <h2>Going Live 2022/09/13</h2>
                <h2>Malmö City</h2>
                <h2>artists:</h2>
                <ul className="stream-artists">
                    <a href="#">Simon M</a>
                    <a href="#">Sanjin</a>
                    <a href="#">Lukas</a>
                    <a href="#">Daniel</a>
                    <a href="#">Barkat</a>
                    <a href="#">Jonatan</a>
                    
                </ul>
            </div>

            <div>
                <div className="stream-link-pos">
                    <Link className="stream-link" 
                    to="/" 
                    ></Link>
                    <button className="stream-copy-btn" onclick={copyLink}>Share Link</button>      
                </div>

                <div className="stream-invited">
                    <ol>example joined user</ol>
                    <ol>example joined user</ol>
                    <ol>example joined user</ol>
                    <ol>example joined user</ol>
                    <ol>example joined user</ol>
                    <ol>example joined user</ol>
                    <ol hidden>you cant see this user</ol>
                </div>
            </div>

        </div>
    </div>
    </div>
    </>
    }
    function copyLink() {
        var evt = document.getElementsByClassName("stream-link").getAttribute('href')
        navigator.clipboard.writeText(evt);
    }

    export default Stream
