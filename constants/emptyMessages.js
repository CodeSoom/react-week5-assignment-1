export function baseMessage(text = '목록') {
  return `${text}이 비어있어요`;
}

const EMPTY_MESSAGES = {
  REGION: baseMessage('지역 목록'),
  CATEGORY: baseMessage('업종 목록'),
  RESTAURANT: baseMessage('레스토랑 목록'),
};

export default EMPTY_MESSAGES;
