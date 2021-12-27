import reducer from './reducer';

import { setCategories } from './actions';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(
        previousState,
        setCategories([{ id: 1, name: '카테고리1' }])
      );

      expect(categories.length).toBe(1);
    });
  });
});
