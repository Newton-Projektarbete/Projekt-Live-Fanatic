import { BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";
import ConcertChild from "./ConcertChild";
import { useEffect, useState } from 'react'
import { useMemo } from "react";


function ConcertParent(concerts) {

    console.log('Parent fetched:')
    console.log(concerts)
    console.log('----------')
    
    return <>
        <div className="body">
            <h2>Concert Parent Page</h2>
            {/* <p>{concerts[0].name}</p> */}
            {/* <p>{concerts[0].concert_name}</p> */}
            {/* <p>Concert Name: {concerts[0].concert_name}</p> */}
        </div>
    </>

    /* return <Routes>
                <Route path="/concert-parent/:id" element={<ConcertChild {...concerts}/>}/>
            </Routes> */
}

export default ConcertParent