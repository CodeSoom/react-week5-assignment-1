import isEmpty from './utils';

describe('isEmpty', () => {
  context('with content', () => {
    it('returns false', () => {
      expect(isEmpty('Hi')).toBeFalsy();
    });
  });

  context('without content', () => {
    it('returns false', () => {
      expect(isEmpty('')).toBeTruthy();
    });
  });
});
