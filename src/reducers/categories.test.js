import reducer from './categories';
import { setCategories, setCategoryActiveId } from '../actions';
import { categoriesData } from '../fixtures';

describe('categories', () => {
  const initialState = {
    categories: [],
    activeId: -1,
  };

  describe('setCategories', () => {
    it('새로운 카테고리를 저장한다.', () => {
      const state = reducer(initialState, setCategories(categoriesData));

      expect(state.categories).toHaveLength(3);
      expect(state.categories[0].id).toBe(1);
      expect(state.categories[0].name).toBe('한식');
    });
  });

  describe('setCategoryActiveId', () => {
    it('activeId가 해당 id값으로 바뀐다.', () => {
      const state = reducer(initialState, setCategoryActiveId(10));

      expect(state.activeId).toBe(10);
    });
  });

  describe('예외상황처리', () => {
    it('액션 타입이 존재하지 않으면, 기본 state를 반환한다.', () => {
      const state = reducer(initialState, {});

      expect(state).toEqual(initialState);
    });

    it('초기 state가 undefined이면, 기본 state를 반환한다.', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });
});
