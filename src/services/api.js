import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const TokenInterceptor = async (config) => {
  const token = '';
  if (config.includeToken && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

apiClient.interceptors.request.use(TokenInterceptor);

const callApi = async (method, path, data = null, includeToken = false) => {
  try {
    const response = await apiClient({
      method,
      url: path,
      data,
      includeToken
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    if (error.response) {
      throw error.response;
    } else {
      throw error;
    }
  }
};

export { callApi };