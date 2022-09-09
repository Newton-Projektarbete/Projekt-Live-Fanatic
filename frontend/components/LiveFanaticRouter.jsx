import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AudioTest from "./AudioTest";
import VideoTest from "./VideoTest";
import MainPage from "./MainPage";
import VideoAudioTest from "./VideoAudioTest";


function LiveFanaticRouter(){
    return <Router>
        <header>
            {/* <Link to="/" id="exampleID"><h1>Main header</h1></Link> */}
             <h1 id="exampleID">Main header</h1>
        </header>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/audio-test" element={<AudioTest />} />
            <Route path="/video-test" element={<VideoTest />} />
            <Route path="/video-audio-test" element={<VideoAudioTest />} />
        </Routes>
        <footer>
{/*             <nav>
                <h1>CopyRight example</h1>
                <Link to="/">Main page</Link>
            </nav> */}
        </footer>
    </Router>
}

export default LiveFanaticRouter