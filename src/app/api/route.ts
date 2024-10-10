import axios from 'axios';
import {Post} from "./types";

export const fetchUsers = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data; 
    } catch (error) {
        throw new Error('Failed to fetch users: ');
    }
};

export const fetchPost = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data; 
    } catch (error) {
        throw new Error('Failed to fetch posts: ');
    }
};

export const PostsData = async (postData: Post) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        return response.data; 
    } catch (error) {
        throw new Error('Failed to create post: ');
    }
};
