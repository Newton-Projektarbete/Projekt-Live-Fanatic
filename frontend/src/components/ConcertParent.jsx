import { BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";
import { useEffect, useState } from 'react'


function ConcertParent() {

    
    return <>
        <div className="body">
            <h2>Concert Parent Page</h2>
            {/* <p>{concerts[0].name}</p> */}
            {/* <p>{concerts[0].concert_name}</p> */}
            {/* <p>{fetchedData[0].concert_name}</p> */}
            {/* <p>Concert Name: {concerts[0].concert_name}</p> */}
        </div>
    </>

    /* return <Routes>
                <Route path="/concert-parent/:id" element={<ConcertChild {...concerts}/>}/>
            </Routes> */
}

export default ConcertParent