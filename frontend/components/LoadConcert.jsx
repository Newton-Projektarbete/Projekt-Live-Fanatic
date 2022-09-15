import {useState, useEffect} from 'react';



function LoadConcert(){

    useEffect( ()=>{
        async function load(){
        let concerts = await fetch('data/concert')
        concerts = await concerts.json()
        console.log(concerts)
        variableUpdateMethod(concerts)
        }
        load()
    },[])

    const [variableName, variableUpdateMethod] = useState([])

    return <>
    <div className='body'>
        <h2>Use Effect Example</h2>
        <p>Current variable value: <em>{variableName.map(concert => 
        <li key={concert.concert_id}>
            {concert.location}/{concert.concert_name}
        </li>)}</em></p>
    </div>
    </>
}

export default LoadConcert