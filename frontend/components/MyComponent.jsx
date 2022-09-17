import { useFetch } from '../src/hooks/useFetch'
import { useEffect, useState } from 'react';

function MyComponent(){
    const [ fetchUrl, setFetchUrl ] = useState('');
    const { cancel: cancelFetchingUsers, data: users, isLoading: isLoadingUsers, error } = useFetch(fetchUrl);

    useEffect(()=>{
        setFetchUrl('/data/concerts');

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