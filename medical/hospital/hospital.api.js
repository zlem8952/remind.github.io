import { API_KEYS, API_ENDPOINTS } from '../../config';
import { apiClient } from '../../utils/api-client';
import { HospitalSchema } from './schemas/hospital.schema';

export const HospitalAPI = {
  /**
   * 병원 검색
   * @param {Object} params - 검색 파라미터
   * @returns {Promise<Hospital[]>} 병원 목록
   */
  async search(params) {
    try {
      const response = await apiClient.get({
        baseURL: API_ENDPOINTS.HOSPITAL.BASE,
        url: API_ENDPOINTS.HOSPITAL.SEARCH,
        params: {
          serviceKey: API_KEYS.HIRA,
          _type: 'json',
          ...params
        }
      });
      
      return HospitalSchema.parse(response.data.response.body.items.item);
    } catch (error) {
      throw new APIError('HOSPITAL_SEARCH_FAILED', error);
    }
  },

  /**
   * 병원 상세 정보 조회
   * @param {string} ykiho - 병원 기관ID
   */
  async getDetail(ykiho) {
    // 상세 구현
  }
};
