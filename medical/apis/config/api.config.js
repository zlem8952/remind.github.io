// API 기본 설정
export const API_CONFIG = {
  HIRA: {
    KEY: process.env.HIRA_API_KEY,
    BASE_URL: 'https://apis.data.go.kr/B551182/',
  },
  NCA: {
    KEY: process.env.NCA_API_KEY,
    BASE_URL: 'https://apis.data.go.kr/119/',
  },
  // 다른 기관 추가
};

// API 버전 관리
export const API_VERSION = {
  HOSPITAL: 'v2',
  PHARMACY: 'v1',
};
