import reducer from './categories';
import { setCategories } from '../actions';

describe('categories', () => {
  const initialState = {
    categories: [],
  };

  describe('setCategories', () => {
    it('새로운 카테고리를 저장한다.', () => {
      const categories = [{ id: 1, name: '한식' }];

      const state = reducer(initialState, setCategories(categories));

      expect(categories).toHaveLength(1);
      expect(state.categories[0].id).toBe(1);
      expect(state.categories[0].name).toBe('한식');
    });
  });
});
