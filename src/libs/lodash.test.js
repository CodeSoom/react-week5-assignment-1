import _ from './lodash';

describe('lodash', () => {
  describe('first', () => {
    it('returns first element', () => {
      expect(_.first([1, 2, 3])).toBe(1);
    });

    it('returns undefined if iterable is empty', () => {
      expect(_.first([])).toBeUndefined();
    });

    it('returns undefined if iterable is invalid', () => {
      expect(_.first(undefined)).toBeUndefined();
    });
  });
});
