import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';

function Main(){
    useEffect( ()=>{
        async function load(){
        let concerts = await fetch('data/concert/1')
        concerts = await concerts.json()
        console.log(concerts)
        variableUpdateMethod(concerts)
        }
        load()
    },[])

    const [variableName, variableUpdateMethod] = useState([])

return <>
<div className="body">

        <div className="main-content-page">
            <div className="main-content-header">
                <h1 className="main-h1" >Live concerts</h1>
                <Link to="/main-view-all" className="view_all">View all</Link>
            </div>
            <div className="row">
            <div className="main-content-box">

                    <div className="main-img-box"> <img className="main-img" src="../design-html/images/girl-group-itzy-attend-a-red-carpet-event-at-the-mnet-asian-news-photo-1639422911.jpg" alt=""/>
                        <div to="" onclick="Toggle()" className="material-symbols-outlined main-like-btn">
                            <span className="like-btn-1 material-symbols-outlined">favorite</span>
                        </div>
                    </div>

                    <div className="child-div">
                      <em>{variableName.map(concert => 
        <Link to="" key={concert.concert_id}>
            {concert.concert_name}
        </Link>)}</em>
        <em>{variableName.map(concert => 
        <Link to="" key={concert.concert_id}>
            {concert.artist_name}
        </Link>)}</em>
                    </div>
                </div>
                

          </div>
        </div>


    
</div>
</>
}

export default Main