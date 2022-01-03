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

  describe('get', () => {
    it('returns value of object', () => {
      expect(_.get({ a: 1 }, 'a')).toBe(1);
    });

    it('returns getter by given key', () => {
      const getter = _.get('a');

      expect(getter({ a: 1 })).toBe(1);
    });

    it('returns undefined if object is not found', () => {
      expect(_.get({ a: 1 }, 'b')).toBeUndefined();
    });
  });
});
