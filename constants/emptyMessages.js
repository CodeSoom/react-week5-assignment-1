export function baseMessage(text = '목록') {
  return `아직 ${text}이 비어있어요`;
}

const EMPTY_MESSAGES = {
  REGION: baseMessage('지역 목록'),
};

export default EMPTY_MESSAGES;
