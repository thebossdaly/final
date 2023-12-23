// PostForm.js
import React, { useEffect, useState } from 'react';

const PostForm = () => {
  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    // For a POST request to create a new post
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Post',
        body: 'This is the content of the new post.',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error creating post:', error));
  }, []);

  return (
    <div>
      <h2>Create a New Post</h2>
      <p>Post form goes here.</p>
    </div>
  );
};

export default PostForm;
