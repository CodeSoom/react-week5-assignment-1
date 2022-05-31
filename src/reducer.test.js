import reducer from './reducer';

import { setCategories } from './action';
import { CATEGORIES } from './fixture';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(previousState, setCategories(CATEGORIES));

      expect(categories).toBe();
    });
  });
});
