import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LiveFanaticRouter from '../components/LiveFanaticRouter'

function App() {

  // example
/*   useEffect(() => {
    async function load() {

      let res = await fetch('127.0.0.1:5173', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'example@nodehill.com',
          password: 'abc123'
        })
      })
      console.log(res)
    }
    load()
  }, []) */

  return <>
    <LiveFanaticRouter/>
    
  {/* <h2>This is a placeholder page, change for your react build directory</h2>
    <p>
        <a href="/examples">Examples of audio and video streaming here</a>
    </p> */}
    
  </>
}

export default App
