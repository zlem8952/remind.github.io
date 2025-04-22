export const API_ENDPOINTS = {
  HOSPITAL: {
    BASE: 'https://apis.data.go.kr/B551182/hospInfoService',
    SEARCH: '/getHospBasisList',
    DETAIL: '/getHospDetailInfo'
  },
  PHARMACY: {
    BASE: 'https://apis.data.go.kr/B551182/pharmacyInfoService',
    SEARCH: '/getParmacyBasisList'
  },
  EMERGENCY: {
    BASE: 'https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService',
    BED_STATUS: '/getEmrgncyBedInfoList'
  }
};
