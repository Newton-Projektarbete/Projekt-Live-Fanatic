import {Outlet, useParams } from 'react-router-dom'

function ConcertChild(concerts) {
    let params = useParams()
    let id = params.concert_id - 1;

    console.log('Child Fetched: ')
    console.log(concerts)
    console.log('--------------')

    return <>
        <div className="body">
            <h2>Concert Child Page: {useParams().id}</h2>
            {/* <p>{concerts[0].concert_name}</p> */}
            {/* <p>Concert Name: {concerts[0].concert_name}</p> */}
        </div>
        <Outlet />
    </>
}

export default ConcertChild