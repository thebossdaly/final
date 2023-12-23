// PostDetail.js
import React, { useEffect, useState } from 'react';

const PostDetail = () => {
  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Post Detail</h2>
      <p>Details of a specific post.</p>
    </div>
  );
};

export default PostDetail;
