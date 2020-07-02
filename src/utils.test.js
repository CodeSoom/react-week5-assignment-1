import { CHECK_SYMBOL, check } from './utils';

describe('check', () => {
  const obj = {
    id: 1004,
    name: 'object name',
  };

  context('with equal id', () => {
    it('check the obj', () => {
      // when
      const result = check(obj, obj.id);
      // then
      expect(result.name).toBe(`${obj.name}${CHECK_SYMBOL}`);
    });
  });

  context('without equal id', () => {
    it('do not check th obj', () => {
      // when
      const result = check(obj, obj.id + 1);
      // then
      expect(result.name).toBe(obj.name);
    });
  });

  context('already with symbol', () => {
    it('return it as it is', () => {
      // given
      const target = {
        ...obj,
        name: `${obj.name}${CHECK_SYMBOL}`,
      };
      // when
      const result = check(target, obj.id);
      // then
      expect(target.name).toBe(result.name);
    });
  });
});
