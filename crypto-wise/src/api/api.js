// src/api/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Замените на реальное API позже

export const fetchCourses = async () => {
    const response = await axios.get(`${API_URL}/posts`); // для теста с JSONPlaceholder
    return response.data.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.body,
    }));
};

export const fetchCourseDetail = async (id) => {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return {
        id: response.data.id,
        title: response.data.title,
        description: response.data.body,
    };
};