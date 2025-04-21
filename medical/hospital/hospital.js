import { apiClient } from '../../utils/request';
import { hospitalSchema } from './schemas/hospital.schema';

export const HospitalAPI = {
  /**
   * @param {Object} params - 검색 파라미터
   * @returns {Promise<Hospital[]>} 병원 목록
   */
  async searchHospitals(params) {
    const data = await apiClient.get(
      'HIRA', 
      'hospInfoServicev2/getHospBasisList', 
      params
    );
    return hospitalSchema.parse(data.response.body.items.item); // Zod 검증
  },

  // 병원 실시간 병상 정보
  async getRealTimeBeds(ykiho) {
    return apiClient.get(
      'NCA',
      'emdSrsillnessSickbedService/getEmdSrsillnessSickbedList',
      { ykiho }
    );
  }
};

