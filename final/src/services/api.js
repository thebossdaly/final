// services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => axios.get(`${API_BASE_URL}/posts`);
export const getPost = (id) => axios.get(`${API_BASE_URL}/posts/${id}`);
export const createPost = (postData) => axios.post(`${API_BASE_URL}/posts`, postData);
export const updatePost = (id, postData) => axios.put(`${API_BASE_URL}/posts/${id}`, postData);
export const deletePost = (id) => axios.delete(`${API_BASE_URL}/posts/${id}`);
