function baseErrorMessage(text = '목록') {
  return `일시적으로 ${text}을 가져오지 못했어요. 잠시 후 다시 시도해주세요.`;
}

const ERROR_MESSAGES = {
  REGION: baseErrorMessage('지역 목록'),
};

export default ERROR_MESSAGES;
