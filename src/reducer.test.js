import reducer from './reducer';

import { setCategories } from './actions';
import { CATEGORIES } from './fixtures';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(previousState, setCategories(CATEGORIES));

      expect(categories.length).toBe(4);
    });
  });
});
