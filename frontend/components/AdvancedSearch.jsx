import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../src/GlobalContext";

function AdvancedSearch() {
    const { allArtists } = useContext(GlobalContext);

    const searchResult = () => {
        let artist = []
        let searchterm = localStorage.getItem('searchterm')
        if (searchterm != null) {
            let x = 0
            for (let i = 0; i < allArtists.length; i++) {
                if (allArtists[i].artist_name.toLowerCase().includes(searchterm.toLowerCase())) {
                    artist[x] = <div className="adv-src-result-content">
                        <Link to={"/artist/" + allArtists[i].artist_id}>
                            <div >
                                <img className="adv-src-img" src={allArtists[i].artist_image_url} />
                            </div>
                        </Link>
                        <div className="adv-src-result-info">
                            <Link to={"/artist/" + allArtists[i].artist_id}>{allArtists[i].artist_name}</Link>
                            {/* <p className="adv-src-p">2022.12.12</p>
                            <p className="adv-src-p">Stockholm, Globen</p> */}
                        </div>
                    </div>
                    x++
                }
            }

            if(x == 0){
                artist  = <div className="adv-src-no-result">
                            <h1>No Result</h1>
                        </div>
            }
        } 
        return artist
    }

    return <><div className="body">

        <div className="advanced-search">
            <div className="adv-src-content">
                <div className="filter-by-artist-parent">
                    {/* <h2 className="adv-src-h2">Filter by artist</h2> */}
                    <div className="adv-src-filter-by-artist-box">
                       {/*  <input type="text" className="adv-src-filter-by-artist-search" /> */}
{/*                         <span className="material-symbols-outlined adv-src-filter-by-artist-search-icon">
                            search
                        </span> */}
                    </div>
  {/*                   <div className="adv-src-filter-all">
                        <button className="adv-src-btn">All</button>
                    </div> */}
                </div>

                <div className="filter-by-date">
               {/*      <h2 className="adv-src-h2">Filter by date</h2>
                    <div>
                        <button className="adv-src-btn">All</button>
                        <button className="adv-src-btn">Tonight</button>
                        <button className="adv-src-btn">This weekend</button>
                        <button className="adv-src-btn">This month</button>
                        <button className="adv-src-btn">2022</button>
                        <button className="adv-src-btn">2023</button>

                    </div> */}
                    {/* <div className="adv-src-date-from-to">
                        <div>
                            <h3 className="adv-src-date-from-to-h3">Date From</h3>
                            <input type="date" name="" className="adv-src-filter-by-date" />
                        </div>
                        <div>
                            <h3 className="adv-src-date-from-to-h3">Date To</h3>
                            <input type="date" name="" className="adv-src-filter-by-date" />
                        </div>
                    </div> */}
                </div>
{/*                 <div className="filter-by-genre">
                    <h2 className="adv-src-h2">Filter by genre</h2>
                    <button className="adv-src-btn">All</button>
                    <button className="adv-src-btn">Rock</button>
                    <button className="adv-src-btn">Pop</button>
                    <button className="adv-src-btn">R&B</button>
                    <button className="adv-src-btn">Hip-Hop</button>
                    <button className="adv-src-btn">Indie</button>
                    <button className="adv-src-btn">Electronic</button>
                    <button className="adv-src-btn">Country</button>
                    <button className="adv-src-btn">Classical</button>
                    <button className="adv-src-btn">Metal</button>
                    <button className="adv-src-btn">Latin</button>
                    <button className="adv-src-btn">Folk & Blues</button>
                    <button className="adv-src-btn">Jazz</button>
                    <button className="adv-src-btn">Funk & Soul</button>
                    <button className="adv-src-btn">Reggae</button>
                </div>
 */}
            </div>

            {/* <div className="adv-src-page-btn-box">
                <Link to="" className="adv-src-icon-box">
                    <span className="material-symbols-outlined adv-src-arrow-icons">first_page</span>
                </Link>
                <Link to="" className="adv-src-icon-box">
                    <span className="material-symbols-outlined adv-src-arrow-icons">chevron_left</span>
                </Link>
                <button className="adv-src-page-btn">1</button>
                <button className="adv-src-page-btn">2</button>
                <button className="adv-src-page-btn">3</button>
                <Link to="" className="adv-src-icon-box">
                    <span className="material-symbols-outlined adv-src-arrow-icons">chevron_right</span>
                </Link>
                <Link to="" className="adv-src-icon-box">
                    <span className="material-symbols-outlined adv-src-arrow-icons">last_page</span>
                </Link>
            </div> */}

                <h2>Result</h2>
            <div className="adv-src-result-box">
                {searchResult()}
            </div>
        </div>
    </div>
    </>
}

export default AdvancedSearch