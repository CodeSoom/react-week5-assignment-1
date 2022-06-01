import { baseErrorMessage } from './errorMessages';

describe('errorMessages', () => {
  context('전달된 `text` 인자가 없으면', () => {
    test('"목록"을 가져오지 못했다는 메세지를 반환한다', () => {
      const message = baseErrorMessage();

      expect(message).toBe('일시적으로 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요.');
    });
  });

  context('전달된 `text` 인자가 있으면', () => {
    test('`text`를 가져오지 못했다는 메세지를 반환한다', () => {
      const text = '지역 목록';
      const message = baseErrorMessage(text);

      expect(message).toBe('일시적으로 지역 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요.');
    });
  });
});
