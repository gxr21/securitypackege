import axios from 'axios';

const API_BASE_URL = 'https://3812-37-239-173-26.ngrok-free.app';

// Create an Axios instance with credentials enabled
const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // This allows sending and receiving cookies
});

// GET request with cookies
export const getData = async (endpoint) => {
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// POST request with cookies
export const postData = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
