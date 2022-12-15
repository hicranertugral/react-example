import React, { useEffect, useState } from "react";
import axios from "axios";

const Users3 = () => {
  const [Users3, setUsers3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers3(res.data);

        axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
        ).then((res) => setPosts(res.data));
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h2>Users 3</h2>
      {isLoading && <div>Yükleniyor...</div>}
      <ul>
        {Users3.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users3;
