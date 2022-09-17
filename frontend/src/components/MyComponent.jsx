import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react';

function MyComponent(){
    const [ fetchUrl, setFetchUrl ] = useState('');
    const { cancel: cancelFetchingData, data: fetchedData, isLoading: isLoadingData, error } = useFetch(fetchUrl);

    useEffect(()=>{
        setFetchUrl('/data/concerts');
        return () => {
            cancelFetchingData();
        }
    }, [])

    return <>
        {
            isLoadingData ? <>
                <h2>Users</h2>
                {fetchedData.map(user =>
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                )}
            </>
            : <>
                <p>Loading Data...</p>
                <button onClick={cancelFetchingData}>Cancel</button>
            </>
        }
    </>
}

export default MyComponent