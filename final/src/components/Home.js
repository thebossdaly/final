// Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Welcome to Your Company</h2>
      <p>Explore our latest posts and updates.</p>
    </div>
  );
};

export default Home;
