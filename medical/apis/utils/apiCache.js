import axios from 'axios';
import { cacheManager } from './cache-manager';

export const apiClient = {
  async get({ baseURL, url, params }) {
    const cacheKey = JSON.stringify({ baseURL, url, params });
    const cached = cacheManager.get(cacheKey);
    if (cached) return cached;

    const response = await axios.get(url, { baseURL, params });
    cacheManager.set(cacheKey, response.data);
    return response.data;
  }
};
