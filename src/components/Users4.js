import React, { useEffect, useState } from "react";
import axios from "axios";

const Users4 = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // await i ekliyoruz buradaki işlem bitmeden bir alt satıra geçsin istemiyoruz. Users olsun bir alt satıra geçsin
    // const users = await axios("https://jsonplaceholder.typicode.com/users")
    // console.log(users)

    //
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
  };


  return (
    <div>
      <h2>Users 4</h2>
      {isLoading && <div>Yükleniyor...</div>}
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>

      <h2>Posts 4</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users4;
