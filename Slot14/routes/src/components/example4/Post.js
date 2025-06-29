import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>Post List (from JSON Server)</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/example4/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}