import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Create axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens, etc.
axiosInstance.interceptors.request.use(
  config => {
    // You can add auth token here
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle common errors (401, 403, 500, etc.)
    // TODO: Replace console.error with proper error logging service in production
    if (error.response) {
      console.error('API Error:', error.response.data);
    }
    return Promise.reject(error);
  }
);

// API client methods
export const apiClient = {
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.get<T>(endpoint, config);
    return response.data;
  },

  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.post<T>(endpoint, data, config);
    return response.data;
  },

  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.put<T>(endpoint, data, config);
    return response.data;
  },

  async patch<T>(
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.patch<T>(endpoint, data, config);
    return response.data;
  },

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.delete<T>(endpoint, config);
    return response.data;
  },
};

export default axiosInstance;
