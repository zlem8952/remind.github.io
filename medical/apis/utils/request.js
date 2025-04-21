import { API_CONFIG } from '../config/api.config';
import { handleAPIError } from '../config/errorHandler';

export const apiClient = {
  async get(apiType, endpoint, params) {
    const config = API_CONFIG[apiType];
    const url = new URL(`${config.BASE_URL}${endpoint}`);
    
    url.search = new URLSearchParams({
      ...params,
      serviceKey: config.KEY,
      _type: 'json', // JSON 응답 강제
    });

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      handleAPIError(error);
    }
  }
};
