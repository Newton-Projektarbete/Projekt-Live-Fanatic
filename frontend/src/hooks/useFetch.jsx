import { useState, useEffect } from 'react';

const BACKEND_URL = 'http://localhost:3333';

export const useFetch = (url, method = "GET", postProcessingFunctionName = 'json') => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  const cancel = () => abortController?.abort();

  useEffect(() => {

    if (typeof url !== 'string') throw new Error("useFetch expects a string as an URL");

    const urlWithBackend = url.startsWith('/') ? BACKEND_URL + url : url;

    setData(null);
    setError(null);
    setIsLoading(false)

    if (!url) return;
    setIsLoading(true)

    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    
    fetch(urlWithBackend, {
      signal: newAbortController.signal,
      method,
    })
      .then(res => res[postProcessingFunctionName]())
      .then(resData => {
        setIsLoading(false);
        setData(resData);
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
        setAbortController(null);
      });
    return () => {
      // Aborting must be done instantly instead of using cancel() due to React StrictMode mounting components twice.
      newAbortController.abort();
    }
  }, [url, method])

  return { data, isLoading, error, cancel }
}

// Simpel exempelkod på användning av useFetch i en component
/* 
function MyComponent() {
    const { data, isLoading } = useFetch('/data/users');

    return <div>
        <p>isLoading: {isLoading ? 'true' : 'false'}</p>
        <p>data: {data ? JSON.stringify(data) : ''}</p>
    </div>
*/


// Full exempelkod på useFetch i en component
/* 
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react';

function MyComponent(){

    const [ fetchUrl, setFetchUrl ] = useState('');
    const { cancel: cancelFetchingUsers, data: users, isLoading: isLoadingUsers, error } = useFetch(fetchUrl);

    useEffect(()=>{
        setFetchUrl('/data/users');
        return () => {
            cancelFetchingUsers();
        }
    }, [])

    return <>
        {
            isLoadingUsers ? <>
                <h2>Users</h2>
                {users.map(user =>
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                )}
            </>
            : <>
                <p>Loading users...</p>
                <button onClick={cancelFetchingUsers}>Cancel</button>
            </>
        }
    </>
}

export default MyComponent
*/