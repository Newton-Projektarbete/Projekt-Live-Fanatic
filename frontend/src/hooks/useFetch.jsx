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