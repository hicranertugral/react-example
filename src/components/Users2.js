import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Users2 = () => {
const [Users2, setUsers2] = useState([]);
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/Users")
        .then(res => setUsers2(res.data))
        .finally(() => setIsLoading(false))

    }, [])
  return (
    <div>
<h2>Users 2</h2>
{isLoading && <div>Yükleniyor...</div>}
<ul>
    {
        Users2.map((user)=> (
            <li key={user.id}>{user.name}</li>
        ))
    }
</ul>


    </div>
  )
}

export default Users2