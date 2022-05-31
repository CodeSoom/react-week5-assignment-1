import reducer from './reducer';

import { setCategories } from './action';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(previousState, setCategories([
        { id: 1, name: '서울' },
      ]));

      expect(categories).toBe(categories);
    });
  });
});
