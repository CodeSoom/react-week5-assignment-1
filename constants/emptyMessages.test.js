import { baseMessage } from './emptyMessages';

describe('emptyMessages', () => {
  context('전달된 `text` 인자가 없으면', () => {
    it('"목록"이 없다는 메세지를 반환한다', () => {
      const message = baseMessage();

      expect(message).toBe('아직 목록이 비어있어요');
    });
  });

  context('전달된 `text` 인자가 있으면', () => {
    it('`text`이 없다는 메세지를 반환한다', () => {
      const text = '지역 목록';
      const message = baseMessage(text);

      expect(message).toBe(`아직 ${text}이 비어있어요`);
    });
  });
});
