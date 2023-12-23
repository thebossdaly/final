// HomePage.js
import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { getPosts } from '../services/api';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => setPosts(response.data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default HomePage;
