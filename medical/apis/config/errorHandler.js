export function handleAPIError(error) {
  const errorMap = {
    'HTTP 404': '요청한 정보를 찾을 수 없습니다.',
    'INVALID_KEY': 'API 키가 유효하지 않습니다.',
    'OVER_QUERY': '일일 요청 한도를 초과했습니다.',
  };

  const message = errorMap[error.code] || '서버 연결에 실패했습니다.';
  throw new Error(`[API ERROR] ${message} (${error.message})`);
}
