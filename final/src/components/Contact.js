// Contact.js
import React, { useEffect, useState } from 'react';

const Contact = () => {
  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Contact information and form.</p>
    </div>
  );
};

export default Contact;
