// pharmacy.api.js
import { API_KEYS, API_ENDPOINTS } from '../../config';
import { apiClient } from '../../utils/api-client';
import { PharmacySchema } from './schemas/pharmacy.schema';

export const PharmacyAPI = {
  async search({ name, address, lat, lon, radius = 1000 }) {
    const params = {
      serviceKey: API_KEYS.PHARMACY,
      yadmNm: name,
      dutyAddr: address,
      xPos: lon,
      yPos: lat,
      radius,
      _type: 'json'
    };

    const response = await apiClient.get({
      baseURL: API_ENDPOINTS.PHARMACY.BASE,
      url: API_ENDPOINTS.PHARMACY.SEARCH,
      params
    });

    return PharmacySchema.parse(response.data.response.body.items.item);
  }
};
