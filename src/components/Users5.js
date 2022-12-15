import React, { useEffect, useState } from "react";
import axios from 'axios'

const Users5 = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
//     axios("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       setUsers(res.data);
//       axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
//       ).then((res) => setPosts(res.data));
//     })
// .catch((error) => {
//   console.log("error", error);
// })
// .finally(()=> setIsLoading(false));
    getData();
  }, []);

  const getData = async () => {
   
   try{
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );

    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
    );

    setIsLoading(false);
    setUsers(users);
    setPosts(posts);
  
    console.log("users", users)
    console.log("posts", posts)
   } catch(error){
    console.log("errorlarca", error)
   }
  };


  return (
    <div>
      <h2>Users 5</h2>
      {isLoading && <div>Yükleniyor...</div>}
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>

      <h2>Posts 5</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users5;
