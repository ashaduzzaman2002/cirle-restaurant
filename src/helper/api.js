import axios from "axios";

// export const baseURL = 'http://localhost:8000';
export const baseURL = 'http://api.floraltech.in';

export const dbObject = axios.create({
    withCredentials: true,
    baseURL
});