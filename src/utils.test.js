import { CHECK_SYMBOL, check } from './utils';

describe('check', () => {
  let obj;

  context('with equal id', () => {
    beforeEach(() => {
      obj = {
        id: 1,
        name: 'some name',
      };
    });

    it('returns obj updated name', () => {
      // when
      const result = check(obj, obj.id);
      // then
      expect(result.name).toBe(`${obj.name}${CHECK_SYMBOL}`);
    });
  });

  context('without equal id', () => {
    beforeEach(() => {
      obj = {
        id: 1,
        name: 'some name',
      };
    });

    it('do not check th obj', () => {
      // when
      const result = check(obj, obj.id + 1);
      // then
      expect(result.name).toBe(obj.name);
    });
  });

  context('already with symbol', () => {
    beforeEach(() => {
      obj = {
        id: 1,
        name: `some name${CHECK_SYMBOL}`,
      };
    });

    it('return it as it is', () => {
      // when
      const result = check(obj, obj.id);
      // then
      expect(obj.name).toBe(result.name);
    });
  });
});
