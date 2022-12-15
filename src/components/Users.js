import React, {useEffect, useState} from 'react'


const Users = () => {
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json()) // res.json() yerine istediğimiz veriyi girebiliriz o artık bizim için (altta belirttiğimiz)data olacak.
       // api'nin getirdiği sonucu bir sonraki then zincirine geçirmiş olduk. 
       //bir state yazıp ekranda görüntülemek için usestate hooku (setUsers) ile işlem yapıyoruz
        .then(data => setUsers(data))
        .finally(() => setIsLoading(false))

    }, [])
  return (
    <div>
<h2>Users 3</h2>
{isLoading && <div>Yükleniyor...</div>}
<ul>
    {
        users.map((user)=> (
            <li key={user.id}>{user.name}</li>
        ))
    }
</ul>


    </div>
  )
}

export default Users